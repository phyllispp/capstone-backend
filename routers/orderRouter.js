const express = require("express");
const router = express.Router();

class OrderRouter {
  constructor(controller) {
    this.controller = controller;
  }

  routes() {
    router.get("/:userId", this.controller.getOrders.bind(this.controller));
    router.get(
      "/latest/:userId",
      this.controller.getLatestOrder.bind(this.controller)
    );
    return router;
  }
}
module.exports = OrderRouter;
