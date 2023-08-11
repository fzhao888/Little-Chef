const {User} = require('../models');

const userData = [
    {
        first_name: 'enrique',
        last_name: 'pinedo',
        email: 'epinedo3@outlook.com',
        username: 'epinedo3',
        password: 'epinedo3'
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;