"use strict";
const BaseController = require("./baseController");

class FeedController extends BaseController {
  constructor(feedmodel, feedLikeModel, feedReviewModel) {
    super(feedmodel);
    this.feedLikeModel = feedLikeModel;
    this.feedReviewModel = feedReviewModel;
  }
}
module.exports = FeedController;
