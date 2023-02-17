const emailer = require("../services/emailer.js");

function sendEmail(user) {
    const userData = {
        email: user.email,
        username: user.username,
        type: "register",
      };
    emailer.sendMail(userData);
}

module.exports = { sendEmail }
