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

/* Day-03 in ExpressJS */

const express = require('express')
const data = require('./mock_data.json');
console.log(data);

const server = express();

let middleware = (req,res,next)=>{
    // console.log(req.query);
    if(req.query.password === '7984'){
        console.log('success');
        next();
    }else{
        return res.json({message:'Enter a currect Password'})
    }
}

// server.use(middleware)

server.get('/',middleware,(req,res)=> {
    res.setHeader('content-type','text/html');
    res.write("<h1>Wlcome to ExpressJS<h1/>");
    res.end();
});

server.get('/mock',(req,res)=>{
    res.json(JSON.parse(data))
})

server.listen(4040,()=>{
    console.log(`server start http://localhost:4040`);
})