const emailer = require("../services/emailer.js");

function sendEmail(user) {
    const userData = {
        email: user.email,
        userName: user.userName,
        type: "notifications",
      };
    emailer.sendMail(userData);
}

// sendEmail({email: "gonzales@hotmail.com", userName: "juanito"});

module.exports = { sendEmail }
