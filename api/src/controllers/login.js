require('dotenv').config();
const { SECRET } = process.env;
const { User } = require('../db');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

function generateAccessToken(user) {
    return jwt.sign(user, SECRET, {expiresIn: '5m'});
}

const verifyLogin = async (formData) => {
    const {
        email,
        password
    } = formData;

    if (!email || !password) {
        throw {
            status: false,
            message: "Missing information email or password",
        }
    }

    const user =  await User.findOne({
        where: {
            email,
        }
    });

    if(user) {
        // const confirmed = bcrypt.compareSync(password, user.password);
        // console.log(confirmed);
        if(bcrypt.compareSync(password, user.password)) {
            const accessToken = generateAccessToken(user.dataValues);
            // res.header('authorization', accessToken).json({
            //     message: 'Authenticated user',
            //     token: accessToken,
            // })
            return { accessToken };
        } else {
            throw {
                status: false,
                message: "Wrong password",
            }
        }
    } else {
        throw {
            status: false,
            message: "Wrong email",
        }
    }
    
}

module.exports = { verifyLogin };