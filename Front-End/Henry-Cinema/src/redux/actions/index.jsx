import axios from "axios";
const AGE_CLASSIFICATION = "AGE_CLASSIFICATION";
export const GET_MOVIES = "GET_MOVIES";
export const GET_RELEASES = "GET_RELEASES";

export const getMovieById = (id) => {
  try {
    return async (dispatch) => {
      let movieInfo = await axios.get(`http://localhost:3001/movies/${id}`);
      return dispatch({
        type: "GET_MOVIE_ID",
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
        type: "GET_RELEASES",
        payload: movieInfo.data,
      });
    };
  } catch (e) {
    console.log(e);
  }
};

export function AgeClassification() {
  return {
    type: AGE_CLASSIFICATION,
    payload,
  };
}

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
