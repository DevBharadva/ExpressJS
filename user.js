const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path')
const passport = require('passport');
const session = require('express-session');

const ejs = require('ejs');
app.set("view engine",'ejs')
// const secret = process.env.JWT_SECRET

app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

require('dotenv').config()
port= process.env.PORT
const uri = process.env.MODEL_URI

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev')) 
 
 const mongoose = require('mongoose')

mongoose
.connect(uri)
.then(()=> console.log(`Database Conection SuccessFully...`))
.catch(err=>console.log(err));

const userRoutes = require('./routes/user.routes')

app.use('/',userRoutes)

app.listen(port,()=>{
    console.log(`server start`);   
})