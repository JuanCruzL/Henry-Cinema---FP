const { Router } = require("express");
const router = Router();
const { ACCESS_TOKEN } = process.env;

const mercadopago = require('mercadopago');

require("dotenv").config();
mercadopago.configure({
    access_token: ACCESS_TOKEN
});

router.post("/",async(req,res) =>{
 
    const prod = req.body;
    console.log(prod)
    let preference = {
        items: [{
            id: prod.id,
            title: prod.title,
            description: prod.description,
            unit_price : prod.price,
            quantity:prod.quantity,
        }],

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
        console.log(response)
        res.send('success')
      })
      .catch(function (error) {
        console.log(error);
      });
   
})

module.exports = router ;