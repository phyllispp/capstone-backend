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
      this.hasMany(models.sellerLike);
      this.hasMany(models.sellerReview);
      this.hasMany(models.order);
      this.hasMany(models.feedLike);
      this.hasMany(models.feedReview);
      this.hasMany(models.currentCart, { foreignKey: "buyer_id" });
      this.hasMany(models.notification);
      this.hasMany(models.chat);
      this.hasMany(models.message);
      this.belongsToMany(models.feed, {
        through: models.feedLike,
      });
      this.belongsToMany(models.seller, {
        through: models.sellerLike,
      });

      this.belongsToMany(models.seller, {
        through: models.chat,
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
