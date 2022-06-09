const router = require('express').Router();
const sequelize = require('../config/connection');
// Const { Console, Game, Genre } = require("../models"); May want to change the names of these?

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


router.get('/Game', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('Game');
});

//const options = {
	//method: 'GET',
	//headers: {
		//'X-RapidAPI-Key': '39aa117937msh60256623d8df0bdp13ba74jsnbfcad703174f',
		//'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
	//}
//};

//fetch('https://rawg-video-games-database.p.rapidapi.com/games', options)
	//.then(response => response.json())
	//.then(response => console.log(response))
	//.catch(err => console.error(err));


module.exports = router;



