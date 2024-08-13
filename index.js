/* Day-07 - MVC Folder Strucer (MVC - Model-View-Controller) */

const express = require('express');
const app = express();
const morgan = require('morgan');
const productRoutes = require('./routes/product.routes');
const { mongoose } = require('mongoose');

mongoose
    .connect("mongodb://127.0.0.1:27017/NewProduct")
    .then(() => console.log(`Database connection successFully...`))
    .catch(err => console.log(err))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.end("Welcome to Express Server");
})

app.use("/api/product", productRoutes);

app.listen(1020, () => {
    console.log("Own server started");
})