require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
const { Movie } = require("../db");
const { getGenresDb } = require("./genres");

const getMovies = async() => {
  const ourMovies = Movie.findAll();
  return ourMovies;
}

const getMoviesApi = async () => {
  const config = { headers: { "Accept-Encoding": null } };
  const finalMovies = [];
  const resultP1 = await axios.get(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&region=US`,
    config
  );
  const resultsP1 = resultP1.data.results;
  const resultP2 = await axios.get(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=2&region=US`,
    config
  );
  const resultsP2 = resultP2.data.results;
  const resultP3 = await axios.get(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&region=AR`,
    config
  );
  const resultsP3 = resultP3.data.results;
  const resultsP3Filtered = resultsP3.filter(
    (m) => m.original_language === "es" && m.overview.length != 0
  );
  const allResults = [...resultsP1, ...resultsP2, ...resultsP3Filtered];

  const genresDb = await getGenresDb();
  for (let i = 0; i < allResults.length; i++) {
    const movie = {};
    const imageFromApi2 = allResults[i].backdrop_path;
    const imageFromApi = allResults[i].poster_path;
    const genresMovieIds = allResults[i].genre_ids;
    const genresString = [];
    for (let i = 0; i < genresMovieIds.length; i++) {
      for (let j = 0; j < genresDb.length; j++) {
        if (genresMovieIds[i] === genresDb[j].id) {
          let genre = genresDb[j].name;
          genresString.push(genre);
        }
      }
    }
    movie.apiId = allResults[i].id;
    movie.title = allResults[i].title;
    movie.imageVertical = `https://image.tmdb.org/t/p/original${imageFromApi}`;
    movie.imageHorizontal = `https://image.tmdb.org/t/p/original${imageFromApi2}`;
    movie.voteAverage = allResults[i].vote_average;
    movie.overview = allResults[i].overview;
    movie.genres = genresString;
    if (allResults[i].adult === true) {
      movie.classification = "Restricted";
    } else {
      movie.classification = "General Audiences";
    }
    if (allResults[i].original_language === "es") {
      movie.originalLanguage = "es";
    }
    finalMovies.push(movie);
  }

  finalMovies.forEach((m) => {
    Movie.findOrCreate({
      where: {
        title: m.title,
      },
      defaults: {
        title: m.title,
        imageVertical: m.imageVertical,
        imageHorizontal: m.imageHorizontal,
        voteAverage: m.voteAverage,
        overview: m.overview,
        genres: m.genres,
        classification: "G",
        apiId: m.apiId,
      },
    });
  });

  const moviesDb = await Movie.findAll();
  return moviesDb;
};

const getMovieById = async (id) => {
  // verify if id its a real number.
  // ie: id: 12665.
  if (
    id.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i)
  ) {
    const recipeDbById = await Movie.findOne({
      where: {
        id: id,
      },
    });

    return recipeDbById;
  }

  if (!isNaN(id)) {
    const config = { headers: { "Accept-Encoding": null } };
    let movieApiById = {};
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`,
      config
    );
    const reviewApi = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
      config
    );
    const videos = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`,
      config
    );
    const imageFromApi = data.poster_path;
    const imageFromApi2 = data.backdrop_path;
    const reviewApiResults = reviewApi.data.results;
    const videosApiResults = videos.data.results;
    let trailerKey = null;
    for (i = 0; i < videosApiResults.length; i++) {
      if (
        videosApiResults[i].name === "Official Trailer" ||
        videosApiResults[i].name === "official trailer"
      ) {
        trailerKey = videosApiResults[i].key;
      }
    }

    if (trailerKey === null) {
      trailerKey = videosApiResults[0]?.key;
    }

    const classificationAdapted = () => {
      if (data.adult === true) {
        movieApiById.classification = "Restricted";
      } else {
        movieApiById.classification = "General Audiences";
      }
    };
    movieApiById = {
      title: data.title,
      origin: data.production_countries[0]?.name,
      review: reviewApiResults.map((r) => r.content),
      imageVertical: `https://image.tmdb.org/t/p/original${imageFromApi}`,
      imageHorizontal: `https://image.tmdb.org/t/p/original${imageFromApi2}`,
      genres: data.genres.map((g) => g.name),
      overview: data.overview,
      status: data.status,
      productionCompanies: data.production_companies.map((pc) => pc.name),
      voteAverage: data.vote_average,
      runtime: data.runtime,
      video: `https://www.youtube.com/embed/${trailerKey}`,
    };
    classificationAdapted();
    return movieApiById;
  }

  // if it's not a real number, then search on the DB
  // i.e: id: 78b8496d-357a-4b15-8fda-e99563df8c61 ( UUIDV4 )
  // to search for movies posted by admin in db
};


module.exports = { getMovies, getMovieById };
