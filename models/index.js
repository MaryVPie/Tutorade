const User = require('./User');
const Language = require('./Language');
const Role = require('./Role.js');
const UserLanguage = require('./UserLanguage');


Role.hasMany(User);
User.belongsTo(Role);

User.belongsToMany(Language, {
    // Define the third table needed to store the foreign keys
    through: {
        model: UserLanguage,
        unique: false
    },
    // Define an alias for when data is retrieved
    as: 'languages'
});

Language.belongsToMany(User, {
    // Define the third table needed to store the foreign keys
    through: {
        model: UserLanguage,
        unique: false
    },
    // Define an alias for when data is retrieved
    as: 'users'
});
// Ask Anotny for the relationship
module.exports = { User, Language, Role, UserLanguage };

