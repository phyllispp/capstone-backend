"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class sellerReview extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.user);
      this.belongsTo(models.seller);
    }
  }
  sellerReview.init(
    {
      sellerId: {
        type: DataTypes.INTEGER,
        references: {
          model: "seller",
          key: "id",
        },
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "user",
          key: "id",
        },
      },
      review: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "sellerReview",
      underscored: true,
    }
  );
  return sellerReview;
};
