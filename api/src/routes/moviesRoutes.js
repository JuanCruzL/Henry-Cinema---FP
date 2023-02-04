const { Router } = require("express");
const { Movie } = require("../models/Movie");
const { getMovies, getMovieById, getNextReleases } = require("../controllers/movies");
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
    let movieFound = await getMovieById(id);
    res.status(200).send(movieFound);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/nextReleases', async (req, res) => {
  const data = await getNextReleases();
  if (data) {
    res.status(200).send(data);
  } else {
    res.status(500).send(error);
  };
});

router.post("/", async (req, res) => {
  try {
    
    let {
      title,
      image,
      voteAvergae,
      overview,
      status,
      productionCompanies,
      runtime,
      origin,
      genres,
      directors,
      actors,
      video,
      classification,
      distributor,
    } = req.body;

    await Movie.create({
      title,
      image,
      voteAvergae,
      overview,
      status,
      productionCompanies,
      runtime,
      origin,
      genres,
      directors,
      actors,
      video,
      classification,
      distributor,
    });
    
    res.status(200).send("MOVIE CREATED");
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    await Movie.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
    console.log("MOVIE ELIMINATED");
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
