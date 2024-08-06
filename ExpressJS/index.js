// npm init / /

const express = require('express')

const server = express();

server.get('/',(req,res)=> {
    res.setHeader('content-type','text/html');
    res.write("<h1>Wlcome to ExpressJS<h1/>");
    res.end();
});

server.get('/login',(req,res)=> {
    res.setHeader('content-type','text/html');
    res.write("<h1>Login-page in ExpressJS<h1/>");
    res.end();
});

server.get('/about',(req,res)=> {
    res.setHeader('content-type','text/html');
    res.write("<h1>About to ExpressJS<h1/>");
    res.end();
});

server.get('/singup',(req,res)=> {
    res.setHeader('content-type','text/html');
    res.write("<h1>signup to ExpressJS<h1/>");
    res.end();
});

server.listen(4040,()=>{
    console.log(`server start http://localhost:4040`);
})

