import { GET_MOVIES } from "../actions";

const initialState = {
  movieId: [],
  movies: [],
  allMovies: [],
  releases: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES: {
      return {
        ...state,
        movies: action.payload,
        allMovies: action.payload,
      };
    }
    case "AGE_CLASSIFICATION":
      const allM = state.allMovies;
      const age_classification = allM.filter(
        (data) => data.classification === payload
      );
      return {
        ...state,
        movies: age_classification,
      };
    case "GET_MOVIE_ID":
      return {
        ...state,
        movieId: action.payload,
      };
      case "GET_RELEASES":
      return {
        ...state,
        releases : action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
