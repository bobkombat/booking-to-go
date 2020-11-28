import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function FilterSearch() {
  const totalMovie = useSelector((store) => store.movieReducer.totalMovie);
  const { searched } = useParams();
  return (
    <div className="font-header font-bold sm:px-3 sm:h-28 h-32 px-12 py-5 w-full items-center flex bg-black text-white">
      <div className="my-auto">
        <h1 className="text-3xl sm:text-2xl border-white border-b-4 mb-2 inline-block">
          Searched for {searched}.
        </h1>
        <h2 className="text-2xl sm:text-xl">Movies found: {totalMovie}</h2>
      </div>
    </div>
  );
}
