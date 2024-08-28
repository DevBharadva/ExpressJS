const express = require('express');
const { Login, register, user } = require('../controller/user.controller')
const userRoutes = express.Router();
const passport = require('passport');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
userRoutes.use(passport.initialize());
userRoutes.use(passport.session());

userRoutes.get('/',(req,res,next)=>{
    res.send('<h1>Welcome to Home Page</h1> <p>Please <a href="/login">Login Now</a></p>')
    next();
})

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField:'password'},
async function(email, password, done) {
  await User.findOne({ email: email }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false, { message: 'Incorrect email.' }); }
      bcrypt.compare(password, user.password, function(err, isMatch) {
          if (err) { return done(err); }
          if (!isMatch) { return done(null, false, { message: 'Incorrect password.' }); }
          return done(null, user);
      });
  });
}));


userRoutes.post('/login', 
    passport.authenticate('local', { failureRedirect: '/login'}),
    function(req, res) {
      res.redirect('/');
    });

userRoutes.get('/login',Login);

userRoutes.get('/user',user);

      // userRoutes.get('/register',register)

module.exports = userRoutes;