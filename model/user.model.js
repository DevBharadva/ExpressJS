const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName:String,
    lastName:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:Number,
    },
    age:{
        type:Number,
    },
    Address:{
        line1:String,
        line2:String
    }
})

module.exports = mongoose.model('users',userSchema)