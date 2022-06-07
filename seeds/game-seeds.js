const { Games } = require('../models');

const gameData = [
    {
        game_name: 'Call of Duty: Black Ops 3', 
        game_genre: 'First Person Shooter', 
        game_console: 'Xbox One', 
        game_type: 'Multi-Player'
    }, 
    {
        game_name: 'Devil May Cry 5',
        game_genre:'Action-Adventure', 
        game_console:'PS4', 
        game_type: 'Single-Player'
    }, 
    {
        game_name: 'Sonic The Hedgehog', 
        game_genre:'Action-Adventure', 
        game_console:'PS3', 
        game_type: 'Single-Player'
    }, 
    {
        game_name: 'Midnight Club 3', 
        game_genre:'Racing ', 
        game_console: 'Xbox One', 
        game_type: 'Multi-Player'
    }, 
    {
        game_name: 'Civilization', 
        game_genre:'Strategy', 
        game_console: 'PC', 
        game_type: 'Single-Player'
    }, 
    {
        game_name: 'World Of Warcraft', 
        game_genre:'MMO-RPG', 
        game_console: 'PC', 
        game_type: 'Single-Player'
    }, 
    {
        game_name: 'NBA 2K22', 
        game_genre:'Sports', 
        game_console: 'PS4', 
        game_type: 'Multi-Player'
    }, 
    {
        game_name:'Madden NFL 22', 
        game_genre:'Sports', 
        game_console:'Xbox One', 
        game_type: 'Multi-Player'
    }, 
    {
        game_name:'Resident-Evil 3', 
        game_genre:'Horror', 
        game_console:'PS2', 
        game_type: 'Multi-Player'
    },
    {
        game_name:'Marvels The Avengers', 
        game_genre:'Action-Adventure', 
        game_console:'PS4', 
        game_type: 'Single-Player'
    }, 
    {
        game_name:'Jax and Dexter', 
        game_genre:'Action-Adventure', 
        game_console:'PS2', 
        game_type: 'Single-Player'
    },
    {
        game_name:'Ty The Tasmanian Tiger', 
        game_genre:'Action-Adventure', 
        game_console:'PS2', 
        game_type: 'Single-Player'
    }, 
    {
        game_name:'Battlefield 4', 
        game_genre:'First-Person Shooter', 
        game_console:'Xbox One', 
        game_type: 'Multi-Player'
    }, 
    {
        game_name:'Halo: Reach', 
        game_genre:'First-Person Shooter', 
        game_console:'Xbox 360', 
        game_type: 'Multi-Player'
    }, 
    {
        game_name:'Dead Space', 
        game_genre:'Horror', 
        game_console:'Xbox 360', 
        game_type: 'Single-Player'
    }, 
    {
        game_name:'Left For Dead', 
        game_genre:'Horror', 
        game_console:'Xbox 360', 
        game_type: 'Single-Player'
    }, 
    {
        game_name:'Diablo', 
        game_genre:'MMO-RPG', 
        game_console:'PC', 
        game_type: 'Multi-Player'
    }, 
    {
        game_name:'Overwatch', 
        game_genre:'First-Person Shooter', 
        game_console:'Xbox One', 
        game_type: ''
    }, 
    {
        game_name:'Dynasty-Warriors', 
        game_genre:'Action-Adventure', 
        game_console:'PS3', 
        game_type: 'Single-Player'
    }, 
    {
        game_name:'Resident-Evil 8', 
        game_genre:'Horror', 
        game_console:'PS4', 
        game_type: 'Single-Player'
    }, 
    {
        game_name:'Skyrim', 
        game_genre:'RPG', 
        game_console:'Xbox 360', 
        game_type: 'Single-Player'
    }, 
    {
        game_name:'Red Dead Redemption 2', 
        game_genre:'Action-Adventure', 
        game_console:'PS4', 
        game_type: 'Single-Player'
    }, 
    {
        game_name:'Sly-Cooper', 
        game_genre:'Action-Adventure', 
        game_console:'PS2', 
        game_type: 'Single-Player'
    }, 
    {
        game_name:'Mario Odyessey', 
        game_genre:'Action-Adventure', 
        game_console:'Nintendo Switch', 
        game_type: 'Single-Player'
    }, 
    {
        game_name:'Zelda: Breathe Of The Wild', 
        game_genre:'Action-Adventure', 
        game_console:'Nintendo Switch', 
        game_type: 'Single-Player'
    }, 
    {
        game_name:'Wii Fit', 
        game_genre:'Sports', 
        game_console:'Nintendo Wii', 
        game_type: 'Single-Player'
    }, 
    {
        game_name:'Mario Kart 7', 
        game_genre:'Racing', 
        game_console:'Nintendo Wii', 
        game_type: 'Multi-Player'
    }, 
    {
        game_name:'Gears of War', 
        game_genre:'First-Person Shooter', 
        game_console:'Xbox 360', 
        game_type: 'Multi-Player'
    }, 
    {
        game_name:'Forza Motorsport 6', 
        game_genre:'Racing', 
        game_console:'Xbox 360', 
        game_type: 'Multi-Player'
    }, 
    {
        game_name:'Elden Ring', 
        game_genre:'MMO-RPG', 
        game_console:'PC', 
        game_type: 'Multi-Player'
    }, 
    {
        game_name:'Minecraft', 
        game_genre:'RPG', 
        game_console:'PC', 
        game_type: 'Multi-Player'
    }, 
    {
        game_name:'God of War', 
        game_genre:'Action-Adventure', 
        game_console:'PS4', 
        game_type: 'Single-Player'
    }, 
    {
        game_name:'Uncharted', 
        game_genre:'Action-Adventure', 
        game_console:'PS3', 
        game_type: 'Single-Player'
    }, 
    {
        game_name:'Super Mario Galaxy', 
        game_genre:'Action-Adventure', 
        game_console:'Nintendo Wii', 
        game_type: 'Single-Player'
    }, 
    
];
 const seedGame = () => Console.bulkCreate(gameData);

 module.exports = seedGame