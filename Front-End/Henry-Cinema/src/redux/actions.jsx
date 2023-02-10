import axios from "axios";
import {
  GET_MOVIES,
  GET_MOVIE_ID,
  GET_RELEASES,
  SEARCH_MOVIE,
  DELETE_MOVIE,
  AGE_CLASSIFICATION,
  GET_FOODS,
  GET_DRINKS,
  GET_COMBOS,
  REQUEST_GENRES,
  SEARCH_FOOD,
  GET_CURRENT_USER,
  LOGIN_OR_REGISTER_USER_WITH_GOOGLE,
} from "./actionTypes";

//MOVIES

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

export const getMovieById = (id) => {
  try {
    return async (dispatch) => {
      let movieInfo = await axios.get(`http://localhost:3001/movies/${id}`);
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
      let movieInfo = await axios.get(`http://localhost:3001/nextReleases`);
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
      const response = await axios.delete(`http://localhost:3001/movies/${id}`);
      if (response.data === "The movie has been removed") {
        const allMovies = await axios.get(`http://localhost:3001/movies`);
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
      let allFoodsData = await axios.get("http://localhost:3001/foods");
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
      let allDrinksData = await axios.get("http://localhost:3001/drinks");
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
      let allCombosData = await axios.get("http://localhost:3001/combos");
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
      console.log(payload)
      const userCreated = await axios.post("http://localhost:3001/users", payload);
      console.log(userCreated);
    }catch(e) {
      console.log(e)
    }
  }
}



//.............. 
export function iconNav(){
  return {
    type: "MODO",
  };
}











// action.js

// busca o crear al usuario en la base de datos con sus datos de google
export const logInUserWithGoogle = (response) => {
  return async (dispatch) => {
    try {
      const { email, given_name } = response;
      console.log(email, given_name);
      const userCreated = await axios.post(
        `http://localhost:3001/login/google`,
        { email, userName: given_name }
      );
      return dispatch({
        type: LOGIN_OR_REGISTER_USER_WITH_GOOGLE,
        payload: userCreated.data,
      });

    } catch (error) {
      console.log("el error de logInUserWithGoogle es:", error.message);
    }
  }
}










// actions.js







// busca en la base de datos al usuario y lo logea con su token faltaria navigates en el componente

export const logInUser = (email, password) => {
  if (!email && !password) {
    return console.log("Completa los campos para ingresar");
  }
  if (!email) {
    return console.log("Ingresa correo electronico");
  }

  if (!password) {
    return console.log("Ingresa tu contraseña");
  }

  try {
    return async (dispatch) => {
      const loginCredentials = await axios.post("http://localhost:3001/login",
        {email, password},
      );
      // console.log(loginCredentials.data);
      return dispatch({
        type: GET_CURRENT_USER,
        payload: loginCredentials.data,
      });
    }  
  } catch (error) {
    console.log(error);
  }
} 






