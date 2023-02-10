import axios from "axios";
const AGE_CLASSIFICATION = "AGE_CLASSIFICATION";
export const GET_MOVIES = "GET_MOVIES";
export const GET_RELEASES = "GET_RELEASES";
export const REQUEST_GENDERS = "REQUEST_GENDERS";
export const GET_SEATS = "GET_SEATS";
import {
  GET_MOVIE_ID,
  SEARCH_MOVIE,
  DELETE_MOVIE,
  GET_FOODS,
  GET_DRINKS,
  GET_COMBOS,
  REQUEST_GENRES,
  SEARCH_FOOD,
} from "./actionTypes";

<<<<<<< HEAD
=======
axios.defaults.baseURL = "http://localhost:3001"
//axios.defaults.baseURL = "https://henry-cinema-fp-production.up.railway.app/"

>>>>>>> edc5883d7d46c9b93f7d359b3a7ed1d51d4351f2
//MOVIES

export const getMovies = () => {
  return (dispatch) => {
    axios
      .get(`/movies`)
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

export const getMovieById = (id) => {
  try {
    return async (dispatch) => {
      let movieInfo = await axios.get(`/movies/${id}`);
      return dispatch({
        type: GET_MOVIE_ID,
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
      let movieInfo = await axios.get(`/nextReleases`);
      return dispatch({
        type: GET_RELEASES,
        payload: movieInfo.data,
      });
    };
  } catch (e) {
    console.log(e);
  }
};

export const deleteMovie = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.delete(`/movies/${id}`);
      if (response.data === "The movie has been removed") {
        const allMovies = await axios.get(`/movies`);
        return dispatch({ type: DELETE_MOVIE, payload: allMovies.data });
      }
    } catch (error) {
      console.log(error.message);
    }
  };
};

export function AgeClassification() {
  return {
    type: AGE_CLASSIFICATION,
    payload,
  };
}

export const searchMovie = (payload) => {
  return {
    type: SEARCH_MOVIE,
    payload,
  };
};

//FOOD & DRINKS

export const getFoods = () => {
  try {
    return async (dispatch) => {
      let allFoodsData = await axios.get("/foods");
      return dispatch({
        type: GET_FOODS,
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
      let allDrinksData = await axios.get("/drinks");
      return dispatch({
        type: GET_DRINKS,
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
      let allCombosData = await axios.get("/combos");
      return dispatch({
        type: GET_COMBOS,
        payload: allCombosData.data,
      });
    };
  } catch (error) {
    console.error(error);
  }
};

export const searchFood = (payload) => {
  return {
    type: SEARCH_FOOD,
    payload,
  };
};

// actions.js
export const getasientos = () => {
  return (dispatch) => {
    axios
      .get(`/seats`)
      .then((response) => {
        dispatch({
          type: GET_SEATS,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log("error");
      });
  };
};

// actions.js

//GENRES

export const requestGenders = () => {
  return {
    type: REQUEST_GENRES,
  };
};

// crea el usuario y lo guarda en la base de datos
export const signUp = (payload) => {
  return async (dispatch) => {
    try {
<<<<<<< HEAD
      console.log(payload);
      const userCreated = await axios.post(
        "http://localhost:3001/users",
        payload
      );
=======
      console.log(payload)
      const userCreated = await axios.post("/users", payload);
>>>>>>> edc5883d7d46c9b93f7d359b3a7ed1d51d4351f2
      console.log(userCreated);
    } catch (e) {
      console.log(e);
    }
  };
};

// action.js

// busca o crear al usuario en la base de datos con sus datos de google
export const logInUserWithGoogle = (response) => {
  return async (dispatch) => {
    try {
      const { email, givenName } = response.profileObj;
      const userCreated = await axios.post(
        `/login/google`,
        { email, userName: givenName }
      );
      console.log(userCreated.data);
      return dispatch({
        type: "POST_USER_WITH_GOOGLE",
        payload: userCreated.data,
      });
    } catch (error) {
      console.log("el error de logInUserWithGoogle es:", error.message);
    }
  };
};

// actions.js

// busca en la base de datos al usuario y lo logea con su token faltaria navigates en el componente

export const logInUser = (email, password) => {
  if (!email && !password) {
    return message.warn("Completa los campos para ingresar");
  }
  if (!email) {
    return message.warn("Ingresa correo electronico");
  }

  if (!password) {
    return message.warn("Ingresa tu contraseña");
  }

  try {
    return async (dispatch) => {
<<<<<<< HEAD
      const loginCredentials = await axios.post("http://localhost:3001/login", {
        email,
        password,
      });
=======
      const loginCredentials = await axios.post("/login",
        {email, password},
      );
>>>>>>> edc5883d7d46c9b93f7d359b3a7ed1d51d4351f2
      console.log(loginCredentials.data);
      return dispatch({
        type: "GET_CURRENT_USER",
        payload: loginCredentials.data,
      });
    };
  } catch (error) {
    console.log(error);
  }
};
