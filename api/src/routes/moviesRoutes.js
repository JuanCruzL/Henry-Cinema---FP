const { Router } = require("express");
const axios = require("axios");
const { API_KEY } = process.env;
const router = Router();


router.get('/', async (req, res) => {
    
    const config = { headers: { "Accept-Encoding": null } };
    const finalMovies = [];
    const data = await axios.get(
        `https://api.themoviedb.org/3/movie/latest?api_key=${API_KEY}&language=en-US`,
        config
    );
    const results = data.results;
    const genresApi = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
    );
    for ( let i = 0; i < results.length; i++ ) {
        const movie = {};
        const imageFromApi = results[i].backdrop_path;
        const genresMovieIds = results[i].genre_ids;
        const genresString = [];
        for ( let i = 0; i < genresMovieIds.length; i++) {
            for ( let j = 0; j < genresApi.length; j++) {
                if ( genresMovieIds[i] === genresApi[j].id ) {
                    let genre = genresApi[j].name;
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
        if ( results[i].adult === true ) {
            movie.classification = 'Restricted';
        } else {
            movie.classification = 'General Audiences'
        }
        finalMovies.push(movie);  
    }
    return finalMovies;
});

//.

module.exports = router;