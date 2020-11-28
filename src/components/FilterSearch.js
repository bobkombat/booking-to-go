import React from "react";

export default function FilterSearch() {
  return (
    <div className="font-header font-bold sm:px-3 sm:h-28 h-32 px-12 py-5 w-full items-center flex bg-black text-white">
      <div className="my-auto">
        <h1 className="text-3xl sm:text-2xl border-white border-b-4 mb-2 inline-block">
          Searched for Batman.
        </h1>
        <h2 className="text-2xl sm:text-xl">Movies found: 699</h2>
      </div>
    </div>
  );
}
