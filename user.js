require('dotenv').config()

const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose')
const path = require('path')
const passport = require('passport');
const session = require('express-session');
const ejs = require('ejs');
const secret = process.env.JWT_SECRET
app.set("view engine",'ejs')
const router = require("./routes/user.routes")

port= process.env.PORT
const uri = process.env.MODEL_URI
app.use(session({ 
    secret: 'secret',
    resave: false,
    saveUninitialized: true
 }));
app.use('/public/images',express.static(path.join(__dirname,'public/images'))) 

app.use(passport.initialize());
app.use(passport.session());


mongoose
.connect(uri)
.then(()=> console.log(`Databaser Conection SuccessFully...`))
.catch(err=>console.log(err));

app.use(express.json());
app.use(morgan('dev'))

const userRoutes = require('./routes/user.routes')

// app.get('/',userRoutes)
app.use("/api",userRoutes)

app.listen(port,()=>{
    console.log(`server star`);   
})