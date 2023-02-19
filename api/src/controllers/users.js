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
        isAdministrator,
    } = formData;

    if ( userName && email && password) {
        const hashPw = bcrypt.hashSync(password, salt);
        // console.log(hashPw);
        const userNameCi = userName.toLowerCase();
        const emailCi = email.toLowerCase();
        const findEmail = await User.findOne({where: { email: emailCi }});
        const findUserName = await User.findOne({ where: { userName: userNameCi }});

        if (findEmail || findUserName) {
            throw {
                status: false,
                message: "Email or Username already in use",
            }
        }

        await User.create({ 
            userName: userNameCi,
            email: emailCi,
            password: hashPw, 
            notifications,
            isAdministrator,
        });

        return "User created successfully";
    }

    throw {
        status:false,
        message: 'Need to add all information',
    }
}

module.exports = {getUsersDb, postUsersDb};