const express = require('express');

const userRoutes = express.Router();

const { addNewUsers, getAllUser, getUser, UpdateUser, deleteUser, register, Login, userProfile, updateProfile, deleteProfile, changePassword } = require('../controller/user.controller');
const { verifyToken } = require('../helpers/tokenVerify');
const { upload } = require('../helpers/imageUpload');

userRoutes.post("/", addNewUsers);

userRoutes.get("/", getAllUser)
userRoutes.get("/get-user", getUser)

userRoutes.patch("/update", UpdateUser)
userRoutes.delete("/delete", deleteUser)

userRoutes.post('/register',upload.single('progileImage'), register);
userRoutes.post('/login', Login);

userRoutes.get('/me', verifyToken, userProfile);

userRoutes.put('/update-profile', verifyToken, updateProfile);
userRoutes.delete('/delete-profile', verifyToken, deleteProfile);

userRoutes.post('/change-password', changePassword);

module.exports = userRoutes;