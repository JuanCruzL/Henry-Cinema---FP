const configGmail = {                                   // Configuration to use with GMAIL
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "henrycinema@gmail.com", 
      pass: "???", 
    },
  };

const configMailTrap =  {
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "c013096ef5a0f3",
    pass: "0848cd0dd7e3ef",
  }
}

  module.exports = { configGmail, configMailTrap };