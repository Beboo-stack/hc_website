import React from "react";
import Image from "next/image";
import { newArrivals } from "../../data";
import { FaFacebook, FaInstagram } from "react-icons/fa6";

const WhatsNewPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gradient-to-r from-blue-900 to-purple-900">
        <Image
          src="/Mall Photo_s/IMG_7893 copy.jpg"
          alt="What's New at HC Mall"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">What's New</h1>
            <p className="text-xl md:text-2xl mb-8">
              Stay Updated on Our Latest Additions
            </p>
          </div>
        </div>
      </div>

      {/* New Arrivals Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Check out our newest openings and exclusive arrivals:
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* {newArrivals.map((arrival) => (
            <div
              key={arrival.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={arrival.image}
                  alt={arrival.brandName}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Image
                    src={arrival.logo}
                    alt={`${arrival.brandName} logo`}
                    width={80}
                    height={40}
                    className="bg-white rounded-lg p-2"
                  />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {arrival.brandName}
                </h3>
                <p className="text-gray-600 mb-2">{arrival.category}</p>

                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">📍</span>
                    <span>{arrival.floor}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">📞</span>
                    <span>{arrival.phone}</span>
                  </div>
                </div>

                <div className="flex space-x-4 mt-4">
                  {arrival.instagram && (
                    <a
                      href={arrival.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-600 hover:text-pink-700 font-medium"
                    >
                      <FaInstagram size={25} className="inline mr-1" />
                    </a>
                  )}
                  {arrival.facebook && (
                    <a
                      href={arrival.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      <FaFacebook size={25} className="inline mr-1" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))} */}
        </div>
      </section>
    </div>
  );
};

export default WhatsNewPage;