const User = require('./User');
const Language = require('./Language');
const Role = require('./Role.js');
const UserLanguage = require('./UserLanguage');


Role.hasMany(User);
User.belongsTo(Role);

User.hasOne(UserLanguage);
Language.belongsTo(UserLanguage);

UserLanguage.hasMany(Language);

// Ask Anotny for the relationship
module.exports = { User, Language, Role, UserLanguage };