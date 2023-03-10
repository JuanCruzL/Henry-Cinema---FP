const { Router } = require("express");
const { Movie } = require("../db");
const { getMovies, getMovieById } = require("../controllers/movies");
const { cloudinary } = require("../utils/cloudinary");
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


router.post("/", async (req, res) => {
  const {
    title,
    imageVertical,
    imageHorizontal,
    voteAverage,
    overview,
    status,
    productionCompanies,
    originalLanguage,
    runtime,
    genres,
    directors,
    video,
    classification,
  } = req.body;

  try {
    console.log(voteAverage)
    // let number = Number(voteAverage)

    const resultV = await cloudinary.uploader.upload(imageVertical, {
      upload_preset: 'preset_hcinema',
    });
    const resultH = await cloudinary.uploader.upload(imageHorizontal, {
      upload_preset: 'preset_hcinema',
    });

    const newMovie = await Movie.create({
      title,
      imageVertical: resultV.secure_url,
      imageVertical_id: resultV.public_id,
      imageHorizontal: resultH.secure_url,
      imageHorizontal_id: resultH.public_id,
      voteAverage,
      overview,
      status,
      productionCompanies,
      originalLanguage,
      runtime,
      genres,
      directors,
      video,
      classification,
    });
    
    res.status(200).send(newMovie);
    console.log(newMovie);
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
    res.status(204).send("The movie has been removed");
    console.log("MOVIE REMOVED");
  } catch (error) {
    res.status(500).send(error);
  }
});



router.put("/", async (req, res) => {
  //const {id,name,priority,description} = req.body
  const movieUp =  await Movie.findOne({
    where:{
      title: "M3GAN"
    }
  })
  //movieUp.name = name,
  //movieUp.priority = priority
   movieUp.classification = "R"
   await movieUp.save()
  res.status(200).send('Updated movie')
})

module.exports = router;