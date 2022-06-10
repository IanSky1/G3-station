const router = require('express').Router();
const {Comment} = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/', (req ,res) => {
    Comment.findAll()
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post("/", withAuth, (req, res) =>{

    if (req.session) {
    Comment.create({
        comment_text: req.body.comment_text,
        post_id: req.body.post_id,
        user_id: req.session.user_id
    })

    .then(dbCommentData => res.json(dbCommentData))
    
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    }); 
    }
});


router.put("/:id", withAuth, (req, res) => {
    Comment.update(
        {
            comment_text: req.body.comment_text
        },

        {
            where: {
                id: req.params.id
            }
        }
    )

    .then(dbPostData => {
        if (!dbPostData) {
            res.json(404).json({ message: "Sorry! No post with this id has been found"});
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
    Comment.destroy({
        where: {
            id: req.params.id
        }
    })

    .then(dbCommentData => {
        if (!dbCommentData) {
            res.status(404).json({ message: "Sorry! No comment with that id exists."});
            return;
        }
        res.json(dbCommentData);
    })
    
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });

});

module.exports = router;


