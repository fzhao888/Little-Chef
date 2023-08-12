const router = require('express').Router();
const { Recipe } = require('../models');
const withAuth = require('../utils/auth');

// renders homepage
router.get('/', async (req,res) => {
    try{
        res.render('homepage', {
            logged_in: req.session.logged_in
        });
    } catch(err){
        res.status(500).json(err);
    }
});

// use withAuth middleware to prevent access to route 
router.get('/profile', withAuth, async (req,res) => {
    // find logged in user based on session ID then join user info with recipe model
    const userData = await User.findByPk(req.session.id, {
        attributes: { exclude: ['password'] }, 
        include: [{ model: Recipe }]
    });

    const user = userData.get({ plain:true });

    res.render('profile', {
        ...user,
        logged_in: true
    });
});

// checks if logged in
router.get('/login', (req,res) => {
    if(req.session.logged_in) {
        res.redirect('/profile');
        return;
    }

    res.render('login');
});

module.exports = router;