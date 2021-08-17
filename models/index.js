const Schedule = require('./Schedule');
const Student = require('./Student');
const Tutor = require('./Tutor');

Student.hasOne(Schedule);
Schedule.belongsTo(Student);

Tutor.hasMany(Schedule);
Schedule.belongsTo(Tutor);

module.exports = { Schedule, Student, Tutor };