import React, { useState } from "react";

export default function SearchbarSearch() {
  const [searchedValue, setSearchedValue] = useState("");
  const [loading, setLoading] = useState(false);

  async function submitSearch(e) {
    e.preventDefault();
    setLoading(true);
  }

  return (
    <div className="sm:w-8/12 w-5/12 xl:w-6/12 lg:w-7/12 md:w-8/12 h-2/3 bg-white rounded-full">
      <form
        className="w-full h-full rounded-full flex items-center justify-between"
        onSubmit={(e) => submitSearch(e)}
      >
        <input
          className="bg-white sm:w-6/12 rounded-md w-8/12 md:text-lg  md:w-7/12 lg:w-7/12 xl:w-8/12 text-gray-900 font-bold ml-4 mr-1 text-xl focus:outline-none"
          type="text"
          value={searchedValue}
          placeholder="Search here..."
          onChange={(e) => setSearchedValue(e.target.value)}
        />
        <button
          type="submit"
          className="flex justify-around items-center sm:w-28 h-8 rounded-full w-30 mr-3 font-bold text-lg px-4 bg-black hover:bg-gray-800 focus:ring-2 focus:ring-opacity-70 focus:ring-gray-900"
        >
          {loading && (
            <svg class="animate-spin sm:mr-0 mr-2 h-2 w-2 bg-white" viewBox="0 0 24 24"></svg>
          )}
          <p className="text-sm text-white">Search</p>
        </button>
      </form>
    </div>
  );
}