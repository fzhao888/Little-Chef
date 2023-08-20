const User = require('./User');
const Recipe = require('./Recipe'); 
const Ingredient = require('./Ingredient');
const UserIngredient = require('./UserIngredient');
const Favorite = require('./Favorite');
const History = require('./History');

// User and Favorite have one to many relationship
User.hasMany(Favorite, {
    foreign_key: 'user_id',
    onDelete: 'CASCADE'
});

Favorite.belongsTo(User, {
    foreign_key: 'user_id',
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

// User and History have one to one relationship

User.hasOne(History, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

History.belongsTo(User, {
    foreign_key: 'user_id'
})

module.exports = {
    User,
    Recipe, 
    Favorite,
    Ingredient,
    UserIngredient,
    History
};