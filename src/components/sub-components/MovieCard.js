import React from "react";

export default function MovieCard() {
  return (
    <div className="transition duration-200 ease-out transform hover:scale-105 w-full sm:h-full h-96 bg-black text-black">
      <div className="card">
        <figure className="w-10/12 h-full mx-auto my-auto overflow-hidden">
          <img
            className="relative z-10 w-full img-card"
            src="https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
            alt="Batman"
          />
        </figure>

        <div className="card-detail absolute opacity-0 border-gray-900 p-4 border-b-2 border-r-2 border-l-2 w-full h-32 left-0 bottom-0 z-20 bg-white ">
          <h1 className="text-2xl">Batman (2005)</h1>
          <h3 className="font-normal">Movie</h3>
          <a href="" className="mt-2 text-xl inline-block border-b-2 border-gray-600">
            See Details
          </a>
        </div>
      </div>
    </div>
  );
}
