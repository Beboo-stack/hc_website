import Image from "next/image";
import Link from "next/link";
import React from "react";

const Whats_New = () => {
  return (
    <div className="w-full h-[40vh] flex flex-col items-center justify-center relative ">
      <Image
        src="/Mall Photo_s/IMG_7893 copy.jpg"
        alt="Third Section Image"
        width={1000}
        height={1000}
        className="w-full h-full object-cover"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col items-center justify-center text-white px-5">
        <h2 className="text-2xl md:text-5xl font-semibold text-center mb-4">
          What's New at <br /> HC Mall
        </h2>
        <Link
          href="/whats-new"
          className="px-6 py-2 mt-4 border-2 border-gray-400 text-sm hover:bg-black hover:text-white transition duration-300 inline-block"
        >
          Discover More
        </Link>
      </div>
    </div>
  );
};

export default Whats_New;
