const User = require('../model/user.model');
const bcrypt = require('bcryptjs');
const JsonWebToken = require('jsonwebtoken');

exports.showRegisterPage = async (req, res) => {
    try {
        res.render("register.ejs");
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
    }
};

exports.registerUser = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ message: "User already registered, please login" });
        }

        // Encrypt the password
        const hashpassword = await bcrypt.hash(req.body.password, 10);

        // Create user
        user = new User({
            ...req.body,
            password: hashpassword
        });

        await user.save();

        // res.status(201).json({ user, message: "User registered successfully" });
        // Optionally, you can redirect to the login page
        res.redirect("/login");
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
    }
};

exports.showLoginPage = async (req, res) => {
    try {
        res.render("login.ejs");
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
    }
};

exports.loginUser = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.redirect("/api/user/login");  // Redirect to login page if user not found
        }

        // console.log(user);

        let matchPassword = await bcrypt.compare(req.body.password, user.password);
        if (!matchPassword) {
            return res.redirect("/api/user/login");  // Redirect to login page if password mismatch
        }

        let token = JsonWebToken.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Set token in cookies or in localStorage (depending on your client setup)
        res.cookie('auth_token', `${token}`);  // Using cookies for token storage

        // Redirect to blog page after successful login
        res.redirect('/blog');
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
    }
};

