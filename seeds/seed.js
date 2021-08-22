const sequelize = require('../config/connection');
const { Language, User} = require('../models/index');

const userData = require('./userData.json');
const languageData = require('./languageData.json');

const seedDatabase = async() => {
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

    process.exit(0);
};

seedDatabase();