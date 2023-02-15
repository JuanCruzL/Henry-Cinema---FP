import axios from "axios";

import {
  GET_MOVIES,
  SEARCH_MOVIE,
  GET_MOVIE_ID,
  GET_NEXT_RELEASES,
  CREATE_MOVIE,
  DELETE_MOVIE,
  GET_SCREENINGS,
  CREATE_SCREENING,
  DELETE_SCREENING,
  GET_FOODS,
  SEARCH_FOOD,
  CREATE_FOOD,
  DELETE_FOOD,
  GET_DRINKS,
  CREATE_DRINK,
  DELETE_DRINK,
  GET_COMBOS,
  CREATE_COMBO,
  DELETE_COMBO,
  REQUEST_GENRES2,
  AGE_CLASSIFICATION,
  GET_SEATS,
  GET_USERS,
  DELETE_USER,
  GET_REVIEWS,
  DELETE_REVIEW,
  GET_SALES,
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

export const searchMovie = (payload) => {
  return {
    type: SEARCH_MOVIE,
    payload,
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

export const getNextReleases = (id) => {
  try {
    return async (dispatch) => {
      let movieInfo = await axios.get(`/nextReleases`);
      return dispatch({
        type: GET_NEXT_RELEASES,
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

//SCREENINGS

export const getScreenings = () => {
  return (dispatch) => {
    axios
      .get(`/screenings`)
      .then((response) => {
        dispatch({
          type: GET_SCREENINGS,
          payload: response.data,
        });
        console.log(response.data);
      })
      .catch((error) => {
        console.log("error");
      });
  };
};

export function createScreening(newScreening) {
  console.log("SCREENING: ", newScreening);
  return async function () {
    try {
      const response = await axios.post("/screenings", newScreening);
      if (response.data === newScreening) {
        console.log(newScreening);
        return dispatch({ type: CREATE_SCREENING });
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export const deleteScreening = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.delete(`/screenings/${id}`);
      if (response.data === "The screening has been removed") {
        const allScreenings = await axios.get(`/screening`);
        return dispatch({
          type: DELETE_SCREENING,
          payload: allScreenings.data,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
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

export const searchFood = (payload) => {
  return {
    type: SEARCH_FOOD,
    payload,
  };
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

//DRINKS

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

export function createDrink(newDrink) {
  console.log("DRINK: ", newDrink);
  return async function () {
    try {
      const response = await axios.post("/drinks", newDrink);
      if (response.data === newDrink) {
        console.log(newDrink);
        return dispatch({ type: CREATE_DRINK });
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export const deleteDrink = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.delete(`/drinks/${id}`);
      if (response.data === "The drink has been removed") {
        const allDrinks = await axios.get(`/drinks`);
        return dispatch({ type: DELETE_DRINK, payload: allDrinks.data });
      }
    } catch (error) {
      console.log(error.message);
    }
  };
};

//COMBOS

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

export function createCombo(newCombo) {
  console.log("COMBO: ", newCombo);
  return async function () {
    try {
      const response = await axios.post("/combos", newCombo);
      if (response.data === newCombo) {
        console.log(newCombo);
        return dispatch({ type: CREATE_COMBO });
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export const deleteCombo = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.delete(`/combos/${id}`);
      if (response.data === "The combo has been removed") {
        const allCombos = await axios.get(`/combos`);
        return dispatch({ type: DELETE_COMBO, payload: allCombos.data });
      }
    } catch (error) {
      console.log(error.message);
    }
  };
};

// GENRES

export const requestGenres = () => {
  return {
    type: REQUEST_GENRES2,
  };
};

export const getGenres = () => {
  return async (dispatch) => {
    let dataGenres = await axios.get("/genres");
    return dispatch({
      type: "GET_GENRES_DB",
      payload: dataGenres.data,
    });
  };
};

// AGE CLASSIFICATION

export function AgeClassification() {
  return {
    type: AGE_CLASSIFICATION,
    payload,
  };
}

// SEATS

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

//USERS

export const getUsers = () => {
  return (dispatch) => {
    axios
      .get(`/users`)
      .then((response) => {
        dispatch({
          type: GET_USERS,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log("error");
      });
  };
};

export const deleteUser = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.delete(`/users/${id}`);
      if (response.data === "The user has been removed") {
        const allUsers = await axios.get(`/user`);
        return dispatch({ type: DELETE_USER, payload: allUsers.data });
      }
    } catch (error) {
      console.log(error.message);
    }
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

//REVIEWS

export const getReviews = () => {
  return (dispatch) => {
    axios
      .get(`/reviews`)
      .then((response) => {
        dispatch({
          type: GET_REVIEWS,
          payload: response.data,
        });
        console.log(response.data);
      })
      .catch((error) => {
        console.log("error");
      });
  };
};

export const deleteReview = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.delete(`/reviews/${id}`);
      if (response.data === "The review has been removed") {
        const allReviews = await axios.get(`/reviews`);
        return dispatch({
          type: DELETE_REVIEW,
          payload: allReviews.data,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };
};

//SALES

export const getSales = () => {
  return (dispatch) => {
    axios
      .get(`/sales`)
      .then((response) => {
        dispatch({
          type: GET_SALES,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log("error");
      });
  };
};

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
