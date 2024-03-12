"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class feed extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.seller);
      this.hasMany(models.feedLike);
      this.hasMany(models.feedReview);
      this.belongsToMany(models.user, {
        through: models.feedLike,
      });
    }
  }
  feed.init(
    {
      sellerId: {
        type: DataTypes.INTEGER,
        references: {
          model: "seller",
          key: "id",
        },
      },
      photo: DataTypes.TEXT,
      content: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "feed",
      underscored: true,
    }
  );
  return feed;
};
