const User = require("../model/user.model");
const bcrypt = require('bcryptjs');

exports.addNewUsers = async (req, res) => {
    try {
        const { firstname, lastname, email, password, address, age, } = req.bpdy;
        let user = await User.findOne({ email: email, isDelete: false });
        if (user)
            return res.status(400).json({ message: "User alreday exist..." })
        user = await User.create({
            firstname, lastname, email, password, address, age,
        });
        user.save();
        res.status(201).json({ user, mesage: "User Added successFully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// Get All User
exports.getAllUser = async (req, res) => {
    try {
        let users = await User.find({ isDelete: false });
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" })
    }
}

// Get User

exports.getUser = async (req, res) => {
    try {
        let user = await User.findById(req.query.useId);
        if (!user)
            return res.status(404).json({ message: "User not found" })
        res.status(200).json(user);
    } catch (error) {
        console.loge(error);
        res.status(500).json({ message: "Internal Server Error" })
    }
}

exports.UpdateUser = async (req, res) => {
    try {

        let user = await User.findById(req.query.userId);
        if (!user) {
            return res.status(404).json({ message: "User Not Found" });
        }
        user = await User.updateOne({ _id: req.query.userId }, { $set: req.body }, { new: true });
        // user.save();
        res.status(202).json({ user, message: "User Update SuccessFully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

//Hard delete user
// exports.deleteUser = async (req,res)=>{
//     try{
//         let user = await User.findById(req.query.userId);
//         if(!user){
//             return res.status(404).json({mesage:"User Not Found..."});
//         }
//         user = await User.deleteOne({_id:user.id});

//         res.status(200).json({user,message:"User Delete Success"});
//     }
//     catch(error){
//         console.log(error);
//         res.status(500).json({mewssage:"Internal Server Error"})
//     }
// }

// Soft Delete
exports.deleteUser = async (req, res) => {
    try {
        let user = await User.findOne({ _id: req.query.userId }, { isDelete: false });
        console.log(user);

        if (!user) {
            return res.status(404).json({ mesage: "User Not Found..." });
        }
        user = await User.findByIdAndUpdate(
            user._id,
            { $set: { isDelete: true } },
            { new: true }
        );
        res.status(200).json({ user, message: "User Delete Success" });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ mewssage: "Internal Server Error" })
    }
};

exports.register = async (req,res)=>{
    try {
            let user = await User.findOne({email:req.body.email,isDelete:false});
            if(user){
                return res.status(400).json({message:"User Not Found"});
            }
            let hashpassword = await bcrypt.hash(req.body.password,10);
            user = await User.create({...req.body, password: hashpassword});
            user.save();
            res.status(201).json({user,message:'User Registartion SuccessFul...'});
    } catch (err) {
        console.log(err);
        res.status(500).json({message:"Internal Server Error"});
    }
};


exports.Login = async (req,res)=>{
    try {
            let user = await User.findOne({email:req.body.email,isDelete:false});
            if(!user){
                return res.status(400).json({message:"User Not Found"});
            }
            let matchpasword = await bcrypt.compare(req.body.password, user.password);
            if(!matchpasword){
                return res.status(400).json({message:"Email Or Password not Matched..."});
            }
            res.status(200).json({message:"Login Success",user});
    } catch (err) {
        console.log(err);
        res.status(500).json({message:"Internal Server Error"});
    }
};