const Tutor = require('./Tutor');
const Student = require('./Student');
const Language = require('./Language');
const Role = require('./Role');
const InstructionLanguage = require('./InstructionLanguage');


Role.hasMany(Tutor);
Tutor.belongsTo(Role);

Tutor.belongsToMany(Language, {
  // Define the third table needed to store the foreign keys
  through: {
    model: InstructionLanguage,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'languages',
  foreignKey: 'language_id'
});
Role.hasMany(Student);
Student.belongsTo(Role);

Student.belongsToMany(Language, {
  // Define the third table needed to store the foreign keys
  through: {
    model: InstructionLanguage,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'languages',
  foreignKey: 'language_id'
});


Language.belongsToMany(Role, {
  // Define the third table needed to store the foreign keys
  through: {
    model: InstructionLanguage,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'roles',
  foreignKey: 'role_id'
});
// Ask Anotny for the relationship
module.exports = { Tutor, Student, Language, Role };

