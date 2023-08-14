const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class UserIngredient extends Model {}

/**
 * 
 * Schema for user_ingredient
 * id(Primary) - int
 * 
 * user_id references user(id) - int
 * ingredient_id references ingredient(id) - int
 *
 *  
 * user_ingredient showcases many to many relationship between user and ingredient
 */ 
UserIngredient.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "user",
          key: "id",
        },
      },
      ingredient_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "ingredient",
          key: "id"
        },
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: "user_ingredient",

});

module.exports = UserIngredient;