const initialState = {
  movies: [],
  movieId: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_MOVIES": {
      return {
        ...state,
        movies:  action.payload,
      };
    }
    case "GET_MOVIE_ID":
      return {
        ...state,
        movieId: action.payload
      }
    default:
      return state;
  }
};

export default rootReducer;
