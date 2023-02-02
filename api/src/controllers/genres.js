const axios = require('axios');
const { Genre } = require('../db');

const getGenreDb = async() =>{
    let apiGenre = 'https://api.themoviedb.org/3/genre/movie/list?api_key=12bc260a161636d41e2bc6dc6af19c99&language=en-US'

    let apiInfo = ((await axios.get(apiGenre)).data).genres;

    apiInfo.forEach(e => {
        Genre.findOrCreate({
            where:{
                id:e.id
            },
            defaults:{
                name:e.name
            }
        })
    });

    const genreCreateDb = await Genre.findAll();
    return genreCreateDb;
}

module.exports = { getGenreDb };