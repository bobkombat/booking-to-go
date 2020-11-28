import { SET_MOVIES, SET_MOVIE_DETAIL, CHANGE_PAGE, SET_FETCH } from "../actionTypes.js";
import axios from "axios";

export function fetchMovies(url, searchQuery, page = 1, test) {
  return async (dispatch) => {
    console.log(`${url}&s=${searchQuery.replace(" ", "%")}&page=${page}`);

    try {
      dispatch({ type: SET_FETCH, payload: { fetched: true } });
      const response = await axios.get(
        `http://${url}&s=${searchQuery.replace(" ", "%")}&page=${page}`
      );
      console.log(response, test);
      dispatch({
        type: SET_MOVIES,
        payload: {
          movies: response.data.Search,
          totalPage: Math.ceil(+response.data.totalResults / 10),
          totalMovie: response.data.totalResults,
          currentPage: page,
        },
      });
      dispatch({ type: SET_FETCH, payload: { fetched: false } });
    } catch (err) {
      console.log(err);
    }
  };
}
