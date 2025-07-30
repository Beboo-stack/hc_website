import React from "react";
import Link from "next/link";
import { shops } from "@/shops";
import ShopCard from "./shop_card";

const CategoryStructure = ({ category }) => {
  return (
    <div className="min-h-screen flex flex-col pt-5">
      {/* Breadcrumb Navigation */}
      <nav className="px-6 py-4 text-black">
        <div className="flex justify-between items-center">
          {/* Left: Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span>›</span>
            <Link href="/categories" className="hover:underline">
              Categories
            </Link>
            <span>›</span>
            <span className="font-medium">{category.name}</span>
          </div>
        </div>
      </nav>

      {/* Main Content - 90% of viewport height */}
      <main className="flex-1 overflow-y-auto ">
        {/* Rest of your content remains the same */}
        <div className="container mx-auto px-12 py-2 space-y-4">
          {/* Section*/}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">{category.name} Shops</h2>
            <hr className="mb-10" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {shops
                .filter((shop) =>
                  shop.category.some((cat) =>
                    cat
                      .toLowerCase()
                      .includes(category.name.toLowerCase().trim())
                  )
                )
                .map((shop, index) => (
                  <ShopCard
                    key={index}
                    category={shop.category}
                    logo={shop.logo}
                    name={shop.name}
                    floor={shop.floor}
                    contact={
                      shop.phone && shop.phone.length > 0 ? shop.phone[0] : ""
                    }
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

export default CategoryStructure;
