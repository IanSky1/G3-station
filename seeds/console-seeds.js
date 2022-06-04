const { Console } = require('../models');

const consoleData = [
    {
        console_name: 'Xbox One', 
    }, 
    {
        console_name: 'PS4'
    }, 
    {
        console_name: 'Nintendo Switch'
    }, 
    {
        console_name: 'Xbox 360'
    }, 
    {
        console_name: 'PS3'
    }, 
    {
        console_name: 'Nintendo Wii'
    }
    
];
 const consoleCategories = () => Console.bulkCreate(consoleData);

 module.exports = consoleCategories