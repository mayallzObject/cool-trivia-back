'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class scoreboard extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  scoreboard.init({
    score: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'scoreboard',
  });
  return scoreboard;
};