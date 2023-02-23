const { Router } = require("express");
const { Screening } = require("../db");
const router = Router();
const { ACCESS_TOKEN } = process.env;

const mercadopago = require("mercadopago");
require("dotenv").config();
mercadopago.configure({
  access_token: ACCESS_TOKEN,
});
// router.put("/success", async (req, res) => {
//   const { id, ids } = req.body;
//   console.log(req.body);
//   console.log(ids);
//   res.send("success");
// });

router.put("/succes", async (req, res) => {
  console.log(req.body[0].id);
  console.log(req.body[0].ids);
  const screeningId = req.body[0].id;
  const seatsToModify = req.body[0].ids;
  // console.log(screeningId);
  console.log(req.body);

  try {
    // Buscamos la proyección por su ID
    const screening = await Screening.findByPk(screeningId);

    // Actualizamos los asientos que se deben modificar
    screening.seats = screening.seats.map((seat) => {
      if (seatsToModify.includes(seat.id)) {
        return {
          ...seat,
          payed: true,
        };
      }
      return seat;
    });

    // Guardamos los cambios en la base de datos
    await screening.save();

    res.status(200).json({ message: "Asientos actualizados correctamente" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Ocurrió un error al actualizar los asientos" });
  }
});

router.post("/", async (req, res) => {
  const products = req.body;
  console.log(products);
  const items = products.map((product) => ({
    title: product.name,
    unit_price: product.price,
    quantity: product.quantity,
  }));

  let preference = {
    items: items,

    back_urls: {
      success: "http://localhost:5173/succes/payment",
      failure: "",
      pending: "",
    },
    auto_return: "approved",
    binary_mode: true,
  };
  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      console.log(response.body.init_point);
      res.send(response.body.init_point);
      console.log("succes");
    })
    .catch(function (error) {
      console.log(error);
    });
});

module.exports = router;
