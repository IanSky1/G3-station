// const { Model, DataTypes } = require('sequelize');

// const sequelize = require('../config/connection');

// class Game extends Model {}

// Game.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true
//     },
//     game_name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true
//     },
//     game_genre: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     }, 
//     game_console: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     }, 
//     game_type: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     }, 

//   },
    
//   {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'Game',
//   }
// );

// module.exports = Game;