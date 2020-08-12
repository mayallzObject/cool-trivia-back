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
      scoreboard.belongsTo(models.user)
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