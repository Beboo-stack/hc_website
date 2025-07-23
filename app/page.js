"use client";
import Carousel from "@/components/Carousel";
import First_Section from "@/components/First_Section";
import Second_Section from "@/components/Second_Section";
import Third_Section from "@/components/Third_Section";
import Whats_New from "@/components/Whats_New";
import { slides } from "@/data"; // Assuming slides.js is in the same directory

export default function HomePage() {
  return (
    <>
      <Carousel slides={slides} />
      <First_Section />
      <Second_Section />
      <Third_Section />
      <div className="w-full py-10 bg-gray-100 flex flex-col gap-8 items-center justify-center">
        <h1 className="text-2xl md:text-3xl font-semibold text-center">
          Discover Events & Offers
        </h1>
        <div className="hidden w-full md:flex items-center justify-center">
          <button className="px-6 py-2 mt-4 border-2 border-gray-400 text-sm hover:bg-black hover:text-white transition duration-300">
            View All Events
          </button>
          <button className="px-6 py-2 mt-4 ml-4 border-2 border-gray-400 text-sm hover:bg-black hover:text-white transition duration-300">
            View All Offers
          </button>
        </div>
      </div>
      <Whats_New />
    </>
  );
}
