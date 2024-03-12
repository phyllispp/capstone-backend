"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class seller extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.basket);
      this.hasMany(models.feed);
      this.hasMany(models.sellerLike);
      this.hasMany(models.sellerReview);
      this.hasMany(models.message);
      this.hasMany(models.chat);
      this.belongsTo(models.category);
      this.belongsToMany(models.user, {
        through: models.sellerLike,
      });
      this.belongsToMany(models.user, {
        through: models.chat,
      });
    }
  }
  seller.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      address: DataTypes.TEXT,
      location: DataTypes.GEOMETRY,
      photo: DataTypes.TEXT,
      categoryId: {
        type: DataTypes.INTEGER,
        references: {
          model: "category",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "seller",
      underscored: true,
    }
  );
  return seller;
};
