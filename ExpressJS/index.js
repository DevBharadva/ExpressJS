// npm init / /

/* Day-01 in ExpressJS */
// const express = require('express')

// const server = express();

// server.get('/',(req,res)=> {
//     res.setHeader('content-type','text/html');
//     res.write("<h1>Wlcome to ExpressJS<h1/>");
//     res.end();
// });

// server.get('/login',(req,res)=> {
//     res.setHeader('content-type','text/html');
//     res.write("<h1>Login-page in ExpressJS<h1/>");
//     res.end();
// });

// server.get('/about',(req,res)=> {
//     res.setHeader('content-type','text/html');
//     res.write("<h1>About to ExpressJS<h1/>");
//     res.end();
// });

// server.get('/singup',(req,res)=> {
//     res.setHeader('content-type','text/html');
//     res.write("<h1>signup to ExpressJS<h1/>");
//     res.end();
// });

// server.listen(4040,()=>{
//     console.log(`server start http://localhost:4040`);
// })

/* Day-02 in ExpressJS */

const express = require('express')

const server = express();
// CRUD -> create(POST),Read(GET),(Update(PuT,PATCH),(Delete(delete)))

server.get('/',(req,res)=> {
    res.setHeader('content-type','text/html');
    res.write("<h1>Wlcome to ExpressJS<h1/>");
    res.end();
});

server.get('/user',(req,res)=>{
    res.status(200);
    res.json({message:'User GET Method'})
})
server.post('/user',(req,res)=>{
    res.status(200);
    res.json({message:'User post Method'})
})
server.put('/user',(req,res)=>{
    res.status(200);
    res.json({message:'User put Method'})
})
server.patch('/user',(req,res)=>{
    res.status(200);
    res.json({message:'User Patch Method'})
})
server.delete('/user',(req,res)=>{
    res.status(200);
    res.json({message:'User delete Method'})
})



server.get('/login',(req,res)=> {
    res.setHeader('content-type','text/html');
    res.write("<h1>Login-page in ExpressJS<h1/>");
    res.end();
});


server.listen(4040,()=>{
    console.log(`server start http://localhost:4040`);
})