const seedRecipeIngredients = require("./recipe-ingredient-seeds");
const seedRecipes = require("./recipe-seeds");
const seedIngredients = require("./ingredient-seeds");
const seedUsers = require("./user-seeds");
const seedUserRecipes = require("./user-recipe-seeds");
const seedUserIngredients = require('./user-ingredient-seeds');
const seedPosts = require("./post-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await seedRecipes();
  console.log("\n----- RECIPES SEEDED -----\n");

  await seedIngredients();
  console.log("\n----- INGREDIENTS SEEDED -----\n");

  await seedRecipeIngredients();
  console.log("\n----- RECIPE INGREDIENTS SEEDED -----\n");

  await seedUsers();
  console.log("\n----- USERS SEEDED -----\n");

  await seedUserIngredients();
  console.log("\n----- USER INGREDIENTS SEEDED -----\n");

  await seedUserRecipes();
  console.log("\n-----  USER RECIPES SEEDED -----\n");

  await seedPosts();
  console.log("\n-----  POSTS SEEDED -----\n");

  process.exit(0);
};

seedAll();
