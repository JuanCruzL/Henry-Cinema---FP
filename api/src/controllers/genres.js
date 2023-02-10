const axios = require('axios');
const { Genre } = require('../db');
const { API_KEY } = process.env;

const getGenresDb = async() =>{
    let apiGenre = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;

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

    const genresDb = await Genre.findAll();
    return genresDb;
}

module.exports = { getGenresDb };