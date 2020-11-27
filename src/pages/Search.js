import React from "react";
import NavbarSearch from "../components/NavbarSearch";

export default function Search() {
  return (
    <div className="mx-auto bg-white font-header antialiased h-screen overflow-hidden">
      <NavbarSearch />
      <main class="mx-auto w-8/12 sm:w-screen sm:px-3 flex flex-wrap-reverse justify-center h-full bg-red-500">
        <div></div>
      </main>
    </div>
  );
}
