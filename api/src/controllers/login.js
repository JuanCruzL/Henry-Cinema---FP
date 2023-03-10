require('dotenv').config();
const { SECRET } = process.env;
const { User } = require('../db');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


function generateAccessToken(user) {
    return jwt.sign(user, SECRET, {expiresIn: '1m'});
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
        raw: true,
        where: {
            email,
        }
    });

    if(user) {
        // const confirmed = bcrypt.compareSync(password, user.password);
        // console.log(confirmed);
        // console.log(user);
        if(bcrypt.compareSync(password, user.password)) {
            const accessToken = generateAccessToken(user);
            // res.header('authorization', accessToken).json({
            //     message: 'Authenticated user',
            //     token: accessToken,
            // })
            console.log(accessToken);
            
            return { accessToken, isAdministrator: user.isAdministrator ? 
                    user.isAdministrator : false };
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

const verifyGoogleLogin = async (googleData) => {
        const { 
            email, 
            userName,
            image,
        } = googleData;

        if (!email || !userName || !image) {
          throw {
            status:false,
            message: "Missing obligatory information",
          }
        }
    
        // this returns a unnecessary boolean
        const user = await User.findOrCreate({
            where: {
                email
            },
            defaults: {
                email,
                userName,
                image,
            }
        });
        if (user) {
            const finalUser = await User.findOne({
                raw:true,
                where: {
                    email,
                }
            })
            const accessToken = generateAccessToken(finalUser);
            return { accessToken, isAdministrator: finalUser.isAdministrator ?
                    finalUser.isAdministrator : false };
        } else {
            throw {
                status:false,
                message: "Error in login with Google",
            }
        }
      
}

module.exports = { 
    verifyLogin,
    verifyGoogleLogin };
