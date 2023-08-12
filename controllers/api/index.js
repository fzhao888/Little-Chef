const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const spoonRoutes = require('./spoonRoute');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/spoon', spoonRoutes)

module.exports = router;
