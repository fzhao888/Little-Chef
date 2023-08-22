const User = require('./User');
const Recipe = require('./Recipe'); 
const Ingredient = require('./Ingredient');
const Favorite = require('./Favorite');
const History = require('./History');

// User and Favorite have one to many relationship
User.hasMany(Favorite, {
    foreign_key: 'user_id',
    onDelete: 'CASCADE', 
});

Favorite.belongsTo(User, {
    foreign_key: 'user_id', 
});
 

// User and Ingredient one many to many relationship

User.hasMany(Ingredient, {
    foreign_key: 'user_id',
    onDelete: 'CASCADE'
});

Ingredient.belongsTo(User, {
    foreign_key: 'user_id'
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
    History
};