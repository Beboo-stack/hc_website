import AutomaticCarousel from "@/components/Automatic_Carousel";
import { aboutUsPageSlides, slides } from "@/data";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="h-[70vh] bg-white shadow-md relative overflow-hidden">
        {/* Constrained image container */}
        <div className="h-full w-full relative">
          <Image
            width={1920}
            height={1080}
            src="/Mall Photo_s/About HC Cover .jpeg"
            alt="Dubai Mall"
            className="h-full w-full object-fill"
          />
          {/* Text overlay - centered */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-40 p-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About HC Furniture Mall 
            </h1>
          </div>
        </div>
      </header>

      <p className="mx-auto mt-5 font-bold text-2xl">HC Furniture Mall </p>

      {/* Main Content - 90% of viewport height */}
      <main className="flex-1 overflow-y-auto ">
        {/* Rest of your content remains the same */}
        <div className="container mx-auto px-12 py-2 space-y-4">
          {/* Section*/}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">📖 About Us</h2>
            <div className="space-y-4 p-max-90ch text-secondary">
              <p>
                HC Furniture Mall revolutionized the shopping experience by
                transforming the concept of short-term exhibitions into a
                permanent, year-round destination. Bringing together all
                furniture and home accessories brands under one roof, the mall
                simplifies the furnishing and finishing process for customers.
              </p>
              <p>
                The idea was realized after deep research and strategic
                planning—focusing on location, tenant mix, mall circulation, and
                consumer behavior. Every detail was carefully executed to
                deliver a cozy, friendly, and inspiring atmosphere that enhances
                the customer&apos;s journey.
              </p>
              <p>
                In July 2012, HC Furniture Mall launched at Mall of Arabia,
                occupying over 20,000 sqm across 3 floors. It brought together
                the top local and international furniture brands, offering a
                diverse range of products with varying styles, budgets, and
                tastes. With more than 55 stores and 200 brands, HC quickly
                became the largest and most successful furniture mall in the
                country — a true one-stop destination.
              </p>
              <p>
                Variety Under One Roof: From sofas to kitchens, decor to
                curtains, outdoor furniture to flooring—you&apos;ll find everything
                you need for your home in one place.
              </p>
              <p>
                Prime Location: Inside Mall of Arabia—so customers can furnish
                their home and still enjoy dining, shopping, or entertainment in
                one visit.
              </p>
              <p>
                Exceptional Ambience: Natural light from the glass dome and
                fresh air from central A/C create a comfortable shopping
                experience.
              </p>
              <p>
                Smart Management: Our professional team understands furniture
                retail deeply, stays up to date with trends, and is fully
                focused on customer satisfaction.
              </p>
            </div>
          </section>
          <AutomaticCarousel slides={aboutUsPageSlides} />
        </div>
      </main>
    </div>
  );
};

export default Page;
