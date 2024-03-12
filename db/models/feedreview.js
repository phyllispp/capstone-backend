"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class feedReview extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.user);
      this.belongsTo(models.feed);
    }
  }
  feedReview.init(
    {
      feedId: {
        type: DataTypes.INTEGER,
        references: {
          model: "feed",
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
      content: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "feedReview",
      underscored: true,
    }
  );
  return feedReview;
};
