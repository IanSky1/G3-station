const router = require('express').Router();
const sequelize = require('../config/connection');
// Const { Console, Game, Genre } = require("../models"); May want to change the names of these?

router.get('/', (req, res) => {
    res.render('homepage');
});
// Just the initial setup for when we create the code for the login/user-data
router.get('/login', (req, res) => {
    res.render('login');
});



