
const { User } = require('../db');

const getUsersDb = async () => {

    const allUsersDb = await User.findAll()
    return allUsersDb;
}

module.exports = {getUsersDb};