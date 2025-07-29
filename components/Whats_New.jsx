import Image from "next/image";
import React from "react";

const Whats_New = () => {
  return (
    <div className="w-full h-[40vh] flex flex-col items-center justify-center relative">
      <Image
        src="/Mall Photo_s/IMG_7885 copy.jpg"
        alt="Third Section Image"
        width={1000}
        height={1000}
        className="w-full h-full object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col items-center justify-center text-white px-5">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl md:text-5xl font-semibold mb-2">
            What's New at
          </h2>
          <Image
            src="/HC Logo Source-01.png"
            width={200}
            height={200}
            alt="HC mall logo"
            className="mt-2"
          />
        </div>
        <button className="px-6 py-2 mt-6 border-2 border-gray-400 text-sm hover:bg-black hover:text-white transition duration-300">
          Discover More
        </button>
      </div>
    </div>
  );
};

export default Whats_New;
