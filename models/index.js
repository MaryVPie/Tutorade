const User = require('./User');
const Language = require('./Language')
//const seedHelper = require('../seeds/seed')
Language.hasMany(User, {
  onDelete: 'SET NULL'
});

User.belongsTo(Language);
// let seedDatabase = true;
// if (seedDatabase) {
//   seedHelper.seedDatabase()
//     .then(() => console.log("yey!"))
//     .catch((err) => {
//       console.log("sad :(");
//       console.log("error:", err);
//     });
// }
module.exports = { User, Language };


