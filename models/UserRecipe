const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

/**
 * Schema for user_recipe:
 *
 * id(primary) - int,
 * user_id references user(id) - int
 * recipe_id references recipe(id) - int

 * 
 * showcases many to many relationship between user and recipe
 */
class UserRecipe extends Model {}

UserRecipe.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references:{
        model: "user",
        key: "id"
      }
    },
    recipe_id: {
        type: DataTypes.INTEGER,
        references:{
            model: "recipe",
            key: "id"
        }

    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user_recipe",
  }
);

module.exports = UserRecipe;
