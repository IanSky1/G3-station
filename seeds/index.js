const seedGame = require('./game-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedGenre();
  console.log('\n----- GENRE SEEDED -----\n');

  await seedGame();
  console.log('\n----- GAME SEEDED -----\n');

  

  process.exit(0);
};

seedAll();