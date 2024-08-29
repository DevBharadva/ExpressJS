
const express = require('express');
const app = express();
const morgan = require('morgan');
const productRoutes = require('./routes/product.routes');
const { mongoose } = require('mongoose');
const { addToCart } = require('./controller/car.controller');

require('dotenv').config()
// port= process.env.PORT
const uri = process.env.MODEL_URI

mongoose
    .connect(uri)
    .then(() => console.log(`Database connection successFully...`))
    .catch(err => console.log(err))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.end("Welcome to Express Server");
})

app.use("/api/product", productRoutes);
app.use('/cart',addToCart)

app.listen(4444, () => {
    console.log("Own server started");
})