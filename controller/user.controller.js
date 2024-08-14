const User = require("../model/user.model");

exports.addNewUsers = async (req,res) =>{
    try {
        const {firstname,lastname,email,password,address,age} = req.bpdy;
        let user = await User.findOne({email:email});
        if(user)
            return res.status(400).json({message:"User alreday exist..."})
        user = await User.create({
            firstname,lastname,email,password,address,age,
        });
        user.save();
        res.status(201).json({user,mesage:"User Added successFully"});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error"});
    }
};

// Get All User
exports.getAllUser = async (req,res)=>{
    try {
        let users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error"})
    }
}

// Get User

exports.getUser = async (req,res)=>{
    try {
        let user = await User.findById(req.query.useId);
        if(!user)
            return res.status(404).json({message:"User not found"})
        res.status(200).json(user);
    } catch (error) {
        console.loge(error);
        res.status(500).json({message:"Internal Server Error"})
    }
}