const express = require("express");
const router = express.Router();

class CartRouter {
  constructor(controller) {
    this.controller = controller;
  }

  routes() {
    router.get("/:userId", this.controller.getAll.bind(this.controller));
    router.post("/", this.controller.insertOne.bind(this.controller));
    return router;
  }
}
module.exports = CartRouter;
