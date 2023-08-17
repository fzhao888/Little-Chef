
const router = require("express").Router();
const { User, Recipe, Ingredient, Favorite } = require("../models");
const withAuth = require("../utils/auth");
const Recaptcha = require('express-recaptcha').RecaptchaV3
const recaptcha = new Recaptcha('6Lfvpa4nAAAAAJLBgZhMIK285PXaOAy54_yXgnjG', '6Lfvpa4nAAAAALnykTBhcaD5BotiB1jviKo_Jk8M', {callback:'cb'}) 

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

router.get("/favorites", withAuth, async (req, res) => {
  try { 
    const favoritesData = await User.findByPk(
      req.session.user_id, {
      include: [
        {
          model: Recipe, through: Favorite,  as: 'user_favorites'
        },
      ]
    },
    ); 
    const favorites = favoritesData.get({ plain: true }); 

    res.render("favorite", {
      favorites: favorites.user_favorites,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
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
router.get('/login',  recaptcha.middleware.render, function (req, res) {
  if (req.session.logged_in) {
    res.redirect('/welcome');
    return;
  }

  res.render('captcha', { captcha: res.recaptcha });
});

router.post('/login', recaptcha.middleware.verify, function (req, res) {
  if (!req.recaptcha.error) {
      // success code
     res.render('login')
  } else { 
      document.location.replace('/login');
  }
})

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
router.get('/signup', recaptcha.middleware.render, (req,res) => { 
  res.render('captcha',{ captcha: res.recaptcha, path: req.path });
}); 

router.post('/signup', recaptcha.middleware.verify, function (req, res) {
  if (!req.recaptcha.error) {
      // success code
     res.render('signup')
  } else {
    document.location.replace('/signup');
  }
})

module.exports = router;
