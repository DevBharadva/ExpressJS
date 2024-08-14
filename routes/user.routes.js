const express = require('express');

const userRoutes = express.Router();

const {addNewUsers,getAllUser, getUser} = require('../controller/user.controller')

userRoutes.post("/",addNewUsers);

userRoutes.get("/",getAllUser)
userRoutes.get("/get-user",getUser)

module.exports = userRoutes;
