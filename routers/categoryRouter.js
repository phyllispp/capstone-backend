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
    return router;
  }
}
module.exports = CategoryRouter;
