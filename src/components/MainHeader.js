import React from "react";
import HomeAttributes from "./sub-components/HomeAttributes";
import SearchBarHome from "./sub-components/SearchBarHome";

export default function MainHeader() {
  return (
    <section className="h-full flex justify-end items-center mx-auto flex-wrap-reverse w-10/12 sm:my-0 md:my-20 lg:my-28 my-32">
      <div className="z-20 relative flex flex-col sm:justify-center py-10 sm:text-center text-left font-bold w-7/12 sm:w-screen text-8xl xl:text-7xl lg:text-5xl md:text-5xl sm:text-4xl max-w-full">
        <div
          className="sm:w-56 sm:h-20 md:w-60 md:h-32 lg:w-80 lg:h-24 xl:h-48 w-96 h-56 -left-40 bg-pink absolute"
          style={{ zIndex: -1 }}
        ></div>
        <h1 className="mb-8">Search your favorite movie today.</h1>
        <SearchBarHome />
      </div>
      <div className="sm:w-full sm:h-96 w-5/12 h bg-purple-600 mx-auto">
        <HomeAttributes />
      </div>
    </section>
  );
}
