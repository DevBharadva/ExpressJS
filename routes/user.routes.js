const express = require('express');

const userRoutes = express.Router();

const {addNewUsers,getAllUser, getUser,UpdateUser, deleteUser} = require('../controller/user.controller')

userRoutes.post("/",addNewUsers);

userRoutes.get("/",getAllUser)
userRoutes.get("/get-user",getUser)

userRoutes.patch("/update",UpdateUser)
userRoutes.delete("/delete",deleteUser)

module.exports = userRoutes;
