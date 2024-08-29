const express = require('express');
const router = express.Router();
const { addToCart } = require('../controller/car.controller');
const { verifyToken } = require('../helpers/tokenVerify');
const { deleteCart } = require('../controller/car.controller');

router.post('/addcart', verifyToken, addToCart);
router.delete('/delete',deleteCart);

module.exports = router;