const Cart = require('../model/cart.model');

class CartServices {

    /* --------------Add to Cart Service---------- */

    async addtocart(body) {
        return await Cart.create(body)
    }

    async getallcart(body) {
        return await Cart.find(body)
    }


    async updatecart(body) {
        return await Cart.findByIdAndUpdate(body)
    }

    async deletecart(body) {
        return await Cart.findByIdAndDelete(body)
    }

}

module.exports = CartServices;