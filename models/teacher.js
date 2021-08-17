module.exports = function(sequelize, DataTypes) {
  const Teacher = sequelize.define('Teacher', {
    name_first: DataTypes.STRING,
    name_last: DataTypes.STRING,
		phone: DataTypes.STRING,
		email: DataTypes.STRING
  });
  Teacher.associate = function(models) {
    Teacher.hasMany(models.Student, {
      onDelete: 'cascade',
    });
  };

  return Teacher;
};
