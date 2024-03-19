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
      const userLatitude = parseFloat(req.query.latitude); // Get latitude from query parameters
      const userLongitude = parseFloat(req.query.longitude);
      console.log("userLatitude", userLatitude);

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
            where: { status: true },
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

  async commentOne(req, res) {
    try {
      const { reviewText } = req.body;
      const { sellerId, userId } = req.params;
      console.log("review", reviewText);

      const comment = await this.sellerReviewModel.create({
        sellerId: sellerId,
        userId: userId,
        review: reviewText,
      });
      return res.json(comment);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: true, msg: error.message });
    }
  }

  async getReviews(req, res) {
    try {
      const { sellerId } = req.params;
      const reviews = await this.sellerReviewModel.findAll({
        where: { sellerId: sellerId },
      });

      return res.json(reviews);
    } catch (error) {
      return res.status(400).json({ error: true, message: error.message });
    }
  }
  async deleteReview(req, res) {
    try {
      const { reviewId } = req.params;
      const review = await this.sellerReviewModel.destroy({
        where: { id: reviewId },
      });

      return res.json(review);
    } catch (error) {
      return res.status(400).json({ error: true, message: error.message });
    }
  }
}

module.exports = CategoryController;
