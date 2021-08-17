const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserLanguage extends Model {

}

UserLanguage.init(
    {
        
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user_language',
    }
);

module.exports = UserLanguage;