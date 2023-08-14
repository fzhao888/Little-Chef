const { Ingredient } = require('../models');

const ingredientData = [
    {
        name: 'peanut butter'
    },
    {
        name: 'jelly'
    },
    {
        name: 'bread'
    }

];

const seedIngredients = () => Ingredient.bulkCreate(ingredientData);

module.exports = seedIngredients;