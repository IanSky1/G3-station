const { Comment } = require('../models');

const commentData = [
    {
        comment_text: "I love World of Warcraft",
        post_id: 2,
        user_id: 1
    },

    {
        comment_text: "What games do you like?",
        post_id: 1,
        user_id: 2

    },

    {
        comment_text: "MMORPG's are fun",
        post_id: 3,
        user_id: 3
    },

    {
        comment_text: "I only play multiplayer games",
        post_id: 5,
        user_id: 4
    },

    {
        comment_text: "I like your favorite's list!",
        post_id: 4,
        user_id: 5
    },

    {
        comment_text: "Send me your game favorite's list in discord",
        post_id: 6,
        user_id: 6
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;