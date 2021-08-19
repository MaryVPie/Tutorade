const Tutor = require('./Tutor');
const Student = require('./Student');
const Language = require('./Language');
const Role = require('./Role');


Role.hasMany(Tutor);
Tutor.belongsTo(Role);

Tutor.belongsToMany(Language, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Language,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'languages'
});
Role.hasMany(Student);
Student.belongsTo(Role);

Student.belongsToMany(Language, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Language,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'languages'
});


Language.belongsToMany(Role, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Language,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'roles'
});
// Ask Anotny for the relationship
module.exports = { Tutor, Student, Language, Role };

