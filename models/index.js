const User = require('./User');
const Recipe = require('./Recipe');
const UserRecipe = require('./UserRecipe');
const Ingredient = require('./Ingredient');
const RecipeIngredient = require('./RecipeIngredient');
const Post = require('./Post');

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

// User and Ingredient have one to many relationship

User.hadMany(Ingredient, {
    foreign_key: 'user_id',
    onDelete: 'CASCADE'
});

Ingredient.belongsTo(User, {
    foreign_key: 'user_id'
});

module.exports = {
    User,
    Recipe,
    UserRecipe,
    Ingredient,
    RecipeIngredient,
    Post
};