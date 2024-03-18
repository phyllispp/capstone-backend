"use strict";
const BaseController = require("./baseController");

class OrderController extends BaseController {
  constructor(model, orderedItemModel, basketModel, sellerModel) {
    super(model);
    this.orderedItemModel = orderedItemModel;
    this.basketModel = basketModel;
    this.sellerModel = sellerModel;
  }
  async getOrders(req, res) {
    try {
      const userId = req.params.userId;
      console.log(userId);
      const orders = await this.model.findAll({
        where: { userId: userId },
        include: [
          {
            model: this.orderedItemModel,
            attributes: ["basketId", "stock"],
            include: [
              {
                model: this.basketModel,
                attributes: [
                  "sellerId",
                  "title",
                  "photo",
                  "pickupStartTime",
                  "pickupEndTime",
                ],
                include: [
                  {
                    model: this.sellerModel,
                    attributes: ["address"],
                  },
                ],
              },
            ],
          },
        ],
      });

      return res.json(orders);
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error: true, message: error.message });
    }
  }

  async getLatestOrder(req, res) {
    try {
      const userId = req.params.userId;
      console.log("userId", userId);
      const order = await this.model.findOne({
        where: { userId: userId },
        order: [["createdAt", "DESC"]],
        include: [
          {
            model: this.orderedItemModel,
            attributes: ["basketId", "stock"],
            include: [
              {
                model: this.basketModel,
                attributes: ["weightPerUnit"],
              },
            ],
          },
        ],
      });

      return res.json(order);
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error: true, message: error.message });
    }
  }
}
module.exports = OrderController;
