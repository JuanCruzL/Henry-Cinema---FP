/* developer */
const { Router } = require("express");
const { Drink } = require("../db");
const router = Router();

/* Controllers */
const { getDrinkDb } = require("../controllers/drinks.js");

/* routes */

router.get("/", async (_req, res) => {
  let allDrinkDb = await getDrinkDb();
  try {
    res.status(200).send(allDrinkDb);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.post("/", async (req, res) => {
  try {
    let { name, price, image } = req.body;
    await Drink.create({
      name,
      price,
      image,
    });
    res.status(200).send("CREATED");
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    await Drink.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
    console.log("eliminado");
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
