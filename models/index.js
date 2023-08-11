const User = require('./User');
const Recipe = require('./Recipe');
const UserRecipe = require('./UserRecipe');
const Ingredient = require('./Ingredient');
const RecipeIngredient = require('./RecipeIngredient');
const Post = require('./Post');


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

User.hasMany(Post, {
    foreign_key: 'reviewer_id',
    onDelete: 'CASCADE'
 });

Post.belongsTo(User, {
    foreign_key: 'reviewer_id'
});



module.exports = {
    User,
    Recipe,
    UserRecipe,
    Ingredient,
    RecipeIngredient,
    Post
};