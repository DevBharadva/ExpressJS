const products = require('../mock_data.json');

exports.addNewProduct = (req,res)=>{
    products.push(req.body);
    res.json({product: req.body, message:'products Added success'});
};

exports.getAllProducts = (req,res)=>{
    res.json(products)
};

exports.getProduct = (req,res)=>{
    let id = +req.params.id;
    let ProductIndex = products.find((products) => products.id === id);


    res.json(ProductIndex)
};


exports.replaceProduct = (req,res)=>{
    let id = +req.params.id;
    let ProductIndex = products.findIndex((products) => products.id === id);

    products.splice(ProductIndex,1,{...req.body});
    res.json({message:'replace products Succesfully'})
};

exports.upateProduct = (req,res)=>{
    let id = +req.params.id;
    let ProductIndex = products.findIndex((products) => products.id === id);
    const products = products[ProductIndex];

    products.splice(ProductIndex,1,{...products,...req.body});
    res.json({message:'Update products Succesfully'})
};

exports.deletePreoduct = (req,res)=>{
    let id = +req.params.id;
    let ProductIndex = products.findIndex((products) => products.id === id);
    const products = products[ProductIndex];

    products.splice(ProductIndex,1);
    res.json({message:'Delete products Succesfully'})
};



