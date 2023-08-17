
const router = require("express").Router();
const { User, Recipe, Ingredient } = require("../models");
const withAuth = require("../utils/auth");

// renders homepage
router.get('/', async (req, res) => {
  try {
    res.render('homepage', {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// renders ingredient/:id
router.get('/ingredient/:id' , async( req,res ) => {
  //renders ingredients info
  try{
    const ingredientData = await Ingredient.findByPk(req.params.id);

    const ingredient = ingredientData.get({ plain: true });

    res.render('ingredient', {
      ...ingredient,
      logged_in: req.session.logged_in
    });


  } catch(err){
    res.status(500).json(err);
  }
});


// use withAuth middleware to prevent access to route
router.get('/input', withAuth, async (req, res) => {
  // find logged in user based on session ID then join user info with ingredient model
  const userData = await User.findByPk(req.session.user_id, {
    attributes: { exclude: ["password"] },
    include: [{ model: Ingredient }],
  });
  
  const user = userData.get({ plain: true });

  res.render('input_ingredients', {
    ...user,
   logged_in: true,
  });
});

// use withAuth middleware to prevent access to route
router.get('/recipe', withAuth, async (req,res) => {
  const recipeData = await Recipe.findAll({
    where: {
      user_id: req.session.user_id,
    }
  }); 
  
  const recipes = recipeData.map(
    (recipe) => recipe.get({plain:true }) );
    
  res.render("recipe", { 
    recipes: recipes,
    logged_in: true
  });
});

// checks if logged in
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/welcome');
    return;
  }

  res.render('login');
});

// renders welcome page
router.get('/welcome', async (req,res) => {
  const userData = await User.findByPk(req.session.user_id, {
    attributes: { exclude: ["password"] }
  });
 
  const user = userData.get({ plain: true });

  res.render('welcome', {
    ...user,
    logged_in: true,
  });
});

// renders signup  
router.get('/signup', (req,res) => {
  res.render('signup');
});

module.exports = router;
