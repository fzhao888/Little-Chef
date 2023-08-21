const router = require("express").Router();
const { Ingredient, UserIngredient } = require("../../models");
const withAuth = require("../../utils/auth");

// POST for ingredients using withAuth middleware
// adds ingredient then returns it as JSON
router.post("/", withAuth, async (req, res) => {
  try {

    const ingredientData = await Ingredient.findOne({
      where: { name: req.body.name },
    });
 
    if (!ingredientData) {

      const newIngredient = await Ingredient.create({
        ...req.body,
        user_id: req.session.user_id,
      });

    }

    const newIngredientId = await Ingredient.findOne({
      where: { name: req.body.name },
    });

    const newUserIngredient = await UserIngredient.create({
      user_id: req.session.user_id,
      ingredient_id: newIngredientId.id,
    });
    res.status(200).json({message: "Added ingredient successfully!"});
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE for ingredients using withAuth middleware
// deletes ingredient 
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const ingredientData = await Ingredient.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!ingredientData) {
      res.status(404).json({ message: 'Ingredient not found!' });
      return;
    }

    res.status(200).json(ingredientData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
