const express = require("express");
const router = express.Router();

class FeedRouter {
  constructor(controller) {
    this.controller = controller;
  }

  routes() {
    router.get("/", this.controller.getAll.bind(this.controller));
    router.get("/:userId", this.controller.getLikes.bind(this.controller));
    router.post("/like", this.controller.likeOne.bind(this.controller));
    router.post("/comment", this.controller.commentOne.bind(this.controller));
    router.put(
      "/comment/delete",
      this.controller.deleteComment.bind(this.controller)
    );
    return router;
  }
}
module.exports = FeedRouter;
