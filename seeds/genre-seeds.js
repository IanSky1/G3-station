const { Genre } = require('../models');

const genreData = [
  {
    genre_name: 'RPG',
  },
  {
    genre_name: 'First Person Shooter',
  },
  {
    genre_name: 'Action-Adventure',
  },
  {
    genre_name: 'Strategy',
  },
  {
    genre_name: 'Sports',
  },
  {
    genre_name: 'Racing',
  },
  {
    genre_name: 'MMO-RPG',
  },
  {
    genre_name: 'Horror',
  },
];

const seedGenre = () => Genre.bulkCreate(genreData);

module.exports = seedGenre;