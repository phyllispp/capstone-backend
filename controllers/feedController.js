"use strict";
const BaseController = require("./baseController");

class FeedController extends BaseController {
  constructor(model, feedLikeModel, feedReviewModel) {
    super(model);
    this.feedLikeModel = feedLikeModel;
    this.feedReviewModel = feedReviewModel;
  }
}
module.exports = FeedController;
