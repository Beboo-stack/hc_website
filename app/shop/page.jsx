import AutomaticCarousel from "@/components/Automatic_Carousel";
import { aboutUsPageSlides, slides } from "@/data";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="h-[50vh] bg-white shadow-md relative overflow-hidden">
        {/* Constrained image container */}
        <div className="h-full w-full relative">
          <Image
            width={1920}
            height={1080}
            src="/shop.jpg"
            alt="Dubai Mall"
            className="h-full w-full object-cover"
          />
          {/* Text overlay - centered */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-40 p-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              A mall that has it all!
            </h1>
          </div>
        </div>
      </header>

      <p className="mx-auto mt-5 font-bold text-2xl">HC MALL</p>

      {/* Main Content - 90% of viewport height */}
      <main className="flex-1 overflow-y-auto ">
        {/* Rest of your content remains the same */}
        <div className="container mx-auto px-12 py-2 space-y-4">
          {/* Section*/}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">📖 About Us</h2>
            
          </section>
        </div>
      </main>
    </div>
  );
};

export default Page;
