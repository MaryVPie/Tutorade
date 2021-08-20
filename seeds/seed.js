const sequelize = require('../config/connection');
const { Tutor, Student, Language, Role} = require('../models/index');

const userData = require('./userData.json');
const roleData = require('./roleData.json');

const seedDatabase = async() => {
    await sequelize.sync({ force: true });

    const users = await Student.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for (const role of roleData) {
        await Role.create({
            ...role,
            user_id: users[Math.floor(Math.random() * users.length)].id,
        });
    }

    process.exit(0);
};

seedDatabase();