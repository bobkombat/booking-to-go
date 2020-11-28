import { SET_MOVIE, SET_MOVIE_DETAIL, CHANGE_PAGE } from "../actionTypes.js";

export function fetchMovies(url, searchQuery, pages = 1) {
  return (dispatch) => {
    fetch(`${url}&s=${searchQuery.replace(" ", "%")}&p=${pages}`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };
}
