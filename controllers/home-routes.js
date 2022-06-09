const router = require('express').Router();
const sequelize = require('../config/connection');
const { Console, Game, Genre} = require("../models");

router.get('/homepage', (req, res) => {
    if (!req.user) {
    res.redirect('/homepage');
    return;
    }
    });
    

// ROUTER LOGIN
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/homepage');
        return;
    }
    res.render('login');
});


// ROUTER SIGN-UP
router.get('/signup', (req, res) => {
  if(req.session.loggedIn) {
    res.redirect('/homepage');
    return;
 }
 res.render("signup")
});




module.exports = router;


