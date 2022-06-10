const seedGame = require('./game-seeds');

const sequelize = require('../config/connection');
const seedComments = require('./comment-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedPost();
  console.log('\n----- POST SEEDED -----\n');

  await seedUser();
  console.log('\n----- USER SEEDED -----\n');

  await seedComments();
  console.log('\n----- COMMENT SEEDED -----\n');

  
  process.exit(0);
};

seedAll();



