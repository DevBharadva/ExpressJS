
const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose')
const path = require('path')

require('dotenv').config()
port= process.env.PORT
const uri = process.env.MODEL_URI

app.use('/public/images',express.static(path.join(__dirname,'public/images'))) 

mongoose
.connect(uri)
.then(()=> console.log(`Databaser Conection SuccessFully...`))
.catch(err=>console.log(err));

app.use(express.json());

app.use(morgan('dev'))

app.get('/',(req,res)=>{
    res.end('Welcome to Your own server');
})

const userRoutes = require('./routes/user.routes')

app.use('/api/user',userRoutes)

app.listen(port,()=>{
    console.log(`server star`);   
})