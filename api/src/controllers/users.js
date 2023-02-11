const { User } = require('../db');
const bcrypt = require("bcrypt");
const saltRound = 10;
const salt = bcrypt.genSaltSync(saltRound);

const getUsersDb = async () => {

    const allUsersDb = await User.findAll()
    return allUsersDb;
}

const postUsersDb = async (formData) => {
    const {
        userName,
        email,
        password,
        notifications,
    } = formData;

    if ( userName && email && password && notifications) {
        const hashPw = bcrypt.hashSync(password, salt);
        // console.log(hashPw);

        const findEmail = await User.findOne({where: { email: email }});
        const findUserName = await User.findOne({ where: { userName: userName }});

        if (findEmail || findUserName) {
            throw {
                status: false,
                message: "Email or Username already in use",
            }
        }

        await User.create({ 
            userName,
            email,
            password: hashPw, 
            notifications,
        });

        return "User created successfully";
    }

    throw {
        status:false,
        message: 'Need to add all information',
    }
}

module.exports = {getUsersDb, postUsersDb};