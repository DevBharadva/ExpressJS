const Product = require('../model/product.model');

class Productservices {
    async addNewProduct (body){
        return await Product.create(body);
    };

    async getProduct(body){
        return await Product.findOne(body);
    };

    async getAllProduct(body){
        return await Product.find(body);
    }
};

module.exports = Productservices;


//add, get ,getAll,update
