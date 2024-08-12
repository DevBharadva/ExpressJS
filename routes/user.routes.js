const express = require('express');

const userRoutes = express();

const {
    addNewUsers,
    getAllUsers,
    getUsers,
    replaceUsers,
    updateUsers,
    deleteUsers
} = require('../controller/user.controller');

userRoutes.post('/',addNewUsers);
userRoutes.get('/',getAllUsers);
userRoutes.get('/:id',getUsers);
userRoutes.put('/:id',replaceUsers);
userRoutes.patch('/:id',updateUsers);
userRoutes.delete('/:id',deleteUsers);

module.exports = userRoutes;
