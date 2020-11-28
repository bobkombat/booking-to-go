import { SET_MOVIES, SET_MOVIE_DETAIL, CHANGE_PAGE, SET_FETCH } from "../actionTypes.js";

const initialState = {
  movies: [],
  movieDetail: {},
  totalPage: null,
  currentPage: null,
  fetched: false,
  totalMovie: 0,
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case SET_MOVIES:
      return {
        ...state,
        movies: actions.payload.movies,
        totalPage: actions.payload.totalPage,
        currentPage: actions.payload.currentPage,
        totalMovie: actions.payload.totalMovie,
      };
    case SET_MOVIE_DETAIL:
      return { ...state, movieDetail: actions.payload.movieDetail };
    case CHANGE_PAGE:
      return { ...state, movies: actions.payload.movies, currentPage: actions.payload.currentPage };
    case SET_FETCH:
      return { ...state, fetched: actions.payload.fetched };
    default:
      return state;
  }
};
