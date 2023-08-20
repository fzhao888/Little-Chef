const router = require("express").Router();
const { Favorite, Recipe, History } = require("../../models");
const withAuth = require("../../utils/auth");

// adds recipe to favorite
router.post("/:id", withAuth, async (req, res) => {
  try { 
    const recipeData = await Recipe.findOne({
      where: {
        id: req.params.id
      }
    })

    const recipe = recipeData.get({ plain:true }); 

    const newFavorite = await Favorite.create({
      user_id: req.session.user_id,
      URL: recipe.URL,
      name: recipe.name,
      image: recipe.image
    });
    
    res.status(200).json(newFavorite);
  } catch (err) {
    res.status(500).json(err);
  }
});

// deletes recipe from favorite
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const favoriteData = await Favorite.destroy({
      where: {
        id: req.params.id,
      }
      }); 
    if (!favoriteData) {
      res.status(404).json({ message: "Favorite not found!" });
      return;
    }
    res.status(200).json(favoriteData);
  } catch (err) { 
    res.status(500).json(err);
  }
});

// add to favorites by id from history page
router.post('/history/:id', withAuth, async (req,res) => {
  try { 
    const historyData = await History.findByPk(req.params.id);
    const history = historyData.get({ plain:true }); 

    const newFavorite = await Favorite.create({
      user_id: req.session.user_id,
      URL: history.URL,
      name: history.name,
      image: history.image
    });
    
    res.status(200).json(newFavorite);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
