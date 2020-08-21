'use strict'
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {

    static associate(models) {
      user.hasMany(models.scoreboard)
    }
  };
  user.init({
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    userImg: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'user',
  })
  return user
}