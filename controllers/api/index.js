const router = require('express').Router();
const userRoutes = require('./userRoutes');
const ingredientRoutes = require('./ingredientRoutes'); 
const recipeRoutes = require('./recipeRoutes');
const favoriteRoutes = require('./favoriteRoutes'); 
const historyRoutes = require('./historyRoutes');

// setups up api routes
router.use('/users', userRoutes);
router.use('/ingredients',ingredientRoutes);
router.use('/recipes',recipeRoutes);
router.use('/favorites',favoriteRoutes);
router.use('/history', historyRoutes);

module.exports = router;
