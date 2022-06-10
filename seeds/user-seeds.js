const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
    {
        username: "Zach20",
        email: "ZachD1@gmail.com",
        password: "password200",
    },

    {
        username: "Mark22",
        email: "MarkD2@gmail.com",
        password: "password150",
    },

    {
        username: "Amanda30",
        email: "AmandaD3@gmail.com",
        password: "password100",
    },

    {
        username: "Erik41",
        email: "ErikD4@gmail.com",
        password: "password800",
    },

    {
        username: "Johnny53",
        email: "JohnnyB5@gmail.com",
        password: "password400",
    },

    {
        username: "Christopher61",
        email: "ChristopherD9@gmail.com",
        password: "password600",
    } 
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;