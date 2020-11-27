import React from "react";
import SearchbarSearch from "./sub-components/SeachbarSearch";

export default function NavbarSearch() {
  return (
    <div className="bg-black sticky w-screen h-16 flex justify-center">
      <div className="h-full sm:w-screen sm:px-3 w-8/12 flex items-center justify-between">
        <a href="#home" onClick={(e) => e.preventDefault()}>
          <div className="md:w-7 md:h-7 w-10 h-10 rounded-full bg-white"></div>
        </a>
        <SearchbarSearch />
        <div className="w-14 md:w-7 sm:w-2"></div>
      </div>
    </div>
  );
}
