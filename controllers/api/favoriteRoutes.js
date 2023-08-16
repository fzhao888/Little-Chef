const router = require("express").Router();
const { Favorite, Recipe } = require("../../models");
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
        id: req.params.id,
      },
    });
    console.log(favoriteData);
    if (!favoriteData) {
      res.status(404).json({ message: "Favorite not found!" });
      return;
    }
    res.status(200).json(favoriteData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
