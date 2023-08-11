const {RecipeIngredient} = require('../models');

const RecipeIngredientData = [
    {   
        recipe_id : 1,
        ingredient_id: 1
    }
]

const seedRecipeIngredients = () => RecipeIngredient.bulkCreate(RecipeIngredientData);

module.exports = seedRecipeIngredients;