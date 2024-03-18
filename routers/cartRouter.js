const express = require("express");
const router = express.Router();

class CartRouter {
  constructor(controller, checkJwt) {
    this.controller = controller;
    this.checkJwt = checkJwt;
  }

  routes() {
    router.get(
      "/:userId",
      this.checkJwt,
      this.controller.getAll.bind(this.controller)
    );
    router.post(
      "/",
      this.checkJwt,
      this.controller.insertOne.bind(this.controller)
    );
    router.put(
      "/delete/:basketId",
      this.checkJwt,
      this.controller.deleteOne.bind(this.controller)
    );
    return router;
  }
}
module.exports = CartRouter;
