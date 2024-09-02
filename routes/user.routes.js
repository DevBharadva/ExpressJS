const express = require('express');
const { showRegisterPage, registerUser, showLoginPage, loginUser } = require('../controller/user.controller');

const userRoutes = express.Router();

userRoutes.get("/register", showRegisterPage);
userRoutes.post("/register", registerUser);

userRoutes.get("/login", showLoginPage);
userRoutes.post("/login", loginUser);

module.exports = userRoutes;