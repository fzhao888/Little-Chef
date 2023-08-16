const User = require('./User');
const Recipe = require('./Recipe'); 
const Ingredient = require('./Ingredient');
const RecipeIngredient = require('./RecipeIngredient');
const UserIngredient = require('./UserIngredient');
const Favorite = require('./Favorite');

// User and Recipe have one to many relationship
User.hasMany(Recipe, {
    foreign_key: 'user_id',
    onDelete: 'CASCADE'
});

Recipe.belongsTo(User, {
    foreign_key: 'user_id'
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

// User and Favorite have one to many relationship
User.hasMany(Favorite, {
    foreign_key: 'user_id',
    onDelete: 'CASCADE'
});

Favorite.belongsTo(User, {
    foreign_key: 'user_id'
});

// Recipe and Favorite have one to many relationship
Recipe.hasMany(Favorite, {
    foreign_key: 'recipe_id',
    onDelete: 'CASCADE'
});

Favorite.belongsTo(Recipe, {
    foreign_key: 'recipe_id'
});

module.exports = {
    User,
    Recipe, 
    Favorite,
    Ingredient,
    UserIngredient,
    RecipeIngredient
};