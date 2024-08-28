const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../model/user.model'); // Replace with your User model

passport.use(new LocalStrategy(
  {
    email: 'email',  
    password: 'password' 
  },
  async (email, password, done) => {
    try {
      // Find the user by email
      const user = await User.findOne({ email: email });

      if (!user) {
        return done(null, false, { message: 'Incorrect email or password.' });
      }

      // Validate password (assuming you have a method to validate passwords)
      const isMatch = await user.validatePassword(password);
      if (!isMatch) {
        return done(null, false, { message: 'Incorrect email or password.' });
      }

      // If everything is fine, return the user
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }
));

// Serialize and deserialize user (required for persistent sessions)
// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser(async (id, done) => {
//   try {
//     const user = await User.findById(id);
//     done(null, user);
//   } catch (err) {
//     done(err);
//   }
// });
