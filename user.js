/* Day-06 */

const express = require('express');
const app = express();
const morgan = require('morgan');
const User = require('./user.json')

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.use(morgan('dev'))

// app.get('/',(req,res)=>{
//     res.end('Welcome to Your own server');
// })

app.post('/user',(req,res)=>{
    User.push(req.body);
    res.json({User: req.body, message:'user Added success'});
})

app.get('/user',(req,res)=>{
    res.json(User)
})

app.put("/user/:id",(req,res)=>{
    let id = +req.params.id;
    let UserIndex = User.findIndex((User) => User.id === id);
    User.splice(UserIndex,1,{...req.body});

    res.json({message:'replace User Succesfully'})
})

app.patch("/user/:id",(req,res)=>{
    let id = +req.params.id;
    let UserIndex = User.findIndex((User) => User.id === id);
    const Users = User[UserIndex];
    User.splice(UserIndex,1,{...Users,...req.body});
    res.json({message:'Update User Succesfully'})
})

app.listen(3333,()=>{
    console.log(`server start at  ${'http://localhost:3333'}`);   
})