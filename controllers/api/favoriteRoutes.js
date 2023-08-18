const router = require("express").Router();
const { Favorite, Recipe, User } = require("../../models");
const withAuth = require("../../utils/auth");


router.post("/:id", withAuth, async (req, res) => {
  try {
    const newFavorite = await Favorite.create({
      user_id: req.session.user_id,
      recipe_id: req.params.id,
    });
    
    res.status(200).json(newFavorite);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const favoriteData = await Favorite.destroy({
      where: {
        recipe_id: req.params.id,
      }
      }); 
    if (!favoriteData) {
      res.status(404).json({ message: "Favorite not found!" });
      return;
    }
    res.status(200).json(favoriteData);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

module.exports = router;
