/* developer */

const { Router } = require("express");
const { Auditorium } = require("../db");
const router = Router();

/* Controllers */

const { getAuditoriumsDb } = require("../controllers/auditoriums");

/* routes */

router.get("/", async (req, res) => {
  let allAuditoriumsDb = await getAuditoriumsDb();
  try {
    res.status(200).send(allAuditoriumsDb);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.post("/", async (req, res) => {
  try {
    let { name } = req.body;
    await Auditorium.create({ name });
    res.status(200).send("CREATED");
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    await Auditorium.destroy({
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