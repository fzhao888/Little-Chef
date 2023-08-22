const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class History extends Model { }

/**
 * Schema for history
 * id (primary) - id
 * name - string
 * url - string
 * image - string
 *
 *  */

History.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING
        },
        URL: {
            type: DataTypes.STRING(500),
            validate: {
                isUrl: true
            }
        },
        image: {
            type: DataTypes.STRING(3000),
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                key: "id",
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "history",
    }
);

module.exports = History;