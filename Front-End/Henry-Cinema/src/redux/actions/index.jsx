import axios from "axios";
const AGE_CLASSIFICATION = "AGE_CLASSIFICATION";
export const GET_MOVIES = "GET_MOVIES";
export const GET_RELEASES = "GET_RELEASES";
export const REQUEST_GENDERS = 'REQUEST_GENDERS';

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
export const searchMovie = (payload) => {
  return {
    type: "SEARCH_MOVIE",
    payload,
  };
};
// Para buscar comidas 
export const searchFood = (payload) => {
  return {
    type: "SEARCH_FOOD",
    payload,
  };
};

//Traer Foods and DrINKS

export const getFoods = () => {
  try {
    return async (dispatch) => {
      let allFoodsData = await axios.get("http://localhost:3001/foods");
      return dispatch({
        type: "GET_FOODS",
        payload: allFoodsData.data,
      });
    };
  } catch (error) {
    console.error(error);
  }
};

export const getDrinks = () => {
  try {
    return async (dispatch) => {
      let allDrinksData = await axios.get("http://localhost:3001/drinks");
      return dispatch({
        type: "GET_DRINKS",
        payload: allDrinksData.data,
      });
    };
  } catch (error) {
    console.error(error);
  }
};

export const getCombos = () => {
  try {
    return async (dispatch) => {
      let allCombosData = await axios.get("http://localhost:3001/combos");
      return dispatch({
        type: "GET_COMBOS",
        payload: allCombosData.data,
      });
    };
  } catch (error) {
    console.error(error);
  }
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





const signUp = (payload) => {
  return async (dispatch) => {
    try {
      console.log(payload)
      const json = await axios.post("http://localhost:3001/", payload);
    }catch(e) {
      console.log(e)
    }
  }
}











