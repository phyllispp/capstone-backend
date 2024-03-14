"use strict";
const BaseController = require("./baseController");

class FeedController extends BaseController {
  constructor(model, feedLikeModel, feedReviewModel) {
    super(model);
    this.feedLikeModel = feedLikeModel;
    this.feedReviewModel = feedReviewModel;
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
