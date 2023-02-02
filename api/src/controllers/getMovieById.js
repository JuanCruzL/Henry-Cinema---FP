const axios = require("axios");
// const { API_KEY } = process.env;
// const { } = require("../db");
require("dotenv").config();

const getMovieById = async (id) => {

    const config = { headers: { "Accept-Encoding": null  } };
    let movieApiById = {};
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=12bc260a161636d41e2bc6dc6af19c99`, config);
    movieApiById = {
        title: data.title,
        origin: data.production_countries[0]?.name,
        genres: data.genres.map(g => g.name),
        overview: data.overview,
        status: data.status,
        productionCompanies: data.production_companies.map(pc => pc.name),
        adult: data.adult,
        voteAverage: data.vote_average,
        runtime: data.runtime,
    }

    return movieApiById;
}

module.exports = getMovieById;
