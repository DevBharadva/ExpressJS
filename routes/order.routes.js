const express = require('express');

const orderRoutes = express.Router();
const { addNewOrder } = require('../controller/order.controller');
const { verifyToken } = require('../helpers/tokenVerify');

orderRoutes.post('/',verifyToken,addNewOrder);

module.exports = orderRoutes;