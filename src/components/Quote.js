import React from "react";

export default function Quote() {
  return (
    <section class="sm:h-40 h-52 py-9 w-screen mx-auto flex items-center bg-black">
      <div class="w-10/12 mx-auto my-auto flex justify-center">
        <div className="sm:w-screen w-full sm:mx-auto flex justify-between items-center">
          <div class="text-gray-100 font-bold">
            <h1 class="text-5xl lg:text-4xl md:text-3xl sm:text-base">
              "Cinema is cool and all that jazz..."
            </h1>
            <h3 class="text-2xl md:text-xl sm:text-xs">- Martin Scorcese</h3>
          </div>
          <div class="sm:w-20 sm:h-20 w-36 h-36 bg-white rounded-r-full image-bg"></div>
        </div>
      </div>
    </section>
  );
}
