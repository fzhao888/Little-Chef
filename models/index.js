const User = require('./User');
const Recipe = require('./Recipe');
const UserRecipe = require('./UserRecipe');
const Ingredient = require('./Ingredient');
const RecipeIngredient = require('./RecipeIngredient');
const Post = require('./Post');
const UserIngredient = require('./UserIngredient');

// User and Recipe have many to many relationship
User.belongsToMany(Recipe, {
    through: {
        model: UserRecipe
    }
});

Recipe.belongsToMany(User, {
    through: {
        model: UserRecipe
    }
});

// Ingredient and Recipe have many to many relationship
Ingredient.belongsToMany(Recipe,{
    through: {
        model: RecipeIngredient
    }
});

Recipe.belongsToMany(Ingredient, {
    through: {
        model: RecipeIngredient
    }
});

// User and Post have one to many relationship
User.hasMany(Post, {
    foreign_key: 'reviewer_id',
    onDelete: 'CASCADE'
 });

Post.belongsTo(User, {
    foreign_key: 'reviewer_id'
});

// User and Ingredient have many to many relationship

User.belongsToMany(Ingredient, {
    through: {
        model: UserIngredient
    }
});

Ingredient.belongsToMany(User, {
    through: {
        model: UserIngredient
    }
});

module.exports = {
    User,
    Recipe,
    UserRecipe,
    Ingredient,
    UserIngredient,
    RecipeIngredient,
    Post
};