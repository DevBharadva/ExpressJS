// const products = require('../mock_data.json');

// exports.addNewProduct = (req,res)=>{
//     products.push(req.body);
//     res.json({product: req.body, message:'products Added success'});
// };

// exports.getAllProducts = (req,res)=>{
//     res.json(products)
// };

// exports.getProduct = (req,res)=>{
//     let id = +req.params.id;
//     let ProductIndex = products.find((products) => products.id === id);


//     res.json(ProductIndex)
// };


// exports.replaceProduct = (req,res)=>{
//     let id = +req.params.id;
//     let ProductIndex = products.findIndex((products) => products.id === id);

//     products.splice(ProductIndex,1,{...req.body});
//     res.json({message:'replace products Succesfully'})
// };

// exports.upateProduct = (req,res)=>{
//     let id = +req.params.id;
//      let ProductIndex = products.findIndex((products) => products.id === id);
//     const products = products[ProductIndex];

//     products.splice(ProductIndex,1,{...products,...req.body});
//     res.json({message:'Update products Succesfully'})
// };

// exports.deletePreoduct = (req,res)=>{
//     let id = +req.params.id;
//     let ProductIndex = products.findIndex((products) => products.id === id);
//     const products = products[ProductIndex];

//     products.splice(ProductIndex,1);
//     res.json({message:'Delete products Succesfully'})
// };


const Product = require("../model/product.model");

exports.addNewProduct = async (req, res) => {
    try {
        const product = await Product.create({ ...req.body });
        res.status(201).json({'messege':"Product Added"})      
        json({ product, message: "New Product Added SuccesFully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" })
    }
};

exports.getAllProducts = async(req,res)=>{
    try {
        const product = await Product.find();
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
