const nodemailer = require("nodemailer");
const { configgmail } = require("../configs/mailerconfig"); //$ Config to send emails with gmail
// const { welcometemplate } = require("./templates/welcometemplate.js");

const template = (userdata) => {
  if (userdata.type === "signup") {
    return {
      from: '"Henry Cinema" <info@henrycinema.com>', // sender address
      to: `${userdata.email}`,
      subject: `Welcome to Henry Cinema!`, // Subject line
      // html: welcometemplate(userdata), //*
    };
  }
  
  //
};
const createTrans = () => {
  // Can config another email sender
  const transport = nodemailer.createTransport(configgmail); //$
  return transport;
};

const sendMail = async (userdata) => {
  const transporter = createTrans();
  const info = await transporter.sendMail(template(userdata));
  console.log("Message sent: %s", info.messageId);
  return;
};

module.exports = { sendMail };