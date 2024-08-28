const User = require("../model/user.model");
const bcrypt = require('bcryptjs');
const JsonWebToken = require('jsonwebtoken')

/*----------------- TodoList With PassPort & EJS ---------------------*/

exports.register = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email, isDelete: false });
        if (user) {
            return res.status(400).json({ message: "User Alerdy Exixst.." });
        }
        let hashpassword = await bcrypt.hash(req.body.password, 10);
        user = await User.create({ ...req.body, password: hashpassword, progileImage: imagePath });
        user.save();
        res.status(201).json({ user, message: 'User Registartion SuccessFul...' });

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

exports.Login = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email, isDelete: false });
        if (!user) {
            return res.render('login')
        }
        // let matchpasword = await bcrypt.compare(req.body.password, user.password);
        // if (!matchpasword) {
            // return res.status(400).json({ message: "Email Or Password not Matched..." });
        // }
        // let token = await JsonWebToken.sign({ userId: user._id }, process.env.JWT_SECRET);
        res.status(200).json({ message: "Login Success" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

exports.userProfile = async (req, res) => {
    try {
        res.status(200).json(req.user);
    } catch (err) {
        console.log(err);
        res.status(json({ message: "Internal Server Error" }));
    }
}

exports.updateProfile = async (req, res) => {
    try {
        let user = req.user;
        console.log(user);

        user = await User.findByIdAndUpdate(
            user._id,
            { $set: req.body },
            { new: true }
        );
        res.status(202).json({ user, message: "user Update Success" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server Error" })
    }
}

exports.deleteProfile = async (req, res) => {
    try {
        let user = req.user;
        // console.log(user);
        user = await User.findByIdAndDelete(
            user._id,
            { $set: { isDelete: true } },
            { new: true }
        );
        res.status(202).json({ user, message: "user Delete Success" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server Error" })
    }
}

exports.changePassword = async (req, res) => {
    try {
        const { email, oldPassword, newPassword, conformPassword } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const isMatch = await bcrypt.compare(oldPassword, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Incorrect old password' });
        }
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        await user.save();
        res.json({ message: 'Password changed successfully' });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server Error" })
    }
}

// exports.forgetPassword = async (req,res)=>{
//     try {

//     } catch (err) {
//         console.log(err);
//         res.status(500).json({message:"Internal Server Error"})
//     }
// }

exports.specialUser = async (req, res) => {
    try {
        let user = {
            firstName: "Dev",
            lastName: "Bharadva",
            email: "Dev@dev.in",
            mobileNo: "4959697878",
            Address: {
                line1: "City Center",
                line2: "Amroli Surat"
            }
        }
        // let user = await User.findOne({firstName:req.query.name,isDelete:false})
        if (!user) {

            return res.render('user.ejs', { user });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internla Server Erorr" });
    }
}

exports.user = async(req,res)=>{
    try {

        let user = await User.findOne({firstName:req.query.name,isDelete:false})

        if(!user){
            return res.render('user.ejs', { user });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"internal Server error"})
    }
}