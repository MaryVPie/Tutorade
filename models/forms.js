const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Forms extends Model {

}

Forms.init(
    {

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'forms',
    }
);

module.exports = Forms;