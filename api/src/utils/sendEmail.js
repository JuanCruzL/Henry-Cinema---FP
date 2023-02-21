const emailer = require("../services/emailer.js");

function sendEmail(user) {

    if(user.notifications === true) {
      const userData = {
          email: user.email,
          userName: user.userName,
          type: "notifications",
        };
      emailer.sendMail(userData);
    } else {
      const userData = {
        email: user.email,
        userName: user.userName,
        type: "registration",
      }
      emailer.sendMail(userData);
    }
}

// sendEmail({email: "gonzales@hotmail.com", userName: "juanito"});

module.exports = { sendEmail }
