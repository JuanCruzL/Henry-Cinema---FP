const initialState = {
  movies: [],
<<<<<<< HEAD
  movieId: [],
=======
  allMovies: [],
>>>>>>> e2e36ab95f6ed565ac791a80c0ad095eafc2658c
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_MOVIES": {
      return {
        ...state,
<<<<<<< HEAD
        movies:  action.payload,
      };
    }
    case "GET_MOVIE_ID":
      return {
        ...state,
        movieId: action.payload
      }
=======
        movies: [...action, payload],
        allMovies:[...action, payload]
      };
    }
    case "AGE_CLASSIFICATION":
      const allM= state.allMovies;
      const age_classification =allM.filter(data =>data.classification===payload)
     return{
        ...state,
        movies:age_classification
     }
>>>>>>> e2e36ab95f6ed565ac791a80c0ad095eafc2658c
    default:
      return state;
  }
};

export default rootReducer;
