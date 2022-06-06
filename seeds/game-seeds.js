const { Games } = require('../models');

const gameData = [
    {
        game_name: '', 
        game_genre: '', 
        game_console: ''
    }, 
    {
        game_name: '',
        game_genre:'', 
        game_console:''
    }, 
    {
        game_name: '', 
        game_genre:'', 
        game_console:''
    }, 
    {
        game_name: '', 
        game_genre:'', 
        game_console: ''
    }, 
    {
        game_name: '', 
        game_genre:'', 
        game_console: ''
    }, 
    {
        game_name: '', 
        game_genre:'', 
        game_console: ''
    }, 
    {
        game_name: '', 
        game_genre:'', 
        game_console: ''
    }, 
    {
        game_name:'', 
        game_genre:'', 
        game_console:''
    
    }
    
];
 const seedGame = () => Console.bulkCreate(gameData);

 module.exports = seedGame