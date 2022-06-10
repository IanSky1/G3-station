const router = require('express').Router();
const sequelize = require('../../config/connection');
const {Post, User, Comment} = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    console.log('=============');
    Post.findAll({
        attributes: ['id', 'title', 'post_text', 'created_at'],
        include: [
            {
            model: User,
            attributes:['username'],
            },
        ]
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },

        attributes: ['id', 'post_text', 'title', 'created_at'],
        include: [
          {
            model: Comment,
            attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
            include: {
              model: User,
              attributes: ["username"],
            },
          },
        ]
    })

    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({message: 'Sorry! A post with this id has not been found' });
            return;
        }
        res.json(dbPostData);
    })

    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });

});


router.post('/', withAuth, (req, res) => {
    Post.create({
        title: req.body.title,
        post_text: req.body.post_text,
        user_id: req.session.user_id
    })

    .then(dbPostData => res.json(dbPostData))
    
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.put('/:id', withAuth, (req, res) => {
    Post.update(
        {
            title: req.body.title,
            post_text: req.body.post_text
        },

        {
            where: {
                id: req.params.id,
            }
        }
    )

    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'Sorry! A post with this id has not been found'});
            return;
        }
        res.json(dbPostData);
    })
    
    .catch(err => {
        console.log(err);
        res.status(500).json(err);

    });

});

router.delete('/:id', withAuth, (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id
        }
    })


    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({message: 'Sorry! A post with this id has not been found'});
            return;
        }
        res.json(dbPostData);
    })

    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });

});

module.exports = router;


