const axios = require("axios");
require("dotenv").config();

const getMovies = async () => {
  const config = { headers: { "Accept-Encoding": null } };
  const finalMovies = [];
  const result = await axios.get(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=12bc260a161636d41e2bc6dc6af19c99&language=en-US&page=1&region=US",
    config
  );
  const results = result.data.results;
  const genresApi = await axios.get(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=12bc260a161636d41e2bc6dc6af19c99&language=en-US",
    config
  );
  const genresApiData = genresApi.data.genres;
  for (let i = 0; i < results.length; i++) {
    const movie = {};
    const imageFromApi = results[i].backdrop_path;
    const genresMovieIds = results[i].genre_ids;
    const genresString = [];
    for (let i = 0; i < genresMovieIds.length; i++) {
      for (let j = 0; j < genresApiData.length; j++) {
        if (genresMovieIds[i] === genresApiData[j].id) {
          let genre = genresApiData[j].name;
          genresString.push(genre);
        }
      }
    }
    movie.id = results[i].id;
    movie.title = results[i].title;
    movie.image = `https://image.tmdb.org/t/p/w500/${imageFromApi}`;
    movie.score = results[i].vote_average;
    movie.overview = results[i].overview;
    movie.genre = genresString;
    if (results[i].adult === true) {
      movie.classification = "Restricted";
    } else {
      movie.classification = "General Audiences";
    }
    finalMovies.push(movie);
    console.log(finalMovies);
  }
  return finalMovies;
};

const getMovieById = async (id) => {
  const config = { headers: { "Accept-Encoding": null } };
  let movieApiById = {};
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=12bc260a161636d41e2bc6dc6af19c99`,
    config
  );
  const reviewApi = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=12bc260a161636d41e2bc6dc6af19c99&language=en-US&page=1`,
    config
  );
  const imageFromApi = data.poster_path;
  const reviewApiResults = reviewApi.data.results;
  movieApiById = {
    title: data.title,
    origin: data.production_countries[0]?.name,
    review: reviewApiResults.map((r) => r.content),
    image: `https://image.tmdb.org/t/p/w500${imageFromApi}`,
    genres: data.genres.map((g) => g.name),
    overview: data.overview,
    status: data.status,
    productionCompanies: data.production_companies.map((pc) => pc.name),
    adult: data.adult,
    voteAverage: data.vote_average,
    runtime: data.runtime,
  };

  return movieApiById;
};

module.exports = { getMovies, getMovieById };
