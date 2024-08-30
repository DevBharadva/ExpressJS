
const express = require('express');
const app = express();
const morgan = require('morgan');
const productRoutes = require('./routes/product.routes');
const userRoutes = require('./routes/user.routes')
const { mongoose } = require('mongoose');
const router = require('./routes/cart.routes');

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
app.use('/api/user',userRoutes)
app.use('/api/cart',router)

app.listen(4444, () => {
    console.log("Own server started");
})