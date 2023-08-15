const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Recipe extends Model{}
/**
 * Schema for recipe
 * id (primary) - id
 * name - string
 * url - string[]
 * image - string
 * 
 *  */
Recipe.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    URL: {
        type:  DataTypes.STRING
    },
    image: {
        type: DataTypes.STRING, 
    } 
},
{
    
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "recipe",
});

module.exports = Recipe;