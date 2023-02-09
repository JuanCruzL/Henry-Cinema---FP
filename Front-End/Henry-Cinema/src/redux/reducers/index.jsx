import { GET_MOVIES } from "../actions";

const initialState = {
  movieId: [],
  movies: [],
  allMovies: [],
  uniqueGenres: [],
  topMovies: [],
  // Proximos estrenos
  releases: [],
  // Componente search
  searchMovies: [],
  //Para el componente Foods
  foods: [],
  copyFoods:[],
  drinks: [],
  copyDrinks:[],
  combos: [],
  copyCombos:[],
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
      const searchMoviesBar = state.allMovies;
      const searchMoviesFound = searchMoviesBar.filter((m) => {
        return m.title.toLowerCase().includes(action.payload.toLowerCase());
      });

      
      
      return {
        ...state,
        searchMovies: searchMoviesFound.length>0? 
          searchMoviesFound:
          [{
            imageVertical: "https://img.freepik.com/vector-premium/pagina-inicio-error-404-archivo-diseno-plano_249405-162.jpg?w=2000",
            apiId:"Error"
          }]
        ,
      };
      //Componente Foods
    case "GET_FOODS":
      return {
        ...state,
        foods: action.payload,
        copyFoods: action.payload,
      };
    case "GET_DRINKS":
      return {
        ...state,
        drinks: action.payload,
        copyDrinks: action.payload,
      };
    case "GET_COMBOS":
      return {
        ...state,
        combos: action.payload,
        copyCombos: action.payload,
      };
    case "SEARCH_FOOD":
      const searchCombos = state.copyCombos;
      const searchDrinks= state.copyDrinks;
      const searchFoods= state.copyFoods;
      const combosFound = searchCombos.filter((c) => {
        return c.name.toLowerCase().includes(action.payload.toLowerCase());
      });
      const drinksFound = searchDrinks.filter((d) => {
        return d.name.toLowerCase().includes(action.payload.toLowerCase());
      });
      const foodsFound= searchFoods.filter((f) => {
        return f.name.toLowerCase().includes(action.payload.toLowerCase());
      });
      return{
        ...state,
        combos:combosFound,
        drinks:drinksFound,
        foods:foodsFound
      };

    case "REQUEST_GENDERS":
      return {
        ...state,
        uniqueGenres: Array.from(new Set(
          state.allMovies.flatMap(movie => movie.genres)
        )),
      };

    default:
      return state;
  }
};

export default rootReducer;
