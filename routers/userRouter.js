const express = require("express");
const router = express.Router();

class UserRouter {
  constructor(controller) {
    this.controller = controller;
  }

  routes() {
    router.get("/:userEmail", this.controller.getOne.bind(this.controller));
    return router;
  }
}
module.exports = UserRouter;
