/* developer */
const { Router } = require("express");
const { Food } = require("../db");
const router = Router();

/* Controllers */
const { getFoodDb } = require("../controllers/food.js");

/* routes */

router.get("/", async (_req, res) => {
  let allFoodDb = await getFoodDb();
  try {
    res.status(200).send(allFoodDb);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.post("/", async (req, res) => {
  let { name, price, image } = req.body;
  try {
     await Food.create({
      name,
      price,
      image,
    });
    res.status(200).send('CREATED');
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    await Food.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204)
    console.log("eliminado")
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
