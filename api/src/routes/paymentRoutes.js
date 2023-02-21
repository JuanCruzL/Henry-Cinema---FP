const { Router } = require("express");
const router = Router();
const { ACCESS_TOKEN } = process.env;

const mercadopago = require('mercadopago');

require("dotenv").config();
mercadopago.configure({
    access_token: ACCESS_TOKEN
});

router.post("/",async(req,res) =>{
 
    const products = req.body;
    console.log(products)
    const items = products.map((product) => ({
        title: product.name,
        unit_price: product.price,
        quantity: product.quantity,
      }));

    let preference = {
        items:items,

        back_urls: {
            success: 'http://localhost:5173/',
            failure:'',
            pending:''
        },
        auto_return : 'approved',
        binary_mode: true
    }
    mercadopago.preferences
    .create(preference)
    .then(function (response) {
        console.log(response.body.init_point)
        res.status(200).send(response.body.init_point)
      })
      .catch(function (error) {
        console.log(error);
      });
   
})

module.exports = router ;