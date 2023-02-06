import axios from "axios";
const AGE_CLASSIFICATION = "AGE_CLASSIFICATION";
export const GET_MOVIES = "GET_MOVIES";
export const GET_RELEASES = "GET_RELEASES";
export const REQUEST_GENDERS = 'REQUEST_GENDERS';
export const REQUEST_TOP_MOVIES = 'REQUEST_TOP_MOVIES';

export const getMovieById = (id) => {
  try {
    return async (dispatch) => {
      let movieInfo = await axios.get(`http://localhost:3001/movies/${id}`);
      return dispatch({
        type: "GET_MOVIE_ID",
        payload: movieInfo.data,
      });
    };
  } catch (e) {
    console.log(e);
  }
};

export const getRelease = (id) => {
  try {
    return async (dispatch) => {
      let movieInfo = await axios.get(`http://localhost:3001/nextReleases`);
      return dispatch({
        type: "GET_RELEASES",
        payload: movieInfo.data,
      });
    };
  } catch (e) {
    console.log(e);
  }
};

export function AgeClassification() {
  return {
    type: AGE_CLASSIFICATION,
    payload,
  };
}

export const getMovies = () => {
  return (dispatch) => {
    axios
      .get(`http://localhost:3001/movies`)
      .then((response) => {
        dispatch({
          type: GET_MOVIES,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log("error");
      });
  };
};

// Para el componente SearchBar
export const searchMovie = (payload) =>{
  return{
    type:"SEARCH_MOVIE",
    payload
  };
};
//  para filtrar los generos disponibles


export const requestGenders = () => {
  return {
    type: REQUEST_GENDERS,
  };
};

// actions.js

//filtra las 4 mejor rankeadas

// actions.js


export const requestTopMovies = () => {
  return {
    type: REQUEST_TOP_MOVIES,
  };
};



// actions.js


// actions.js








