const User = require('./User');
const Language = require('./Language')

Language.hasMany(User, {
  onDelete: 'SET NULL'
});

User.belongsTo(Language); 

module.exports = { User, Language };
