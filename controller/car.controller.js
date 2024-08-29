const Cart = require('../model/cart.model');

exports.addToCart = async (req, res) => {
    try {
        console.log('User:', req.user); // Debugging line
        if (!req.user || !req.user._id) {
            return res.status(400).json({ message: "User not authenticated" });
        }

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


exports.deleteCart = async  (req,res)=>{
    try {
        let id = await req.params.id;
        let cart = await Cart.findOne({_id:id,user:req.user._id,isDelete:false});
        console.log(id);
        if(!cart){
            return res.json({message:"user are not found in Any Cart..."});
        }
        cart = await cartService.deleteCartById(
            {_id:id},
            {...req.body}
        )
        cart.save();
        res.json({message:"cart is delete",cart});

    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error...."});
    }
}