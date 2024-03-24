const express = require("express");
const router = express.Router();

class OrderRouter {
  constructor(controller, checkJwt) {
    this.controller = controller;
    this.checkJwt = checkJwt;
  }

  routes() {
    router.get(
      "/:userId",
      this.checkJwt,
      this.controller.getOrders.bind(this.controller)
    );
    router.get(
      "/latest/:userId",
      this.controller.getLatestOrder.bind(this.controller)
    );
    return router;
  }
}
module.exports = OrderRouter;
