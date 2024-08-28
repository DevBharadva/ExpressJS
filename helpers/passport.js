const bcrypt = require('bcrypt')
const User = require('../model/user.model');

exports.passport = async function(email, password, done) {
    await User.findOne({ email: email }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false, { message: 'Incorrect email.' }); }
        bcrypt.compare(password, user.password, function(err, isMatch) {
            if (err) { return done(err); }
            if (!isMatch) { return done(null, false, { message: 'Incorrect password.' }); }
            return done(null, user);
        });
    });
  }