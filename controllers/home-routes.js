const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment, Game } = require("../models");

router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'post_text',
            'title',
            'created_at',
        ],
        order: [[ "created_at", "DESC"]],

        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username'],
                },
            },

            {
                model: User,
                attributes: ['username'],
            },
        ],
    })

    .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('homepage', {
            posts,
            logged_in: req.session.logged_in,
            username: req.session.username,
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });

    });
    

// ROUTER LOGIN
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/homepage');
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


