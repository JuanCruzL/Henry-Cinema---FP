const nodemailer = require("nodemailer");
const { configGmail, configMailTrap } = require("../configs/mailerconfig"); //$ Config to send emails with gmail
const { notificationsTemplate } = require("./templates/notificationsTemplate");
const { registrationTemplate } = require("./templates/registrationTemplate");

const template = (userData) => {
  if (userData.type === "registration") {
    return {
      from: '"Henry Cinema" <info@henrycinema.com>', // sender address
      to: `${userData.email}`,
      subject: `Welcome to Henry Cinema!`, // Subject line
      html: registrationTemplate(userData), //*
    };
  }

  if (userData.type === "notifications") {
    return {
      from: '"Henry Cinema" <info@henrycinema.com>', // sender address
      to: `${userData.email}`,
      subject: `Welcome to Henry Cinema!`, // Subject line
      html: notificationsTemplate(userData), //*
    };
  }
  
  //
};
const createTrans = () => {
  // Can config another email sender
  const transport = nodemailer.createTransport(configGmail); //$
  return transport;
};

const sendMail = async (userData) => {
  const transporter = createTrans();
  const info = await transporter.sendMail(template(userData));
  console.log("Message sent: %s", info.messageId);
  return;
};

module.exports = { sendMail };