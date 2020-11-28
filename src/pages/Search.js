import React, { useEffect } from "react";
import MovieCardList from "../components/MovieCardList";
import NavbarSearch from "../components/NavbarSearch";
import FilterSearch from "../components/FilterSearch";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../store/actions/movieActions";
import { useParams } from "react-router-dom";
import Pagination from "../components/Pagination";

export default function Search() {
  const dispatch = useDispatch();
  const { searched, page } = useParams();

  useEffect(() => {
    dispatch(fetchMovies(searched, page, "dari use effect searchbarsearch"));
  }, [searched, page, dispatch]);

  return (
    <div className="mx-auto bg-white font-header antialiased h-screen overflow-auto">
      <NavbarSearch />
      <main className="mx-auto xl:w-10/12 md:w-11/12 w-9/12 sm:mt-14 mt-20 mb-8 sm:w-screen justify-between h-2/3">
        <FilterSearch />
        <MovieCardList />
        <div className="w-full h-16 flex justify-center items-center">
          <Pagination />
        </div>
      </main>
    </div>
  );
}
