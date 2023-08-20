const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Favorite extends Model { }
/**
 * Schema for Favorite
 * id (primary) - id
 * user_id - int
 * recipe_id - int
 *  */
Favorite.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING
    },
    URL: {
      type: DataTypes.STRING(500),
      unique: true,
      validate: {
        isUrl: true
      }
    },
    image: {
      type: DataTypes.STRING(3000),
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "favorite",
  }
);

module.exports = Favorite;
