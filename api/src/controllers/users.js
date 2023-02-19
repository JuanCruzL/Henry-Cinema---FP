const { User } = require('../db');
const bcrypt = require("bcrypt");
const saltRound = 10;
const salt = bcrypt.genSaltSync(saltRound);
const { cloudinary } = require("../utils/cloudinary");

const getUsersDb = async () => {

    const allUsersDb = await User.findAll()
    return allUsersDb;
}

const postUsersDb = async (formData) => {
    const {
        userName,
        email,
        password,
        isAdministrator,
        image,
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
        // console.log(image);
        const result = await cloudinary.uploader.upload(image, {
            upload_preset: 'preset_hcinema',
        });
        console.log(result);
        const created = await User.create({ 
            userName: userNameCi,
            email: emailCi,
            password: hashPw, 
            isAdministrator,
            image: result.secure_url,
            image_id: result.public_id,
        });
        // console.log(created);

        return "User created successfully";
    }

    throw {
        status:false,
        message: 'Need to add all information',
    }
}

module.exports = {getUsersDb, postUsersDb};