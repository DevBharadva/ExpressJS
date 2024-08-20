const express = require('express');

const userRoutes = express.Router();

const {addNewUsers,getAllUser, getUser,UpdateUser, deleteUser, register, Login} = require('../controller/user.controller')

userRoutes.post("/",addNewUsers);

userRoutes.get("/",getAllUser)
userRoutes.get("/get-user",getUser)

userRoutes.patch("/update",UpdateUser)
userRoutes.delete("/delete",deleteUser)

userRoutes.post('/register',register);
userRoutes.post('/login',Login);

module.exports = userRoutes;
