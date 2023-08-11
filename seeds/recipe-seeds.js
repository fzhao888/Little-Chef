const {Recipe} = require('../models');

const recipeData = [
    {
        name: 'peanut butter jelly sandwich',
        instructions: ['Gather ingredients', 'Spread peanut butter and jelly on one side of each slice of bread', 'Press two slices of bread together']
    }
]

const seedRecipes = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipes;