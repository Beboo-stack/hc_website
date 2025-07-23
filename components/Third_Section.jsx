import Image from "next/image";
import React from "react";

const Third_Section = () => {
  return (
    <div className="py-[2px] w-full h-full md:h-[75vh] flex flex-col lg:flex-row justify-center items-center">
      <div className="w-full lg:w-[50%] h-screen md:h-full relative">
        <Image
          src="/2.jpg"
          alt="Third Section Image"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col items-start justify-end text-white px-5 pb-10">
          <h4 className="text-base md:text-lg font-bold text-center mb-4">
            Discover
          </h4>
          <div className="w-full flex flex-col items-start pb-7">
            <h2 className="text-4xl font-semibold lg:text-6xl text-start ">
              The Wonders of Dubai
            </h2>
          </div>
          <div className="w-full flex-col md:flex-row flex gap-3">
            <button className=" px-6 py-2 w-full md:w-fit border-2 border-gray-400 text-sm hover:bg-black hover:text-white transition duration-300">
              Discover Now
            </button>
            <button className=" px-6 py-2 w-full md:w-fit border-2 border-gray-400 text-sm hover:bg-black hover:text-white transition duration-300">
              Discover Now
            </button>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[50%] h-screen md:h-full relative">
        <Image
          src="/1.jpg"
          alt="Third Section Image"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col items-start justify-end text-white px-5 pb-10">
          <h4 className="text-base md:text-lg font-bold text-center mb-4">
            Explore
          </h4>
          <div className="w-full flex flex-col items-start pb-7">
            <h2 className="text-4xl font-semibold lg:text-6xl text-start ">
              The Beauty of Nature
            </h2>
          </div>
          <div className="w-full flex-col md:flex-row flex gap-3">
            <button className=" px-6 py-2 w-full md:w-fit border-2 border-gray-400 text-sm hover:bg-black hover:text-white transition duration-300">
              Discover Now
            </button>
            <button className=" px-6 py-2 w-full md:w-fit border-2 border-gray-400 text-sm hover:bg-black hover:text-white transition duration-300">
              Discover Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Third_Section;
