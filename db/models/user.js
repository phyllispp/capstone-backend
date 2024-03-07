"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.sellerLike, { foreignKey: "user_id" });
      this.hasMany(models.sellerReview, { foreignKey: "user_id" });
      this.hasMany(models.order, { foreignKey: "user_id" });
      this.hasMany(models.feedLike, { foreignKey: "user_id" });
      this.hasMany(models.feedReview, { foreignKey: "user_id" });
      this.hasMany(models.currentCart, { foreignKey: "buyer_id" });
      this.hasMany(models.notification, { foreignKey: "user_id" });
      this.hasMany(models.chat, { foreignKey: "user_id" });
      this.hasMany(models.message, { foreignKey: "sender_user_id" });
      this.belongsToMany(models.basket, {
        through: models.notification,
      });
      this.belongsToMany(models.feed, {
        through: models.feedLike,
      });
      this.belongsToMany(models.feed, {
        through: models.feedReview,
      });
      this.belongsToMany(models.seller, {
        through: models.sellerLike,
      });
      this.belongsToMany(models.seller, {
        through: models.sellerReview,
      });
      this.belongsToMany(models.seller, {
        through: models.chat,
      });
      this.belongsToMany(models.seller, {
        through: models.message,
      });
    }
  }
  user.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      location: DataTypes.GEOMETRY,
    },
    {
      sequelize,
      modelName: "user",

      underscored: true,
    }
  );
  return user;
};
