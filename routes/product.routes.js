const express = require('express')

const productRoutes = express();
const { addNewProduct,getAllProducts,getProduct } = require('../controller/product.controller')
// const {
//     addNewProduct,
//     getAllProducts,
//     getProduct,
//     replaceProduct,
//     upateProduct,
//     deletePreoduct
// } = require('../controller/product.controller');

// Add New Product - Create
productRoutes.post('/', addNewProduct)

// Get All Products - Read
productRoutes.get('/',getAllProducts)

// Get Single Product - Read
productRoutes.get('/get-product',getProduct)

// Replace Data - PUT
// productRoutes.put('/:id',replaceProduct)

// Update Data - PATCH
// productRoutes.patch('/:id',upateProduct)

// Delete Data - DELETE
// productRoutes.delete('/:id',deletePreoduct)

module.exports = productRoutes;