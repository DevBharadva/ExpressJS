/* Day-06 */

const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose')

mongoose
.connect("mongodb://127.0.0.1:27017/NewUser")
.then(()=> console.log(`Databaser Conection SuccessFully...`))
.catch(err=>console.log(err));

app.use(express.json());

app.use(morgan('dev'))

app.get('/',(req,res)=>{
    res.end('Welcome to Your own server');
})

const userRoutes = require('./routes/user.routes')

app.use('/api/user',userRoutes)

app.listen(3333,()=>{
    console.log(`server star`);   
})