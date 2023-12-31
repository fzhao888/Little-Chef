const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Ingredient extends Model { }

/**
 * Schema for Ingredient Table
 * id (primary)
 * name - string
 * quantity - string
 * unit -  string
 *
 */

Ingredient.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "ingredient",
  }
);

module.exports = Ingredient;
