"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          name: "bakery",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "restaurant",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "supermarket",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
