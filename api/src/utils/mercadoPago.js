const mercadopago = require("mercadopago");
require("dotenv").config();

mercadopago.configure({
  acces_token: process.env.ACCESS_TOKEN,
});

module.exports = {
  mercadopago,
};
