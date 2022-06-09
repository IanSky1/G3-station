const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/models');


router.get("/", (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] },
    })

    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    User.findOne({
        attributes: { exclude: ['password']},
        where: {
            id: req.params.id,
        },
        
        include: [
            {
                model: Post,
                attributes: ['id', 'title', 'post_text', 'created_at'],
            },

            {
                model: Comment,
                attributes: ['id', 'comment_text', 'created_at'],
                include: {
                    model: Post,
                    attributes: ['title'],
                },
            },
        ],
    })

    .then((dbUserData) => {
        if (!dbUserData) {
            res.status(404).json({ message: 'A user with this id does not exist' });
            return;
        }
        res.json(dbUserData);
    })

    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    })
    .then(dbUserData => {
        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;
        });
        
        res.json(dbUserData);
})

.catch(err => {
    console.log(err);
    res.status(500).json(err);
});
});

router.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email,
        },
    }).then(dbUserData => {
        if (!dbUserData) {
            res.status(400).json({ message: 'No user matches that email address' });
            return;
        }

        const validPassword = dbUserData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'The password you entered is incorrect' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;
            res.json({ user: dbUserData, message: 'You have successfully logged in! Welcome!'});
        });
    });
});

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

router.put('/:id', withAuth, (req, res) => {
    User.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id,
        },
    })

    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'A user has not been found with that id' });
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });

});

router.delete('/:id', withAuth, (req, res) => {
    User.destroy({
        where: {
            id: req.params.id,
        }
    })

    .then(dbUserData => {
        if(!dbUserData) {
            res.status(404).json({message: "A user has not been found with that id"});
            return;
        }
        res.json(dbUserData);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;



