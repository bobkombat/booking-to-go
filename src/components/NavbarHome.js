import React from "react";

export default function NavbarHome() {
  return (
    <header className="flex align-middle items-center h-24 w-screen sm:container mx-auto text-4xl md:text-2xl z-20">
      <nav className="align-middle w-10/12 flex justify-between mx-auto">
        <a href="/" onClick={(e) => e.preventDefault()}>
          <div className="md:w-7 md:h-7 w-14 h-14 rounded-full bg-black"></div>
        </a>
        <div className="flex justify-around w-96 md:w-64 sm:w-52">
          <button className="focus:outline-white font-bold transition transform ease-in hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none">
            Home
          </button>
          <button className="focus:outline-white font-bold transition transform ease-in hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none">
            Features
          </button>
        </div>
        <div className="w-14 md:w-7 sm:w-2"></div>
      </nav>
    </header>
  );
}
