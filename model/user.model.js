const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userName:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },
    password2:{
        type:String,
    },
    // age:{
    //     type:Number,
    // },
    // progileImage:{
    //     type:String,
    // },
    // Address:{
    //     line1:String,
    //     line2:String
    // },
    isDelete:{
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model('users',userSchema)