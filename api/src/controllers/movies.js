require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
const { Movie } = require("../db");
const { getGenresDb } = require('./genres');


const getMovies = async () => {
  const config = { headers: { "Accept-Encoding": null } };
  const finalMovies = [];
  const result = await axios.get(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&region=US`,
    config
  );
  const results = result.data.results;
  const genresDb = await getGenresDb();
  for (let i = 0; i < results.length; i++) {
    const movie = {};
    const imageFromApi = results[i].poster_path;
    const genresMovieIds = results[i].genre_ids;
    const genresString = [];
    for (let i = 0; i < genresMovieIds.length; i++) {
      for (let j = 0; j < genresDb.length; j++) {
        if (genresMovieIds[i] === genresDb[j].id) {
          let genre = genresDb[j].name;
          genresString.push(genre);
        }
      }
    }
    movie.apiId = results[i].id;
    movie.title = results[i].title;
    movie.image = `https://image.tmdb.org/t/p/w500${imageFromApi}`;
    movie.voteAverage = results[i].vote_average;
    movie.overview = results[i].overview;
    movie.genres = genresString;
    if (results[i].adult === true) {
      movie.classification = "Restricted";
    } else {
      movie.classification = "General Audiences";
    }
    finalMovies.push(movie);
  };

  finalMovies.forEach((m) => {
    Movie.findOrCreate({
      where: {
        title: m.title,
      },
      defaults: {
        title: m.title,
        image: m.image,
        voteAverage: m.voteAverage,
        overview: m.overview,
        genres: m.genres,
        classification: m.classification,
        apiId: m.apiId,
      }
    });
  });

  const moviesDb = await Movie.findAll();
  return moviesDb;
};

const getMovieById = async (id) => {

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
  const reviewApiResults = reviewApi.data.results;
  const videosApiResults = videos.data.results;
  const trailerKey = videosApiResults[0]?.key;
  console.log(trailerKey);
  const classificationAdapted = () => {
    if(data.adult === true) {
      movieApiById.classification = 'Restricted';
    } else {
      movieApiById.classification = "General Audiences";
    }
  };
  movieApiById = {
    title: data.title,
    origin: data.production_countries[0]?.name,
    review: reviewApiResults.map((r) => r.content),
    image: `https://image.tmdb.org/t/p/w500${imageFromApi}`,
    genres: data.genres.map((g) => g.name),
    overview: data.overview,
    status: data.status,
    productionCompanies: data.production_companies.map((pc) => pc.name),
    voteAverage: data.vote_average,
    runtime: data.runtime,
    video: `https://www.youtube.com/embed/${trailerKey}`,
  };
  classificationAdapted();
  console.log(movieApiById);
  return movieApiById;
};



module.exports = { getMovies, getMovieById };
