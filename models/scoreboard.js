'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class scoreboard extends Model {

    static associate(models) {
      scoreboard.belongsTo(models.user)
    }
  };
  scoreboard.init({
    score: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'scoreboard',
  })
  return scoreboard;
}