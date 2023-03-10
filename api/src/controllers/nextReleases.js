require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");

const getNextReleases = async () => {
  const config = { headers: { "Accept-Encoding": null } };
  const finalNextReleases = [];
  console.log(finalNextReleases);
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    config
  );
  const releasesArray = data.results;
  for (let i = 0; i < releasesArray.length; i++) {
    let nextRelease = {};
    if (releasesArray[i].poster_path != null) {
      const imageFromApi = releasesArray[i].poster_path;
      nextRelease.id = releasesArray[i].id;
      nextRelease.image = `https://image.tmdb.org/t/p/original/${imageFromApi}`;
      finalNextReleases.push(nextRelease);
    }
  }
  return finalNextReleases;
};

module.exports = { getNextReleases };
