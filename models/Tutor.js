const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Tutor extends Model {

}

Tutor.init(
  {
    name_first: DataTypes.STRING,
    name_last: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tutor',
  }
);

module.exports = Tutor;