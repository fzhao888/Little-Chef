const { UserRecipe } = require("../models");

const UserRecipeData = [
    {
        user_id: 1,
        recipe_id: 1
    }
];

const seedUserRecipes = () => UserRecipe.bulkCreate(UserRecipeData);

module.exports = seedUserRecipes;