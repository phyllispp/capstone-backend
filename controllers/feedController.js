"use strict";
const BaseController = require("./baseController");

class FeedController extends BaseController {
  constructor(model, feedLikeModel, feedReviewModel, sellerModel) {
    super(model);
    this.feedLikeModel = feedLikeModel;
    this.feedReviewModel = feedReviewModel;
    this.sellerModel = sellerModel;
  }

  async getAll(req, res) {
    try {
      const data = await this.model.findAll({
        include: [this.sellerModel], // Specify the models to eagerly load
      });
      return res.json(data);
    } catch (error) {
      return res.status(400).json({ error: true, msg: error.message });
    }
  }

  async likeOne(req, res) {
    const { userId, feedId } = req.body;
    try {
      const existingLike = await this.feedLikeModel.findOne({
        where: { userId: userId },
      });
      if (existingLike) {
        return res.status(400).send("Feed already liked by the user.");
      } else {
        await this.feedLikeModel.create({ userId: userId, feedId: feedId });
      }
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: true, msg: error.message });
    }
  }
}

module.exports = FeedController;
