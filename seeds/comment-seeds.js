const { Comment } = require('../models');

const commentData = [
    {
        comment_text: "Make a comment",
        post_id: 2,
        user_id: 1
    },

    {
        comment_text: "Vancouver, Canada is nice in the Summer!",
        post_id: 1,
        user_id: 2

    },

    {
        comment_text: "Baku would be nice!",
        post_id: 3,
        user_id: 3
    },

    {
        comment_text: "Kiev is nice! They had a great night-life in 2016!",
        post_id: 5,
        user_id: 4
    },

    {
        comment_text: "Peru would be nice in the Winter!",
        post_id: 4,
        user_id: 5
    },

    {
        comment_text: "The south island of New Zealand is amazing!",
        post_id: 6,
        user_id: 6
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;