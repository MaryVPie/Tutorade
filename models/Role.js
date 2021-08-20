const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Role extends Model {

}

Role.init(
    {
        title: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        role_id: {
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
        modelName: 'role',
    }
);

module.exports = Role;