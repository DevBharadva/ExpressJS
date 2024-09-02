const Product = require("../model/product.model");
const Productservices = require('../services/product.service')
const Productservice = new Productservices();

exports.addNewProduct = async (req, res) => {
    try {
        let product = await Product.findOne({productName:req.body.productName,isDelete:false})
        
        if(product)
            return res.status(400).json({message:"Product Alreday Exist..."})
        product = await Productservice.addNewProduct({...req.body});
        product.save();
        res.status(201).json({product,messege:"Product Added"})      
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" })
    }
};

exports.getAllProducts = async(req,res)=>{
    try {
        const product = await Product.find({isDelete:false});
        res.status(200).json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error..."});
    }
};

exports.getProduct = async (req,res)=>{
    try {
        const product = await Product.findOne({_id:req.query.productId});
        res.status(200).json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error..."});
    }
};

// exports.UpdateProduct = async (req,res)=>{
//     try {
//         const productId = req.body.productId;
//         // const updateProductName = req.body.productName;
//         // const updateQuntity = req.body.Quntity;
//         const product = await Product.findByIdAndUpdate(productId, {"productName":"ihpone16"});
//        res.status(202).json({product,message:"Product Update Succeccfully..."});
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({msg:"Internal server erorr"});
//     }
// }

exports.UpdateProduct = async (req,res)=>{
    try {
        let product = await Product.findOne({_id:req.query.productId});
        if(!product){
            return res.status(404).json({message:'Product not Found...'});
        }
        product = await Product.updateOne({_id:req.query.productId},{$set:req.body},{new:true});
        // product.save();
        res.status(202).json({product,message:"Product Updatew Success"})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error"});
    }
}


// exports.DeleteProduct = async (req,res)=>{
//     try {
//         const productId = req.body.productId;
//         const product = await Product.findByIdAndDelete(productId);
//         res.status(204).json({product,message:"Product Delete SuccessFully..."})
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({msg:"Internal Server Error..."});
//     }
// }

exports.DeleteProduct = async (req,res)=>{
    try {
        let product = await Product.findOne({_id:req.query.userId},{isDelete:false});
        if(!product){
            return res.status(404).json({message:"Product Not Found..."});
        }
        product = await Product.deleteOne(
            product._id,
            {$set:{isDelete:true}},
            {new:true}
        );;
        res.status(200).json({product,message:"Product Delete Success"});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error"})
    }
}