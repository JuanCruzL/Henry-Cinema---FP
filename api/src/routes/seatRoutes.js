/* developer */

const { Router } = require("express");
const { Seat } = require("../db");
const router = Router();

/* Controllers */

const { getSeatsDb } = require("../controllers/seats");

/* routes */

router.get("/", async (req, res) => {
  let allSeatsDb = await getSeatsDb();
  try {
    res.status(200).send(allSeatsDb);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.post("/", async (req, res) => {
  try {
    let { row, number } = req.body;
    await Seat.create({ row, number });
    res.status(200).send("CREATED");
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    await Seat.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
    console.log("ELIMINATED");
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;