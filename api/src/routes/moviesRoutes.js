const { Router } = require("express");
const axios = require("axios");
const { getMovies } = require("../controllers/movies");
//const { API_KEY } = process.env;
const router = Router();

router.get("/", async (req, res) => {
  const data = await getMovies();
  const { name } = req.query;
  if (name) {
    const movieName = data.filter((m) =>
      m.title.toLowerCase().includes(name.toLowerCase())
    );
    movieName.length
      ? res.status(200).send(movieName)
      : res.status(400).json({ error: "Movie does not exist" });
  } else {
    res.status(200).send(data);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    res.status(200).json(await controllers.getMovieById(id));
  } catch (error) {
    res.status(500).send(error);
  }
})

//
module.exports = router;
