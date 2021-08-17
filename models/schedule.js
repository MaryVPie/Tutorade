module.exports = function(sequelize, DataTypes) {
  const Schedule = sequelize.define('Schedule', {
    monday: DataTypes.BOOLEAN,
		tuesday: DataTypes.BOOLEAN,
		wednesday: DataTypes.BOOLEAN,
    thursday: DataTypes.BOOLEAN,
    friday: DataTypes.BOOLEAN
  });
  Schedule.associate = function(models) {
    Schedule.belongsTo(models.Student, {
			foreignKey: {allowNull: true,defaultValue:0}
    });
  };

  return Schedule;
};
