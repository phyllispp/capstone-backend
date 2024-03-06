"use strict";
const BaseController = require("./baseController");

class CategoryController extends BaseController {
  constructor(
    categoryModel,
    sellerModel,
    sellerLikeModel,
    sellerReviewModel,
    basketModel
  ) {
    super(categoryModel);
    this.sellerModel = sellerModel;
    this.sellerLikeModel = sellerLikeModel;
    this.sellerReviewModel = sellerReviewModel;
    this.basketModel = basketModel;
  }

  async getSellersByCategory(req, res) {
    try {
      const categoryId = req.params.categoryId;
      const sellerswithBaskets = await this.sellerModel.findAll({
        where: { category_id: categoryId },
        include: [{ model: this.basketModel }],
      });
      if (!sellerswithBaskets.length) {
        return res.status(404).json({
          error: true,
          message: "No sellers found for the given category",
        });
      }
      return res.json(sellerswithBaskets);
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
}

module.exports = CategoryController;
