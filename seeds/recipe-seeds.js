const {Recipe} = require('../models');

const recipeData = [
    {
        name: 'peanut butter jelly sandwich',
        instructions: '1) Gather ingredients 2) Spread peanut butter and jelly on one side of each slice of bread 3) Press two slices of bread together'
    }
]

const seedRecipes = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipes;