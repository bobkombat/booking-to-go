import React from "react";

export default function MovieCard({ movieData }) {
  return (
    <div className="card transition duration-200 ease-out transform hover:scale-105 w-full sm:h-full h-96 bg-black text-black">
      <div className="">
        <figure className="w-10/12 h-full mx-auto my-auto overflow-hidden">
          <img
            className="relative z-10 w-full img-card"
            src={movieData.Poster}
            alt={movieData.Title}
          />
        </figure>

        <div className="card-detail absolute opacity-0 border-gray-900 p-4 border-b-2 border-r-2 border-l-2 w-full h-32 left-0 bottom-0 z-20 bg-white ">
          <h1 className="text-base">
            {movieData.Title} ({movieData.Year})
          </h1>
          <h3 className="font-normal">{movieData.Type}</h3>
          <a
            href={movieData.imdbID}
            className="mt-2 text-base inline-block border-b-2 border-gray-600"
          >
            See Details
          </a>
        </div>
      </div>
    </div>
  );
}
