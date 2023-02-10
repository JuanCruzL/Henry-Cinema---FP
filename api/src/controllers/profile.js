require('dotenv').config();
const { User } = require('../db');
const bcrypt = require("bcrypt");
const saltRound = 10;
const salt = bcrypt.genSaltSync(saltRound);

const getProfileById = async (id) => {

    const user = await User.findByPk(id);
    return user;
}

const putProfileById = async (id, formData) => {
    let {
        email,
        userName,
        password,
    } = formData;

    password = bcrypt.hashSync(password, salt);
    
    const user = await User.findByPk(id);
    if (user) {
        await user.update({
            email: email ? email : user.email,
            userName: userName ? userName : user.userName,
            password: password ? password : user.password,
        });
        return "Correctly updated";
    } else {
        throw {
            status:false,
            message: "Error could not find user id",
        }
    }
    
}

module.exports = { getProfileById, putProfileById };