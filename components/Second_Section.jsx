import Image from "next/image";
import React from "react";

const Second_Section = () => {
  return (
    <div className="py-[2px] w-full h-[100vh] md:h-[75vh] relative">
      <Image
        src="/Mall Photo_s/IMG_5380 copy.JPG"
        alt="Second Section Image"
        width={1000}
        height={1000}
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col items-start justify-end text-white px-5 pb-10">
        <h4 className="text-base md:text-lgd font-bold text-center mb-4">
          Entertain
        </h4>
        <div className="w-full flex flex-col items-start pb-7">
          <h2 className="text-4xl font-semibold lg:text-6xl text-start ">
            Dubai Aquarium & <br /> Underwater Zoo
          </h2>
          <p className="hidden md:block lg:w-[60%] text-base text-start font-semibold">
            Marvel at the wonders of nature up-close, with more than 33,000
            animals to admire.
          </p>
        </div>
        <div className="flex flex-col gap-3 md:flex-row w-full">
          <button className=" px-6 py-2 w-full md:w-fit border-2 border-gray-400 text-sm hover:bg-black hover:text-white transition duration-300">
            Explore More
          </button>
          <button className=" px-6 py-2 w-full md:w-fit border-2 border-gray-400 text-sm hover:bg-black hover:text-white transition duration-300">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Second_Section;
