const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Language extends Model {

}

Language.init(
    {
        title: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        language_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'language',
    }
);

module.exports = Language;