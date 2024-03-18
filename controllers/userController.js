"use strict";
const BaseController = require("./baseController");

class UserController extends BaseController {
  constructor(model) {
    super(model);
  }

  async getOne(req, res) {
    const { userEmail } = req.params;
    console.log(userEmail);
    try {
      const [user] = await this.model.findOrCreate({
        where: { email: userEmail },
      });
      console.log(user);
      return res.json(user);
    } catch (error) {
      return res.status(400).json({ error: true, msg: error.message });
    }
  }
}
module.exports = UserController;
