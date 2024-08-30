const express = require('express');
const router = express.Router();
const { addToCart, getAllCarts, updateCart } = require('../controller/cart.controller');
const { verifyToken } = require('../helpers/tokenVerify');
const { deleteCart } = require('../controller/cart.controller');

router.get('/getall',verifyToken,getAllCarts);
router.post('/addcart', verifyToken, addToCart);
router.put('/update',verifyToken,updateCart)
router.delete('/delete',verifyToken,deleteCart);

module.exports = router;