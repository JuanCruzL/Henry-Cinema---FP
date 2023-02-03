import axios from "axios"

export const getMovieById = (id) => {
    try {
        return async (dispatch) => {
            let movieInfo = await axios.get(`http://localhost:3001/movies/${id}`)
            return dispatch ({
                type: "GET_MOVIE_ID",
                payload: movieInfo.data
            })

        }
    }catch (e) {
        console.log(e)
    }
}

