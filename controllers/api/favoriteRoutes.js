const router = require("express").Router();
const { Favorite, Recipe } = require("../../models");
const withAuth = require("../../utils/auth"); 

router.get('/', withAuth, async (req,res) => {
    try{
        const favoritesData = await Favotire.findAll({
            where: {
                user_id: req.session.id
            }, 
            include: [
                {
                    model: Recipe
                } 
            ]
        })

        const favorites = favoritesDataData.map ( (favorite) => favorite.get({ plain: true}) ); 

        res.render('favorite', {
            ...favorites,
            logged_in: req.session.logged_in
        } );
    } catch(err){
        res.status(400).json(err);
    }
});

router.post('/:id', withAuth, async (req,res) => {

});

router.delete('/:id', withAuth, async (req,res) => {

});

module.exports = router;

