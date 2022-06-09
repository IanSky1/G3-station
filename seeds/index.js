const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');
const seedGame = require('./game-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedPosts();
  console.log('\n----- POSTS SEEDED -----\n');

  await seedComments();
  console.log('\n----- COMMENTS SEEDED -----\n');

  await seedGame();
  console.log('\n----- GAME SEEDED -----\n');

  
  process.exit(0);
};

seedAll();



