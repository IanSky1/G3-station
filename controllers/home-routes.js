const router = require('express').Router();
const sequelize = require('../config/connection');
const { Console, Game, Genre} = require("../models");

router.get('/', (req, res) => {
    res.render('homepage');
});
// --------------
// I need to make some changes to lines 11-17 before we test this route

router.get('/signup', (req, res) => {
  if(req.session.loggedIn) {
    res.redirect('/');
    return;
 }
 res.render("signup")
});
//-----------------

// Just the initial setup for when we create the code for the login/user-data
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

module.exports = router;



