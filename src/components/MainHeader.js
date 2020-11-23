import React from "react";
import HomeAttributes from "./sub-components/HomeAttributes";

export default function MainHeader() {
  return (
    <section className="flex justify-end items-center mx-auto flex-wrap-reverse w-10/12 sm:my-0 md:my-20 lg:my-28 my-32">
      <div className="z-20 relative py-10 sm:text-center text-left font-bold w-7/12 sm:w-screen text-8xl xl:text-7xl lg:text-5xl md:text-5xl sm:text-4xl max-w-full">
        <h1>Search your favorite movie today.</h1>
        <div>
          <h6 className="text-5xl">Search here...</h6>
        </div>
      </div>
      <div className="z-20 relative sm:w-full w-5/12 h bg-purple-600 mx-auto">
        <HomeAttributes />
      </div>
      <div className="sm:w-32 sm:h-24 md:w-60 md:h-52 lg:w-80 lg:h-60 w-96 h-72 bg-pink absolute sm:-bottom-10 bottom-1/3 left-0 z-10"></div>
    </section>
  );
}
