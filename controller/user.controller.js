const User = require("../model/user.model");

exports.addNewUsers = async (req,res) =>{
    try {
        const user = await User.create({...req.body});
        user.save();
        res.status(201).json({user,mesage:"User Added successFully"});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error"});
    }
};