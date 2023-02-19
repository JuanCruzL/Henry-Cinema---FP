const { User } = require("../db");
const bcrypt = require("bcrypt");
const saltRound = 10;
const salt = bcrypt.genSaltSync(saltRound);
const { sendEmail } = require("../utils/sendEmail");
const registerToDb = async (formData) => {
    const {
        userName,
        email,
        password,
        notifications,
    } = formData;

    if ( userName && email && password && notifications) {
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

        const userRegister = await User.create({ 
            userName: userNameCi,
            email: emailCi,
            password: hashPw, 
            notifications
        });

        
        if (userRegister.notifications === true) {
            sendEmail(userRegister);
        }

        return "User created successfully";

  }

  throw {
    status: false,
    message: "Need to add all information",
  };
};

module.exports = { registerToDb };
