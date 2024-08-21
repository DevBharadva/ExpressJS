const express = require('express');

const userRoutes = express.Router();

const {addNewUsers,getAllUser, getUser,UpdateUser, deleteUser, register, Login, userProfile} = require('../controller/user.controller');
const { verifyToken } = require('../helpers/tokenVerify');

userRoutes.post("/",addNewUsers);

userRoutes.get("/",getAllUser)
userRoutes.get("/get-user",getUser)

userRoutes.patch("/update",UpdateUser)
userRoutes.delete("/delete",deleteUser)

userRoutes.post('/register',register);
userRoutes.post('/login',Login);

userRoutes.get('/me',verifyToken,userProfile)

module.exports = userRoutes;
