import React from "react";
import MovieCard from "./sub-components/MovieCard";
import { useSelector } from "react-redux";

export default function MovieCardList() {
  const movies = useSelector((store) => store.movieReducer.movies);

  if (movies === undefined) {
    return <h1>undefined</h1>;
  }

  return (
    <div className="font-header font-bold sm:px-3 px-12 my-5 h-full sm:mb-0 sm:mt-3 overflow-auto w-full text-white">
      <div className="grid grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-5 mb-3">
        {movies.map((data) => (
          <MovieCard key={data.imdbID} movieData={data} />
        ))}
      </div>
      <div className="w-10 h-10 rounded-full sm:w-2 sm:h-2 bg-gray-200 mx-auto"></div>
    </div>
  );
}
