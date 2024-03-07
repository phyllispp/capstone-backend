"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class currentCart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.user, { as: "buyer" }, { foreignKey: "buyer_id" });
      this.belongsTo(models.basket, { foreignKey: "basket_id" });
    }
  }
  currentCart.init(
    {
      buyerId: {
        type: DataTypes.INTEGER,
        references: {
          model: "user",
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
      modelName: "currentCart",
      underscored: true,
    }
  );
  return currentCart;
};
