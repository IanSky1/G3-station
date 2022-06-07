const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Console extends Model {}

Console.init(
  {
      id: {
          type: DataTypes.INTEGER, 
          allowNull: false, 
          primaryKey: true,
          autoIncrement: true
      }, 
      console_name: {
          type: DataTypes.STRING,
          allowNull: false   
      }



    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'console',
  }, 
  
);

module.exports = Console;