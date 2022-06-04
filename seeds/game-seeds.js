const { Games } = require('../models');

const gameData = [
    {
        game_name: '', 
    }, 
    {
        game_name: ''
    }, 
    {
        game_name: ''
    }, 
    {
        game_name: ''
    }, 
    {
        game_name: ''
    }, 
    {
        game_name: ''
    }, 
    {
        game_name: ''
    }
    
];
 const gameCategories = () => Console.bulkCreate(gameData);

 module.exports = gameCategories