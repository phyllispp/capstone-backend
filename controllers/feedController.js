("use strict");

const user = require("../db/models/user");
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
      const feedData = await this.model.findAll({
        include: [
          { model: this.sellerModel },
          { model: this.feedLikeModel },
          { model: this.feedReviewModel },
        ],
      });
      return res.json(feedData);
    } catch (error) {
      return res.status(400).json({ error: true, msg: error.message });
    }
  }
  async getLikes(req, res) {
    const userId = req.params.userId;
    try {
      const data = await this.feedLikeModel.findAll({
        where: { userId: userId },
      });
      return res.json(data);
    } catch (error) {
      return res.status(400).json({ error: true, msg: error.message });
    }
  }

  async likeOne(req, res) {
    const { userId, feedId } = req.body;
    console.log(userId, feedId);
    try {
      const existingLike = await this.feedLikeModel.findOne({
        where: { userId: userId },
      });
      if (existingLike) {
        await existingLike.destroy();
        return res.json({ action: "unliked", likeId: existingLike.id });
      } else {
        const like = await this.feedLikeModel.create({
          userId: userId,
          feedId: feedId,
        });
        return res.json({ action: "liked", like });
      }
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: true, msg: error.message });
    }
  }

  async commentOne(req, res) {
    try {
      // const { userId, feedId, content } = req.body;
      // console.log(content);
      const { formData } = req.body;
      console.log(formData.content);

      const comment = await this.feedReviewModel.create({
        userId: formData.userId,
        feedId: formData.feedId,
        content: formData.content,
      });
      return res.json(comment);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: true, msg: error.message });
    }
  }

  async deleteComment(req, res) {
    try {
      const { feedId, commentId } = req.body;
      console.log(commentId);
      await this.feedReviewModel.destroy({
        where: { id: commentId, feedId: feedId },
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: true, msg: error.message });
    }
  }
}

module.exports = FeedController;
