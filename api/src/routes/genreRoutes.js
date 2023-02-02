const { Router } = require("express");
const router = Router();

const { getGenreDb } = require("../controllers/genres.js");

router.get("/", async (_req, res) => {
  try {
    let allGenreDb = await getGenreDb();
    res.status(200).send(allGenreDb);
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = router;
