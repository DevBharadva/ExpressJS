require('../helpers/passport');
const express = require('express');
const {  register } = require('../controller/user.controller')
const userRoutes = express.Router();
const passport = require('passport');


userRoutes.get('/', (req, res, next) => {
    res.send('<h1>Welcome to Home Page</h1> <p>Please <a href="/login">Login Now</a></p>')
    next();
})

userRoutes.post('/login', passport.authenticate('local', {
        successRedirect: "todolist", 
        failureRedirect: 'register' 
        }));

userRoutes.get('/login', (req,res)=>{
    res.render('login')
});

userRoutes.post('/register',register)
userRoutes.get('/register', register);

userRoutes.get('/todolist',
    res.render('todolist')
)

module.exports = userRoutes;