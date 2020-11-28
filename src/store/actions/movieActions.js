import { SET_MOVIES, SET_MOVIE_DETAIL, CHANGE_PAGE, SET_FETCH, API_URL } from "../actionTypes.js";
import axios from "axios";

export function fetchMovies(searchQuery, page = 1) {
  return async (dispatch) => {
    try {
      dispatch({ type: SET_FETCH, payload: { fetched: true } });
      console.log(`http://${API_URL}&s=${searchQuery.replace(" ", "%")}&page=${page}`);
      const response = await axios.get(
        `http://${API_URL}&s=${searchQuery.replace(" ", "%")}&page=${page}`
      );
      dispatch({
        type: SET_MOVIES,
        payload: {
          movies: response.data.Search,
          totalPage: response.data.totalResults ? Math.ceil(+response.data.totalResults / 10) : 0,
          totalMovie: response.data.totalResults ? +response.data.totalResults : 0,
          currentPage: page,
        },
      });
      dispatch({ type: SET_FETCH, payload: { fetched: false } });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
}

export function changePage(page = 1) {
  return (dispatch) => {
    dispatch({
      type: CHANGE_PAGE,
      payload: {
        currentPage: +page,
      },
    });
  };
}

export function fetchDetail(id) {
  return async (dispatch) => {
    try {
      dispatch({
        type: SET_MOVIE_DETAIL,
        payload: {
          movieDetail: {},
        },
      });
      const data = await axios.get(`http://${API_URL}&i=${id}&plot=full`);
      console.log(data);
      dispatch({
        type: SET_MOVIE_DETAIL,
        payload: {
          movieDetail: data.data,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
}
