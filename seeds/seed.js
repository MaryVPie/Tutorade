const sequelize = require('../config/connection');
//const { Language, User } = require('../models/index');

const User = require('../models/User');
const Language = require('../models/Language')

const userData = require('./userData.json');
const languageData = require('./languageData.json');

const seedDatabase = async (forcequit=false) => {
    await sequelize.sync({ force: true });

    const language = await Language.bulkCreate(languageData, {
        individualHooks: true,
        returning: true,
    });
    console.log(language)

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
    console.log(users)

    if(forcequit){
        process.exit(0);
    }
};
//seedDatabase();
module.exports = { seedDatabase };