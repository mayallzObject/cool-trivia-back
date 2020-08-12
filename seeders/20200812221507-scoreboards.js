"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "scoreboards",
      [
        {
          score: 924,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },
        {
          score: 830,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },
        {
          score: 828,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 3,
        },
        {
          score: 759,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 4,
        },
        {
          score: 745,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 5,
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("scoreboards", null, {});
  },
};