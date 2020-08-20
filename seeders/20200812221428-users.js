"use strict"
const bcrypt = require("bcrypt")
const { SALT_ROUNDS } = require("../config/constants")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Proffesor",
          email: "a@a.com",
          userImg: "https://www.dailypnut.com/wp-content/uploads/2015/12/putin.jpg",
          password: bcrypt.hashSync("a", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Fatality",
          email: "b@b.com",
          userImg: "https://www.dailypnut.com/wp-content/uploads/2015/12/putin.jpg",
          password: bcrypt.hashSync("b", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "InsomniaBG",
          email: "c@c.com",
          imgUrl: "https://www.dailypnut.com/wp-content/uploads/2015/12/putin.jpg",
          password: bcrypt.hashSync("c", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "BluNL",
          email: "d@d.com",
          userImg: "https://www.dailypnut.com/wp-content/uploads/2015/12/putin.jpg",
          password: bcrypt.hashSync("d", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Aztech",
          email: "e@e.com",
          userImg: "https://www.dailypnut.com/wp-content/uploads/2015/12/putin.jpg",
          password: bcrypt.hashSync("e", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {})
  },
}