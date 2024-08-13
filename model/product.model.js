const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    productName:String,
    productPrice:{
        Number,
    },
    Validity:{
        type:String,
    },
    Quntity:{
        type:Number,
    },
});

module.exports = mongoose.model('product',userSchema)

