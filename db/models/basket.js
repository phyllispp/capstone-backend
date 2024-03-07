"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class basket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.seller, { foreignKey: "seller_id" });
      this.hasMany(models.orderedItem, { foreignKey: "basket_id" });
      this.hasMany(models.currentCart, { foreignKey: "basket_id" });
      this.hasMany(models.notification, { foreignKey: "basket_id" });
      this.belongsToMany(models.order, {
        through: models.orderedItem,
      });
      this.belongsToMany(models.user, {
        through: models.notification,
      });
    }
  }
  basket.init(
    {
      sellerId: {
        type: DataTypes.INTEGER,
        references: {
          model: "seller",
          key: "id",
        },
      },
      title: DataTypes.STRING,
      originalPrice: DataTypes.INTEGER,
      discountedPrice: DataTypes.INTEGER,
      pickupStartTime: DataTypes.DATE,
      pickupEndTime: DataTypes.DATE,
      stock: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      allergens: DataTypes.TEXT,
      photo: DataTypes.TEXT,
      weightPerUnit: DataTypes.INTEGER,
      status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "basket",
      underscored: true,
    }
  );
  return basket;
};
