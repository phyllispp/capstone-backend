"use strict";
const BaseController = require("./baseController");

class CartController extends BaseController {
  constructor(model, basketModel) {
    super(model);
    this.basketModel = basketModel;
  }

  async getAll(req, res) {
    try {
      const userId = req.params.userId;
      const cartItems = await this.model.findAll({
        where: { buyer_id: userId },
        include: [{ model: this.basketModel }],
      });
      return res.json(cartItems);
    } catch (error) {
      return res.status(400).json({ error: true, message: error.message });
    }
  }

  async insertOne(req, res) {
    try {
      const { buyer_id, basket_id, stock } = req.body;
      console.log(buyer_id, basket_id, stock);
      const currentCart = await this.model.findAll({
        where: { buyer_id: buyer_id },
        include: [{ model: this.basketModel, attributes: ["seller_id"] }],
      });
      console.log(currentCart);
      console.log("running after initial get");
      if (currentCart.length === 0) {
        const newItem = await this.model.create({
          buyer_id: buyer_id,
          basket_id: basket_id,
          stock: stock,
        });
        console.log(newItem);
        return res.json(newItem);
      } else {
        const newBasket = await this.basketModel.findOne({
          where: { id: basket_id },
          attributes: ["seller_id"],
        });
        if (newBasket.seller_id === currentCart[0].basket.seller_id) {
          const newItem = await this.model.create({
            buyer_id,
            basket_id,
            stock,
          });
          return res.json(newItem);
        } else {
          return res.status(400).json({
            error: true,
            msg: "Cannot add item from the same seller to the cart. Please create a new order.",
          });
        }
      }
    } catch (error) {
      return res.status(400).json({ error: true, msg: error.message });
    }
  }
}
module.exports = CartController;
