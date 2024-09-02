const Cart = require('../model/cart.model');

exports.addToCart = async (req, res) => {
    try {
        let userId = req.user._id;
        let cart = await Cart.findOne({
            user: userId,
            productId: req.body.productId,
            isDelete: false
        });
        if (cart) {
            return res.json({ message: "Already exists..." });
        }
        cart = await Cart.create({ user: userId, ...req.body });
        res.status(201).json({ message: "Cart Added", cart });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" });
    }
};

exports.getAllCarts = async (req,res)=>{
    try {
        let carts = await Cart.find({user:req.user._id,isDelete:false});
        res.json(carts);
        res.status(200).send(carts);
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"Internal Server Error"})
    }
}

exports.updateCart = async (req,res)=>{
    try {
        let cart = await Cart.updateOne({_id:req.query.cartId},{$set:{quantity:+req.query.quantity}},{new:true});
        console.log(cart);
        if(!cart) {
            return res.status(404).json({msg:"Cart Not Found..."});
        }      
        res.status(200).json({message:"Cart Update SuccessFully",cart});
    } catch (err) {
        console.log(err);
        res.status(500).json({msg:"Internal Server Error"})
    }
}

exports.deleteCart = async  (req,res)=>{
    try {
        let cart = await Cart.updateOne({_id:req.user.cartId},{$set: {isDelete:true}},{ new:true });
        console.log(cart);
        if(!cart){
            return res.status(404).json({msg:"cart Not Found..."});
        }
        res.status(200).json({msg:"cart Delete SuccessFully...",cart});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error...."});
    }
}