"use strict";
const db = require("../db/models/index");

const BaseController = require("./baseController");

class CategoryController extends BaseController {
  constructor(
    model,
    sellerModel,
    sellerLikeModel,
    sellerReviewModel,
    basketModel
  ) {
    super(model);
    this.sellerModel = sellerModel;
    this.sellerLikeModel = sellerLikeModel;
    this.sellerReviewModel = sellerReviewModel;
    this.basketModel = basketModel;
  }

  async getSellersByCategory(req, res) {
    try {
      const { Sequelize } = db;
      const categoryId = req.params.categoryId;
      const userLatitude = 22.317330117054336;
      const userLongitude = 114.18860305272894;

      const sellers = await this.sellerModel.findAll({
        attributes: {
          include: [
            [
              Sequelize.literal(
                `ST_DistanceSphere(
                location,
                ST_SetSRID(ST_MakePoint(${userLongitude}, ${userLatitude}), 4326)::geometry
              )`
              ),
              "distance",
            ],
          ],
        },
        where: { categoryId: categoryId },
        include: [
          {
            model: this.basketModel,
            as: "baskets",
            required: true,
          },
        ],
      });
      return res.json(sellers);
    } catch (error) {
      return res.status(400).json({ error: true, message: error.message });
    }
  }

  async getBasket(req, res) {
    try {
      const basketId = req.params.basketId;
      const basket = await this.basketModel.findAll({
        where: { id: basketId },
      });

      return res.json(basket);
    } catch (error) {
      return res.status(400).json({ error: true, message: error.message });
    }
  }

  async getSeller(req, res) {
    try {
      const sellerId = req.params.sellerId;
      const seller = await this.sellerModel.findAll({
        where: { id: sellerId },
      });

      return res.json(seller);
    } catch (error) {
      return res.status(400).json({ error: true, message: error.message });
    }
  }
}

module.exports = CategoryController;
