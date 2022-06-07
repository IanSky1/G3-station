const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Genre extends Model {}

Genre.init(
  {
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Genre',
  }
);

module.exports = Genre;