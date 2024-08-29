require('../helpers/passport');
const express = require('express');
const {  register } = require('../controller/user.controller')
const userRoutes = express.Router();
const passport = require('passport');
const bcrypt = require('bcrypt')

userRoutes.get('/', (req, res, next) => {
    res.send('<h1>Welcome to Home Page</h1> <p>Please <a href="/login">Login Now</a></p>')
    next();
})
userRoutes.get('/login', (req,res)=>{
    res.render('login')
});

userRoutes.get('/register', (req,res)=>{
    res.render('register')
});

userRoutes.post('/register',register)

userRoutes.post('/login', passport.authenticate('local', {
        successRedirect: "user", 
        failureRedirect: 'login' 
        }));


userRoutes.get('/todolist',(req,res)=>{
    res.render('user');
})

module.exports = userRoutes;