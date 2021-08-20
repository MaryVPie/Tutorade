const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class InstructionLanguage extends Model {

}

InstructionLanguage.init(
    {
        language: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'instruction_language',
    }
);

module.exports = InstructionLanguage;