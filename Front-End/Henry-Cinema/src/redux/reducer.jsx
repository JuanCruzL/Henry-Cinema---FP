const initialState = {
  movieId: [],
  movies: [],
  allMovies: [],
  uniqueGenres: [],
  topMovies: [],
  // Proximos estrenos
  nextReleases: [],
  //componente dia/noche
  modo: "dia",
  // Componente search
  searchMovies: [],
  //Para el componente Foods
  foods: [],
  copyFoods: [],
  drinks: [],
  copyDrinks: [],
  combos: [],
  copyCombos: [],
  currentUser: {},
  seats: [],
  newGenres: [],
  // Para el componente Screenings
  screenings: [],
  // Para el componente Users.
  users: [],
  // Para el componente Reviews.
  reviews: [],
  // Para el componente Sales.
  sales: [],
  screeningID: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // MOVIES
    case "GET_MOVIES": {
      return {
        ...state,
        movies: action.payload,
        allMovies: action.payload,
        searchMovies: action.payload,
      };
    }
    case "GET_SEATS": {
      return {
        ...state,
        seats: action.payload,
      };
    }

    case "GET_MOVIE_ID":
      return {
        ...state,
        movieId: action.payload,
      };
    case "GET_NEXT_RELEASES":
      return {
        ...state,
        nextReleases: action.payload,
      };
    case "CREATE_MOVIE":
      return {
        ...state,
        allMovies: action.payload,
      };
    case "DELETE_MOVIE":
      return {
        ...state,
        allMovies: action.payload,
      };
    case "SEARCH_MOVIE":
      const searchMoviesBar = state.allMovies;
      const searchMoviesFound = searchMoviesBar.filter((m) => {
        return m.title.toLowerCase().includes(action.payload.toLowerCase());
      });
      return {
        ...state,
        searchMovies:
          searchMoviesFound.length > 0
            ? searchMoviesFound
            : [
                {
                  imageVertical:
                    "https://img.freepik.com/vector-premium/pagina-inicio-error-404-archivo-diseno-plano_249405-162.jpg?w=2000",
                  apiId: "Error",
                },
              ],
      };
    // SCREENINGS

    case "GET_SCREENING": {
      return {
        ...state,
        screeningID: action.payload,
      };
    }
    case "GET_SCREENINGS": {
      return {
        ...state,
        screenings: action.payload,
      };
    }
    case "CREATE_SCREENING":
      return {
        ...state,
        screenings: action.payload,
      };
    case "DELETE_SCREENING":
      return {
        ...state,
        screenings: action.payload,
      };
    //FOOD & DRINKS
    case "GET_FOODS":
      return {
        ...state,
        foods: action.payload,
        copyFoods: action.payload,
      };

    case "CREATE_FOOD":
      return {
        ...state,
        foods: action.payload,
      };

    case "DELETE_FOOD":
      return {
        ...state,
        foods: action.payload,
      };

    case "GET_DRINKS":
      return {
        ...state,
        drinks: action.payload,
        copyDrinks: action.payload,
      };

    case "CREATE_DRINK":
      return {
        ...state,
        drinks: action.payload,
        copyDrinks: action.payload,
      };

    case "DELETE_DRINK":
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

    case "CREATE_COMBO":
      return {
        ...state,
        combos: action.payload,
        copyCombos: action.payload,
      };

    case "DELETE_COMBO":
      return {
        ...state,
        combos: action.payload,
        copyCombos: action.payload,
      };

    case "SEARCH_FOOD":
      const searchCombos = state.copyCombos;
      const searchDrinks = state.copyDrinks;
      const searchFoods = state.copyFoods;
      const combosFound = searchCombos.filter((c) => {
        return c.name.toLowerCase().includes(action.payload.toLowerCase());
      });
      const drinksFound = searchDrinks.filter((d) => {
        return d.name.toLowerCase().includes(action.payload.toLowerCase());
      });
      const foodsFound = searchFoods.filter((f) => {
        return f.name.toLowerCase().includes(action.payload.toLowerCase());
      });
      return {
        ...state,
        combos: combosFound,
        drinks: drinksFound,
        foods: foodsFound,
      };
    // GENRES
    case "REQUEST_GENRES2":
      return {
        ...state,
        uniqueGenres: Array.from(
          new Set(state.allMovies.flatMap((movie) => movie.genres))
        ),
      };
    case "GET_GENRES_DB":
      return {
        ...state,
        newGenres: action.payload,
      };

    case "POST_USER_WITH_GOOGLE":
      return {
        ...state,
        currentUser: action.payload,
      };

    case "GET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload,
      };

    case "GET_USERS": {
      return {
        ...state,
        users: action.payload,
      };
    }

    case "GET_REVIEWS": {
      return {
        ...state,
        reviews: action.payload,
      };
    }
    case "DELETE_REVIEW":
      return {
        ...state,
        reviews: action.payload,
      };

    case "MODO":
      let M = state.modo;
      M == "dia" ? (M = "noche") : (M = "dia");
      return {
        ...state,
        modo: M,
      };
    case "LOG_OUT":
      window.localStorage.removeItem("loggedUser");
      return {
        ...state,
        currentUser: {},
      };

    //SearchDashboard=====================================================================================0//
    case "DASH_MOVIES":
      const movi = state.allMovies;
      const FoundMovi = movi.filter((M) => {
        return M.title.toLowerCase().includes(action.payload.toLowerCase());
      });
      return {
        ...state,
        movies: FoundMovi,
      };
    case "DASH_COMBOS":
      const com = state.copyCombos;
      const FoundCom = com.filter((C) => {
        return C.name.toLowerCase().includes(action.payload.toLowerCase());
      });
      return {
        ...state,
        combos: FoundCom,
      };
    case "DASH_FOODS":
      const foo = state.copyFoods;
      const FoundFoo = foo.filter((f) => {
        return f.name.toLowerCase().includes(action.payload.toLowerCase());
      });
      return {
        ...state,
        foods: FoundFoo,
      };
    case "DASH_DRINKS":
      const dri = state.copyDrinks;
      const FoundDri = dri.filter((d) => {
        return d.name.toLowerCase().includes(action.payload.toLowerCase());
      });
      return {
        ...state,
        drinks: FoundDri,
      };
    default:
      return state;
  }
};

export default rootReducer;
