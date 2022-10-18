const router = require ('express').router();
const { comment } = require('../../models/');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async(req,res) => {
    try{
        const commentData = await comment.findAll({
            include: [User],
        });
        // serialize the data
        const comments = commentData.map((comment)) => comment.get({ plain: true});

        console.log(comments);

        res.render('single-post', {comments, loggedIn: req.session.loggedIn});
    }   catch(err) {
            res.status(500).json(err);
    }
});

router.post('/')