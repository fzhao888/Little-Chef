const router = require('express').Router();
const userRoutes = require('./userRoutes');
const ingredientRoutes = require('./ingredientRoutes'); 
const recipeRoutes = require('./recipeRoutes');
const postRoutes = require('./postRoutes');

router.use('/users', userRoutes);
router.use('/ingredients',ingredientRoutes);
router.use('/recipes',recipeRoutes);
// router.use('/posts', postRoutes);


module.exports = router;
