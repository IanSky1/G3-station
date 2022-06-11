const { Vote } = require('../models');

const votedata = [
    {
        user_id: 1,
        post_id: 10
    },
    {
        user_id: 2,
        post_id: 9
    },
    {
        user_id: 3,
        post_id: 8
    },
    {
        user_id: 4,
        post_id: 7
    },
    {
        user_id: 5,
        post_id: 6
    },
    {
        user_id: 6,
        post_id: 5
    }
];

const seedVotes = () => Vote.bulkCreate(votedata);
    
module.exports = seedVotes;