const { Post } = require('../models');

const postData = [
    {
        title: "Welcome to G3_Station!",
        post_text: "We hope you find what you are looking for!",
        user_id: 1
    },

    {
        title: "Gamers corner",
        post_text: "We welcome you to search a list of our recommended games",
        user_id: 2
    },

    {
        title: "Computer-games",
        post_text: "We have a long list of PC games to choose from.",
        user_id: 3
    },

    {
        title: "console-choices",
        post_text: "What type of console do you prefer to play?",
        user_id: 4
    },

    {
        title: "Xbox/ps4",
        post_text: "Xbox is better than PS4, but leave a comment and let us know which is your favorite",
        user_id: 5
    },

    {
        title: "We love all videogames!",
        post_text: "Feel free to let us know which are your favorites",
        user_id: 6
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;