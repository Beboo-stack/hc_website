import Image from "next/image";
import React from "react";

const First_Section = () => {
  return (
    <div className="w-full h-[100vh] md:h-[80vh] flex items-center justify-center py-[2px] relative">
      <div className="w-[100%] md:w-[50%] lg:w-[60%] h-full">
        <Image
          src="/1.jpg"
          alt="First Section Image"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
        <div className="md:hidden absolute px-5 top-0 left-0 bg-black/50 text-white w-full h-full flex flex-col items-center justify-evenly">
          <h4 className="text-lg font-bold text-center mb-4">Fashion Avenue</h4>
          <div className="w-full flex flex-col items-center">
            <h2 className="text-4xl font-semibold lg:text-6xl text-center ">
              Redefining <br /> luxury{" "}
            </h2>
            <p className="lg:w-[60%] text-base text-center font-semibold mt-4">
              More than 200 of the most covetable luxury brands at Fashion
              Avenue ready for you to discover.
            </p>
          </div>
          <button className="mt-6 px-6 py-2 w-full md:w-[60%] border-2 border-gray-400 text-sm hover:bg-black hover:text-white transition duration-300">
            Explore More
          </button>
        </div>
      </div>

      <div className="hidden md:w-[50%] lg:w-[40%] h-full md:flex flex-col items-center justify-between py-10 px-5">
        <h4 className="text-lg font-bold text-center mb-4">Fashion Avenue</h4>
        <div className="w-full flex flex-col items-center">
          <h2 className="text-2xl font-semibold lg:text-6xl text-center ">
            Redefining <br /> luxury{" "}
          </h2>
          <p className="lg:w-[60%] text-base text-center font-semibold text-gray-700 mt-4">
            More than 200 of the most covetable luxury brands at Fashion Avenue
            ready for you to discover.
          </p>
        </div>
        <button className="mt-6 px-6 py-2 w-full md:w-[60%] border-2 border-black text-black text-sm hover:bg-black hover:text-white transition duration-300">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default First_Section;
