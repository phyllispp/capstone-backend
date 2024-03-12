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
        where: { buyerId: userId },
        include: [{ model: this.basketModel }],
      });
      return res.json(cartItems);
    } catch (error) {
      return res.status(400).json({ error: true, message: error.message });
    }
  }

  async insertOne(req, res) {
    try {
      const { buyerId, basketId, stock } = req.body;
      console.log(buyerId, basketId, stock);
      const currentCart = await this.model.findAll({
        where: { buyerId: buyerId },
        include: [{ model: this.basketModel, attributes: ["seller_id"] }],
      });
      console.log(currentCart);
      console.log("running after initial get");
      if (currentCart.length === 0) {
        const newItem = await this.model.create({
          buyerId: buyerId,
          basketId: basketId,
          stock: stock,
        });
        console.log(newItem);
        return res.json(newItem);
      } else {
        const newBasket = await this.basketModel.findOne({
          where: { id: basketId },
          attributes: ["sellerId"],
        });
        console.log("new basket", newBasket);
        console.log("currentCart", currentCart);
        console.log(currentCart[0].basket);
        if (newBasket.sellerId === currentCart[0].basket.sellerId) {
          const newItem = await this.model.create({
            buyerId,
            basketId,
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
      console.log(error);
      return res.status(400).json({ error: true, msg: error.message });
    }
  }
}
module.exports = CartController;
