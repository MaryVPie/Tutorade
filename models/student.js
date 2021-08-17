module.exports = function(sequelize, DataTypes) {
  const Student = sequelize.define('Student', {
    name_first: DataTypes.STRING,
    name_last: DataTypes.STRING,
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    notes: DataTypes.TEXT,
  });
  Student.associate = function(models) {
    Student.belongsTo(models.Teacher, {
			foreignKey: {allowNull: true,defaultValue:0}
    });
    Student.hasOne(models.Schedule, {
			onDelete: 'cascade',
		});
  };

  return Student;
};
