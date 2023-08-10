const User = require('./User');
const Recipe = require('./Recipe');
const UserRecipe = require('./UserRecipe');
const Ingredient = require('./Ingredient');
const RecipeIngredient = require('./RecipeIngredient');
const Post = require('./Post');
const User = require('./User');


User.belongToMany(Recipe, {
    through: {
        model: UserRecipe
    }
});

Recipe.belongToMany(User, {
    through: {
        model: UserRecipe
    }
});

Ingredient.belongToMany(Recipe,{
    through: {
        model: RecipeIngredient
    }
});

Recipe.belongToMany(Ingredient, {
    through: {
        model: RecipeIngredient
    }
});

User.hasOne(Post, {
    foreign_key: 'user_id',
    onDelete: 'CASCASDE'
});

Post.belongTo(User, {
    foreign_key: 'user_id'
});



module.exports = {
    User,
    Recipe,
    UserRecipe,
    Ingredient,
    RecipeIngredient,
    Post,
    User
};