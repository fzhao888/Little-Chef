const router = require('express').Router();
const userRoutes = require('./userRoutes');
const ingredientRoutes = require('./ingredientRoutes'); 
const postRoutes = require('./postRoutes');
const recipesRoutes = require('./recipeRoutes');

router,use('/users', userRoutes);
router.use('/ingredients',ingredientRoutes);
router.use('/posts', postRoutes);
router.use('/recipes',recipeRoutes);


module.exports = router;