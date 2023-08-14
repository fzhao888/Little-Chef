const { Ingredient } = require('../models');

const ingredientData = [
    {
        name: 'peanut butter',
        user_id: '1'
    },
    {
        name: 'jelly',
        user_id: '1'
    },
    {
        name: 'bread',
        user_id: '1'
    }

];

const seedIngredients = () => Ingredient.bulkCreate(ingredientData);

module.exports = seedIngredients;