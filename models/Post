const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model{}

/**
 * Schema for post
 * 
 * id (primary) - int
 * recipe_id  references recipe(id) - int
 * reviewer_id references user(id) - int
 * comments - String 
 * ratings - int
 * date_time - DATE
 * 
 */
Post.init({
    id: {
        type: DataTypes. INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    recipe_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "recipe",
            key: "id"
        }
    },
    reviewer_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "user",
            key: "id"
        }
    },
    comments: {
        type: DataTypes. STRING,
    },
    ratings: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    date_time: {
        type: DataTypes.DATE,
        allowNull: false
    }
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
});

exports.module = Post;