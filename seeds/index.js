const seedConsole = require('./console-seeds');
const seedGenre = require('./genre-seeds');
const seedGame = require('./game-seeds');
const seedMultiplayer = require('./multiplayer-seeds');
const seedSingleplayer = require('./singleplayer-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedConsole();
  console.log('\n----- CONSOLE SEEDED -----\n');

  await seedGenre();
  console.log('\n----- GENRE SEEDED -----\n');

  await seedGame();
  console.log('\n----- GAME SEEDED -----\n');

  await seedMultiplayer();
  console.log('\n----- MULTIPLAYER SEEDED -----\n');

  await seedSingleplayer();
  console.log('\n----- SINGLEPLAYER SEEDED -----\n');


  process.exit(0);
};

seedAll();