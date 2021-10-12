const router = require('express').Router();
const { Post } = require('../models/');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
   
    const postData = await Post.findaAll({
      where: {
        title: req.body.title,
        date_created: req.body.date_created,
      },
    });
    

   
    res.render('all-posts-admin', { 
      layout: 'dashboard',
      posts,
    });
  } catch (err) {
    res.redirect('login');
  }
});

router.get('/new', withAuth, (req, res) => {
  res.render('new-post', {
    layout: 'dashboard',
  });
});

router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: Post,
          attributes: [
            'id',
            'title',
            'content',
            'date_created',
            'user_name',
            'post_comment',
          ],
        },
      ],
    });

    if (postData) {
      
      const post = postData.get({ plain: true });
      
      res.render('edit-post', {
        layout: 'dashboard',
        post,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect('login');
  }
});

module.exports = router;