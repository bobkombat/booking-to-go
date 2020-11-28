import { SET_MOVIE, SET_MOVIE_DETAIL, CHANGE_PAGE } from "../actionTypes.js";

const initialState = {
  movies: [],
  movieDetail: {},
  firstPage: null,
  lastPage: null,
  currentPage: null,
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case SET_MOVIE:
      return {
        ...state,
        movies: actions.payload.movies,
        firstPage: 1,
        lastPage: actions.payload.lastPage,
        currentPage: 1,
      };
    case SET_MOVIE_DETAIL:
      return { ...state, movieDetail: actions.payload.movieDetail };
    case CHANGE_PAGE:
      return { ...state, movies: actions.payload.movies, currentPage: actions.payload.currentPage };
    default:
      return state;
  }
};
