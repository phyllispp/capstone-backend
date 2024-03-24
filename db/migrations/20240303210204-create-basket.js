"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("baskets", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      seller_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "seller",
          key: "id",
        },
      },
      title: {
        type: Sequelize.STRING,
      },
      original_price: {
        type: Sequelize.INTEGER,
      },
      discounted_price: {
        type: Sequelize.INTEGER,
      },
      pickup_start_time: {
        type: Sequelize.DATE,
      },
      pickup_end_time: {
        type: Sequelize.DATE,
      },
      stock: {
        type: Sequelize.INTEGER,
      },
      description: {
        type: Sequelize.TEXT,
      },
      allergens: {
        type: Sequelize.TEXT,
      },
      photo: {
        type: Sequelize.TEXT,
      },
      weight_per_unit: {
        type: Sequelize.INTEGER,
      },
      status: {
        type: Sequelize.BOOLEAN,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("baskets");
  },
};
