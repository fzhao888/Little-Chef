const router = require('express').Router();
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);

module.exports = router;
// const ingredientRoutes = require('./ingredientRoutes'); 
// const postRoutes = require('./postRoutes');
// const recipesRoutes = require('./recipeRoutes');

router.use('/users', userRoutes);
// router.use('/ingredients',ingredientRoutes);
// router.use('/posts', postRoutes);
// router.use('/recipes',recipeRoutes);


module.exports = router;
