const { Router } = require("express");
const router = Router();
const { Genre } =  require('../models/Genres')

const { getGenresDb } = require("../controllers/genres.js");

router.get("/", async (_req, res) => {
  try {
    let allGenreDb = await getGenresDb();
    res.status(200).send(allGenreDb);
  } catch (error) {
    res.status(404).send(error);
  }
});

router.post("/", async (req, res) => {
  try {
    let { id, name } = req.body;
    await Genre.create({ id, name });
    res.status(200).send("CREATED");
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    await Genre.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
    console.log("Genre eliminated");
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
