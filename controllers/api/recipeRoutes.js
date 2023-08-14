const router = require('express').Router();
const { Recipe } = require('../../models');
const withAuth = require('../../utils/auth');



// renders recipe
router.get('/', async(req,res) => {
    res.render('recipe', {
        logged_in: req.session.logged_in
    });
})

module.exports = router;