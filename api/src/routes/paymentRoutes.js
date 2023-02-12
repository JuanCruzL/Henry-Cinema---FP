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
    let preference = {
        items: [{
            id: prod.id,
            title: prod.title,
            description: prod.description,
            quantity:prod.quantity,
            unit_price : prod.price
        }],

        back_urls: {
            success: 'http://localhost:3001/success',
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