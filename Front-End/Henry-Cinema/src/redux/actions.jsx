import axios from "axios";

import {
  GET_MOVIES,
  GET_RELEASES,
  GET_MOVIE_ID,
  SEARCH_MOVIE,
  DELETE_MOVIE,
  GET_FOODS,
  CREATE_FOOD,
  GET_DRINKS,
  GET_COMBOS,
  REQUEST_GENRES2,
  GET_SEATS,
  SEARCH_FOOD,
  CREATE_MOVIE,
  AGE_CLASSIFICATION,
  DELETE_FOOD,
} from "./actionTypes";

//axios.defaults.baseURL = "http://localhost:3001";
axios.defaults.baseURL = "https://henry-cinema-fp-production.up.railway.app/";

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

export function createMovie(newMovie) {
  console.log("MOVIE: ", newMovie);
  return async function () {
    try {
      const response = await axios.post("/movies", newMovie);
      if (response.data === newMovie) {
        console.log(newMovie);
        return dispatch({ type: CREATE_MOVIE });
      }
    } catch (error) {
      console.log(error);
    }
  };
}

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

export function createFood(newFood) {
  console.log("FOOD: ", newFood);
  return async function () {
    try {
      const response = await axios.post("/foods", newFood);
      if (response.data === newFood) {
        console.log(newFood);
        return dispatch({ type: CREATE_FOOD });
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export const deleteFoods = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.delete(`/foods/${id}`);
      if (response.data === "The food has been removed") {
        const allFoods = await axios.get(`/foods`);
        return dispatch({ type: DELETE_FOOD, payload: allFoods.data });
      }
    } catch (error) {
      console.log(error.message);
    }
  };
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

export const requestGenres = () => {
  return {
    type: REQUEST_GENRES2,
  };
};

export const getGenres = () => {
  return async (dispatch) => {
    let dataGenres = await axios.get("http://localhost:3001/genres");
    return dispatch({
      type: "GET_GENRES_DB",
      payload: dataGenres.data,
    });
  };
};

// crea el usuario y lo guarda en la base de datos
export const signUp = (payload) => {
  return async (dispatch) => {
    try {
      console.log(payload);
      const userCreated = await axios.post("/users", payload);
      alert("User register successfully!");
    } catch (e) {
      alert("Could not register, error!");
      console.log(e);
    }
  };
};

// action.js

// busca o crear al usuario en la base de datos con sus datos de google
export const logInUserWithGoogle = (response) => {
  return async (dispatch) => {
    try {
      const { email, given_name } = response;
      const userCreated = await axios.post(`/login/google`, {
        email,
        userName: given_name,
      });
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
      const loginCredentials = await axios.post("/login", { email, password });
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
