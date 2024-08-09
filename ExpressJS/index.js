/* Day-05 */

const express = require('express');
const app = express();
const morgan = require('morgan');
const product = require('./mock_data.json')

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.use(morgan('dev'))

// app.get('/',(req,res)=>{
//     res.end('Welcome to Your own server');
// })

app.post('/product',(req,res)=>{
    product.push(req.body);
    res.json({product: req.body, message:'product Added success'});
})

app.get('/product',(req,res)=>{
    res.json(product)
})

app.listen(4040,()=>{
    console.log('server start');   
})