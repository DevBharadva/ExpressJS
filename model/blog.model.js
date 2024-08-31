const mongoose = require('mongoose');

const blogSchema  = mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
},{
    versionKey: false
});


module.exports = mongoose.model("blogs", blogSchema);