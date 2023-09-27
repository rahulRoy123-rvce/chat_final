import React from "react";
import YtVideo from "../shared/YtVideo";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <>
      <div className="items-center justify-center w-full overflow-x-hidden mx-auto">
        <div className="container flex flex-col items-center justify-center h-full mx-auto md: lg:flex-row xl:px-0">
          <div className="flex flex-col w-100 md:pt-0 pt-20  xs:ml-10 sm:ml-10 mx-8">
            <h1 className="relative mb-4 min-w-100 text-4xl md:text-6xl font-bold  leading-tight text-left new-font md:text-left 3xl:text-left text-gray-900 xl:mb-8">
              Never run out of kitchen supplies
            </h1>
            <p className="mb-6 new-font text-base text-gray-600 lg:text-2xl text-left ">
              RichFeyn Smart Jar automatically restocks itself, saving time and
              hassle for busy households.
            </p>
            <Link
              to="/pricing"
              className=" cursor-pointer relative z-40 inline-block max-w-fit px-5 py-3 text-base font-bold leading-none text-white transition-all duration-100 bg-[#236d3b] rounded shadow-md fold-bold sm:w-full lg:shadow-none hover:shadow-xl md:mx-0 mx-auto"
            >
              Pre Order
            </Link>
          </div>
          <div className="w-120 lg:text-right py-20 md:pr-10  xs:ml-10 sm:ml-10">
            <YtVideo />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
