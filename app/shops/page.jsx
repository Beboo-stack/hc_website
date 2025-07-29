import Image from "next/image";
import React from "react";
import { shops } from "@/shops";
import ShopCard from "@/components/shop_card";

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="h-[50vh] bg-white shadow-md relative overflow-hidden">
        {/* Constrained image container */}
        <div className="h-full w-full relative">
          <Image
            width={1920}
            height={1080}
            src="/Mall Photo_s/2 copy.JPG"
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

      {/* Main Content - 90% of viewport height */}
      <main className="flex-1 overflow-y-auto ">
        {/* Rest of your content remains the same */}
        <div className="container mx-auto px-12 py-2 space-y-4">
          {/* Section*/}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">🛒 Shops</h2>
            <hr className="mb-5"/>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {shops.map((shop, index) => (
                <ShopCard
                category={shop.category}
                  key={index} 
                  logo={shop.logo}
                  name={shop.name}
                  floor={shop.floor}
                  contact={shop.phone && shop.phone.length > 0 ? shop.phone[0] : ''} 
                  social={{
                    facebook: shop.facebook,
                    instagram: shop.instagram,
                  }}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Page;
