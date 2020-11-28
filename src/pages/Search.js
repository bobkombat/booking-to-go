import React from "react";
import MovieCardList from "../components/MovieCardList";
import NavbarSearch from "../components/NavbarSearch";
import FilterSearch from "../components/FilterSearch";

export default function Search() {
  return (
    <div className="mx-auto bg-white font-header antialiased h-screen overflow-auto">
      <NavbarSearch />
      <main className="mx-auto xl:w-10/12 md:w-11/12 w-9/12 sm:mt-14 mt-20 mb-8 sm:w-screen justify-between h-2/3">
        <FilterSearch />
        <MovieCardList />
        <div className="w-full h-16 bg-red-300"></div>
      </main>
    </div>
  );
}
