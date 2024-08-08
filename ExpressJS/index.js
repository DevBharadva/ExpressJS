
/* Day-04 */

const express = require('express');

const server = express();



//built-in middleware

// server.use(express.json());
// server.use(express.urlencoded({extended: true}));
// const middleWare = (req,res,next)=>{
//     console.log(req.body);
//     if(req.body.age >= 10){
//         console.log('Success');
//         next();
//     }else{
//         res.status(401);
//         return res.json({message:'no way'});
//     }
// };

// server.use(express.urlencoded({extended: false}));
// const middleWare = (req,res,next)=>{
//     console.log(req.body);
//     if(req.body.age > 10){
//         console.log('Success');
//         next();
//     }else{
//         res.status(401);
//         return res.json({message:'no way'});
//     }
// };

server.use("/dev",express.static("public"))
const middleWare = (req,res,next)=>{
    console.log(req.body);
    if(req.body.age > 10){
        console.log('Success');
        next();
    }else{
        res.status(401);
        return res.json({message:'no way'});
    }
};

server.get('/', middleWare,(req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Hello, world hh   ');
    res.end();
});



//third-party middleware

// let loggerFun = (req,res,next) =>{
//     console.log(req.url , "\t" , req.method , "\t");
//     next();
//  };
//  server.use(loggerFun);

// const morgan = require('morgan');

// server.use(morgan('tiny'));

// server.use(morgan('combined'));

// server.use(morgan());


//  server.get('/',(req, res) => {
//     res.setHeader('Content-Type', 'application/json');
//     res.json({message:'Hello, world'});
// });


server.listen(4000,()=>{
    console.log(`Server is running on port http://localhost:4000`);  
});
