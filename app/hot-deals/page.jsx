"use client";
import React, { useEffect, useState } from "react";
import { hotDeals } from "@/data";
import Image from "next/image";
import { FaInstagram, FaFacebook, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { getHotDeals } from "lib/contentful";

const Page = () => {
  // This will come from Contentful CMS in the future
  // Only requires: promotionalImage and brandName
  const featuredDeals = [
    {
      id: 1,
      brandName: "Verinno",
      promotionalImage: "/Artboard 2 (4).png",
    },
    {
      id: 2,
      brandName: "Divano",
      promotionalImage: "/Artboard 1.png",
    },
    {
      id: 3,
      brandName: "Asfour Crystal",
      promotionalImage: "/Artboard 3.png",
    },
  ];

  // Helper function to generate shop route from brand name
  const getShopRoute = (brandName) => {
    // Remove spaces and special characters for URL
    return `/shops/${brandName.replace(/[^a-zA-Z0-9]/g, "")}`;
  };

  // Helper function to get logo path from brand name
  // const getLogoPath = (brandName) => {
  //   const logoMap = {
  //     Verinno: "/logos/Verinno_Black_White.webp",
  //     Divano: "/logos/Divano_Artboard 1.webp",
  //     "Asfour Crystal": "/logos/Artboard 1 copy 10.webp",
  //   };
  //   return logoMap[brandName] || "/logos/default-logo.webp";
  // };

  const [hotDeals, setHotDeals] = useState([]);

  useEffect(() => {
    const fetchHotDeals = async () => {
      const deals = await getHotDeals();
      setHotDeals(deals);
    };
    fetchHotDeals();
  }, []);

  console.log("Hot Deals:", hotDeals[0]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">🔥 Hot Deals</h1>
          <p className="text-xl">Limited Time Offers - Don't Miss Out!</p>
        </div>
      </section>

      {/* Featured Promotional Deals */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Promotions
          </h2>
          <p className="text-lg text-gray-600">
            Amazing deals from our top brands
          </p>
        </div>

        <div className="space-y-8 w-full">
          {hotDeals.length > 0 ? (
            hotDeals.map((deal) => (
              <div
                key={deal.fields.brandName}
                className="bg-white rounded-lg shadow-lg overflow-hidden w-full"
              >
                <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] w-full">
                  {/* Promotional Image */}
                  <div className="relative h-80 md:h-96 w-full">
                    <Image
                      src={
                        deal?.fields?.promotionImage?.fields?.file?.url ||
                        "/placeholder-image.jpg"
                      }
                      alt={`${deal?.fields?.brandName} promotional offer`}
                      fill
                      className="object-contain w-full h-full"
                      priority
                    />
                  </div>

                  {/* Deal Details */}
                  <div className="p-6 md:p-8 flex flex-col justify-center min-h-[200px] md:min-h-0">
                    <div className="flex items-center mb-6">
                      {/* <Image
                      src={getLogoPath(deal?.fields?.brandName)}
                      alt={`${deal?.fields?.brandName} logo`}
                      width={80}
                      height={40}
                      className="mr-4"
                    /> */}
                      <h3 className="text-2xl font-bold text-gray-900">
                        {deal?.fields?.brandName}
                      </h3>
                    </div>

                    {/* Shop Button */}
                    <Link
                      href={getShopRoute(deal?.fields?.brandName)}
                      className="w-full bg-orange-500 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors duration-300 flex items-center justify-center"
                    >
                      Visit {deal?.fields?.brandName} Shop
                      <FaArrowRight className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Loading hot deals...</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Page;
