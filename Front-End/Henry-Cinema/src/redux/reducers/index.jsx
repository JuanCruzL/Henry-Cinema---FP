import{
  AGE_CLASSIFICATION,

} from "../actions"

const initialState = {
  movies: [],
  allMovies: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_MOVIES": {
      return {
        ...state,
        movies: [...action, payload],
        allMovies:[...action, payload]
      };
    }
    case AGE_CLASSIFICATION:
      const allM= state.allMovies;
      const age_classification =allM.filter(data =>data.classification===payload)
     return{
        ...state,
        movies:age_classification
     }
    default:
      return state;
  }
};

export default rootReducer;
