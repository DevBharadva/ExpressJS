const express = require('express');
const { login, register, todolist } = require('../controller/user.controller')
const userRoutes = express.Router();
const passport = require('passport');
const { isAuthenticated } = require('../helpers/passport');
userRoutes.use(passport.initialize());
userRoutes.use(passport.session());

userRoutes.get('/', (req, res, next) => {
    res.send('<h1>Welcome to Home Page</h1> <p>Please <a href="/login">Login Now</a></p>')
    next();
})

userRoutes.post('/login',
    passport.authenticate('local', { failureRedirect: '/register' }),
    function (req, res) {
        res.redirect('/todolist');
    });


userRoutes.get('/login', login);

userRoutes.post('/register',register)
userRoutes.get('/register', register);


userRoutes.get('/todolist',isAuthenticated,todolist)

module.exports = userRoutes;