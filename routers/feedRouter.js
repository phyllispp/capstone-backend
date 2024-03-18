const express = require("express");
const router = express.Router();

class FeedRouter {
  constructor(controller, checkJwt) {
    this.controller = controller;
    this.checkJwt = checkJwt;
  }

  routes() {
    router.get("/", this.controller.getAll.bind(this.controller));
    router.get("/:userId", this.controller.getLikes.bind(this.controller));
    router.post(
      "/like",
      this.checkJwt,
      this.controller.likeOne.bind(this.controller)
    );
    router.post(
      "/comment",
      this.checkJwt,
      this.controller.commentOne.bind(this.controller)
    );
    router.put(
      "/comment/delete",
      this.checkJwt,
      this.controller.deleteComment.bind(this.controller)
    );
    return router;
  }
}
module.exports = FeedRouter;
