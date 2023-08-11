const { Ingredient } = require('../models');

const ingredientData = [
    {
        name: 'peanut butter', 
        quantity: 2,
        unit: 'tablespoons' 
    },
    {
        name: 'jelly',
        quantity: 2,
        unit: 'tablespoons' 
    },
    {
        name: 'bread',
        quantity: 2,
        unit: 'slices'
    }

];

const seedIngredients = () => Ingredient.bulkCreate(ingredientData);

module.exports = seedIngredients;