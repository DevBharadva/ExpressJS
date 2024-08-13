const express = require('express');

const userRoutes = express.Router();

const {addNewUsers} = require('../controller/user.controller')

userRoutes.post("/",addNewUsers);

module.exports = userRoutes;
