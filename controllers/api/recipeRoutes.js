const router = require("express").Router();
const { User, Recipe, Ingredient, History } = require("../../models");
const withAuth = require("../../utils/auth");
const fetch = require("node-fetch");

//  GET  api/recipes
// renders recipe
router.get("/", withAuth, async (req, res) => {
  res.render("recipe", {
    logged_in: req.session.logged_in,
  });
});

// POST route for api/recipes
// adds recipe to Recipe and History models
router.post("/", withAuth, async (req, res) => {
  // clear recipes 
  await Recipe.sync({ force: true });

  // get ingredients id using user id
  const userData = await User.findOne({
    where: {
      id: req.session.user_id,
    },
    include: [
      {
        model: Ingredient,
      },
    ],
  });

  const userIngredient = userData.get({ plain: true });
  const ingredientJSON = userIngredient.ingredients;
  console.log(ingredientJSON);

  if(ingredientJSON.length === 0){
    return res.status(500).json({message: 'No ingredients!'});
  }

  // gets ingredients name
  let ingredients = "";
  // preps ingredients names as a query parameter
  for (let i = 0; i < ingredientJSON.length - 1; i++) {
    ingredients += `${ingredientJSON[i].name}%2C`;
  }

  ingredients += `${ingredientJSON[ingredientJSON.length - 1].name}`;

  const appID = 'dd1ea4e2';
  const appKey = '5a310e71d76223de342321873bdac305';

  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${ingredients}&app_id=${appID}&app_key=%20${appKey}`;

  // stores recipe label, recipe image, and recipe url
  let recipes = [];

  // fetches recipe info from edamam api
  try {
    const response = await fetch(url);
    const result = await response.text();
    const json = await JSON.parse(result);

    // finds all history with user id
    const historyData = await History.findAll({
      where: {
        user_id: req.session.user_id
      }
    });

    const histories = historyData.map(history => history.get({ plain: true }));

    // creates urls and populates using recipes.URL
    const urls = [];

    for (let i = 0; i < histories.length; i++) {
      urls.push(histories[i].URL);
    }

    // adds recipes into recipe model then saves it into history model
    await json.hits.forEach((data) => {
      // deletes history dupes
      if (urls.includes(data.recipe.url)) {
        History.destroy({
          where: {
            URL: data.recipe.url
          }
        });
      }// end of deleting dupes

      const newRecipe = Recipe.create(
        {
          name: data.recipe.label,
          URL: data.recipe.url,
          image: data.recipe.image,
          user_id: req.session.user_id
        }
      );

      //adds history to history model
      const newHistory = History.create(
        {
          name: data.recipe.label,
          URL: data.recipe.url,
          image: data.recipe.image,
          user_id: req.session.user_id
        }
      );

      // returns new recipes
      recipes.push(newRecipe);
    });

  } catch (err) {
    res.status(500).json(err);
  }

  res.status(200).json(recipes);
});

module.exports = router;
