import { GET_MOVIES } from "../actions";

const initialState = {
  movieId: [],
  movies: [],
  allMovies: [],
  foods: [],
  drinks: [],
  combos: [],
  releases: [],// proximos estrenos
  searchMovies: [],// No Modificar esto sirve para el componente search
  uniqueGenres: [],
  topMovies: [],
  
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES: {
      return {
        ...state,
        movies: action.payload,
        allMovies: action.payload,
        searchMovies: action.payload,
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
        releases: action.payload,
      };
    case "SEARCH_MOVIE":
      const searchMoviesBar = state.searchMovies;
      const searchMoviesFound = searchMoviesBar.filter((m) => {
        return m.title.toLowerCase().includes(action.payload.toLowerCase());
      });
      return {
        ...state,
        movies: searchMoviesFound,
      };
    case "GET_FOODS":
      return {
        ...state,
        foods: action.payload,
      };
    case "GET_DRINKS":
      return {
        ...state,
        drinks: action.payload,
      };
    case "GET_COMBOS":
      return {
        ...state,
        combos: action.payload,
      };
        
      case "REQUEST_GENDERS":
      return {
        ...state,
        uniqueGenres: Array.from(new Set(
          state.allMovies.flatMap(movie => movie.genres)
        )),
      };
      case "REQUEST_TOP_MOVIES":
      return {
        ...state,
        topMovies: state.allMovies
          .sort((a, b) => b.voteAverage - a.voteAverage)
          .slice(0, 4),
      };
        
    default:
      return state;
  }
};

export default rootReducer;
