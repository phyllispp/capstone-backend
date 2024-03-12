"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class orderedItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.basket);
      this.belongsTo(models.order);
    }
  }
  orderedItem.init(
    {
      orderId: {
        type: DataTypes.INTEGER,
        references: {
          model: "order",
          key: "id",
        },
      },
      basketId: {
        type: DataTypes.INTEGER,
        references: {
          model: "basket",
          key: "id",
        },
      },
      stock: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "orderedItem",
      underscored: true,
    }
  );
  return orderedItem;
};
