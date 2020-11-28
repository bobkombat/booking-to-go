import React, { useEffect, useState } from "react";
import { fetchMovies } from "../../store/actions/movieActions.js";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function SearchBarHome() {
  const [searchedValue, setSearchedValue] = useState("");
  const movies = useSelector((store) => store.movieReducer.movies);
  const fetched = useSelector((store) => store.movieReducer.fetched);
  const currentPage = useSelector((store) => store.movieReducer.currentPage);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (movies !== undefined && movies.length > 1 && fetched) {
      history.push(`/search/${searchedValue}/${currentPage}`);
      setLoading(false);
    }
  }, [movies]);

  async function submitSearch(e) {
    e.preventDefault();
    setLoading(true);
    dispatch(fetchMovies(searchedValue));
  }

  return (
    <div className="sm:mx-auto flex sm:justify-center">
      <div className="w-auto sm:w-full sm:h-12 xl:w-10/12 h-20 xl:h-16 rounded-full bg-black">
        <form
          className="w-full h-full rounded-full flex items-center justify-between"
          onSubmit={(e) => submitSearch(e)}
        >
          <input
            className="bg-black sm:w-5/12 rounded-md w-8/12 md:text-lg  md:w-4/12 lg:w-6/12 xl:w-7/12 xl:text-2xl text-gray-200 font-bold mx-6 text-3xl focus:outline-none"
            type="text"
            value={searchedValue}
            placeholder="Search here..."
            onChange={(e) => setSearchedValue(e.target.value)}
          />
          <button
            type="submit"
            className="flex justify-around items-center sm:h-8 xl:h-10 sm:w-28 h-14 rounded-full w-32 mr-3 font-bold text-lg px-4 bg-white hover:bg-gray-300 focus:ring-4 focus:ring-opacity-50 focus:ring-gray-200 focus:ring-offset-red-400"
          >
            {loading && (
              <svg
                class="animate-spin sm:h-3 sm:w-3 xl:w-3 xl:h-3 h-5 w-5 bg-black"
                viewBox="0 0 24 24"
              ></svg>
            )}
            <p className="lg:text-base">Search</p>
          </button>
        </form>
      </div>
    </div>
  );
}
