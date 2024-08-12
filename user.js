/* Day-06 */

const express = require('express');
const app = express();
const morgan = require('morgan');
const userRoutes = require('./routes/user.routes')

app.use(express.json());

app.use(morgan('dev'))

app.get('/',(req,res)=>{
    res.end('Welcome to Your own server');
})

app.use('/api/user',userRoutes)

app.listen(3333,()=>{
    console.log(`server star`);   
})