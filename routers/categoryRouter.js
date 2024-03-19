const express = require("express");
const router = express.Router();

class CategoryRouter {
  constructor(controller) {
    this.controller = controller;
  }

  routes() {
    router.get(
      "/:categoryId/sellers",
      this.controller.getSellersByCategory.bind(this.controller)
    );
    router.get("/:basketId", this.controller.getBasket.bind(this.controller));
    router.get(
      "/seller/:sellerId",
      this.controller.getSeller.bind(this.controller)
    );
    router.post(
      "/comment/:sellerId/:userId",
      this.controller.commentOne.bind(this.controller)
    );
    router.get(
      "/reviews/:sellerId",
      this.controller.getReviews.bind(this.controller)
    );
    router.delete(
      "/delete/:reviewId",
      this.controller.deleteReview.bind(this.controller)
    );
    return router;
  }
}
module.exports = CategoryRouter;
