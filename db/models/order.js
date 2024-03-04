"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.user, { foreignKey: "user_id" });
      this.hasMany(models.orderedItem, { foreignKey: "order_id" });
      this.belongsToMany(models.basket, {
        through: models.orderedItem,
      });
    }
  }
  order.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "user",
          key: "id",
        },
      },
      totalPrice: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "order",
      underscored: true,
    }
  );
  return order;
};
