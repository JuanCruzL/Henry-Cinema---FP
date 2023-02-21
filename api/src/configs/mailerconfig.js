const dotenv = require("dotenv");
dotenv.config();

const configGmail = {                                   // Configuration to use with GMAIL
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user:process.env.EMAIL_TEST,
      pass:process.env.EMAIL_TEST_PSWD, 
    },
  };

const configMailTrap =  {
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.EMAIL_TRAP,
    pass: process.env.EMAIL_TRAP_PSWD,
  }
}

  module.exports = { configGmail, configMailTrap };