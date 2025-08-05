"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  FaSearch,
  FaFilter,
} from "react-icons/fa";
import { useRouter } from "next/navigation";

const FloorPlanPage = () => {
  const [selectedFloor, setSelectedFloor] = useState("ground");
  const [selectedShop, setSelectedShop] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const router = useRouter()

  const floors = [
    {
      id: "ground",
      name: "Ground Floor",
      arabicName: "الطابق الأرضي",
      image: "/Mall Photo_s/Ground-Floor.jpg", // Placeholder - you'll need actual floor plan images
      shops: [
        {
          name: "VERINNO",
          category: "Modern Furniture",
          location: "Top-left",
          logo: "/logos/Verdera_Original Logo.webp",
        },
        {
          name: "VALUES HOME",
          category: "Modern Furniture",
          location: "Bottom-left",
          logo: "/logos/values---new-logo[1]-copy.webp",
        },
        {
          name: "AMERICAN FURNITURE",
          category: "Modern Furniture",
          location: "Middle-right",
          logo: "/logos/American-Furniture.webp",
        },
        {
          name: "TEXMAR",
          category: "Fabrics / Curtains",
          location: "Top-center",
          logo: "/logos/TEXMAR-LOGO-ENGLISH.webp",
        },
        {
          name: "CONTISTAHL",
          category: "Kitchens",
          location: "Top-center",
          logo: "/logos/Cotistahl.webp",
        },
        {
          name: "MAZLOUM HOME",
          category: "Modern Furniture",
          location: "Top-right",
          logo: "/8.jpg",
        },
        {
          name: "ASFOUR CRYSTAL",
          category: "Lighting",
          location: "Top-right",
          logo: "/logos/Artboard 1 copy 10.webp",
        },
        {
          name: "TIFFANY",
          category: "Lighting",
          location: "Top-right",
          logo: "/logos/logo-FB.webp",
        },
        {
          name: "APEX",
          category: "Modern Furniture",
          location: "Bottom-left",
          logo: "/logos/APEX-logo(1)-1.webp",
        },
        {
          name: "ESQUE",
          category: "Modern Furniture",
          location: "Bottom-center",
          logo: "/logos/Esque_Artboard 1.webp",
        },
        {
          name: "Vevian",
          category: "Kitchens Hardware",
          location: "Bottom-right",
          logo: "/logos/vevian final logo white background.webp",
        },
        {
          name: "INFORMATION DESK",
          category: "Services",
          location: "Center",
          logo: null,
        },
      ],
    },
    {
      id: "first",
      name: "First Floor",
      arabicName: "الطابق الأول",
      image: "/Mall Photo_s/First-Floor.jpg",
      shops: [
        {
          name: "Zahran",
          category: "Kitchens Hardware",
          location: "Left",
          logo: "/logos/Zahran_Logo_English copy.webp",
        },
        {
          name: "CAJA",
          category: "Kitchens",
          location: "Left",
          logo: "/logos/CAJA Text logo.webp",
        },
        {
          name: "RAIF",
          category: "Fabrics / Curtains",
          location: "Left",
          logo: "/logos/Raif Tex_Artboard 1.webp",
        },
        {
          name: "LumberJack",
          category: "Outdoor",
          location: "Left",
          logo: "/logos/Lumberjack-logo_vector.webp",
        },
        {
          name: "cube furniture",
          category: "Modern Furniture",
          location: "Left",
          logo: "/logos/Cube.webp",
        },
        {
          name: "FAGOR",
          category: "Appliances",
          location: "Top",
          logo: "/logos/fagor copy.webp",
        },
        {
          name: "COMFORT",
          category: "Mattresses",
          location: "Top",
          logo: "/logos/Comfort Home collection (2).webp",
        },
        {
          name: "RADWAN MARDINI",
          category: "Fabrics / Curtains",
          location: "Top",
          logo: "/logos/RADWAN-Mardini-NEW.webp",
        },
        {
          name: "ARTYNOVA",
          category: "Kitchens",
          location: "Center-left",
          logo: "/38.jpg",
        },
        {
          name: "Comfort Sleep",
          category: "Mattresses",
          location: "Center-left",
          logo: "/logos/Comfort-Sleep-Logo.webp",
        },
        {
          name: "MALEK",
          category: "Bed Linen",
          location: "Center-left",
          logo: "/logos/Malek-New-Logo-2.webp",
        },
        {
          name: "Kian",
          category: "Outdoor",
          location: "Center-right",
          logo: "/logos/kian-logo.webp",
        },
        {
          name: "Asia FURNITURE",
          category: "Outdoor",
          location: "Center-right",
          logo: "/logos/Asia-copy.webp",
        },
        {
          name: "DIVANO",
          category: "Modern Furniture",
          location: "Right",
          logo: "/logos/Divano_Artboard 1.webp",
        },
        {
          name: "HANIMEX",
          category: "Multiple Categories",
          location: "Right",
          logo: "/logos/Hanimex_logo_black.webp",
        },
        {
          name: "VELOUR DE GENE",
          category: "Fabrics / Curtains",
          location: "Bottom",
          logo: "/logos/velour-de-jene-logo-FINAL--2.webp",
        },
        {
          name: "SPRING AIR",
          category: "Mattresses",
          location: "Bottom",
          logo: "/logos/spring-copy.webp",
        },
        {
          name: "T- Track",
          category: "Doors & Windows",
          location: "Bottom",
          logo: "/logos/T-Track.webp",
        },
        {
          name: "Nagib Selim",
          category: "Fabrics / Curtains",
          location: "Bottom",
          logo: "/25.jpg",
        },
      ],
    },
    {
      id: "second",
      name: "Second Floor",
      arabicName: "الطابق الثاني",
      image: "/Mall Photo_s/Second-floor.jpg",
      shops: [
        {
          name: "CAPITAL DESIGN",
          category: "Modern Furniture",
          location: "Left",
          logo: "/logos/Capital-Design.webp",
        },
        {
          name: "drobina",
          category: "Kitchens Hardware",
          location: "Left",
          logo: "/logos/vevian final logo white background.webp",
        },
        {
          name: "Door Teck",
          category: "Doors & Windows",
          location: "Left",
          logo: "/logos/Doortech-New-Logo-2023-3.webp",
        },
        {
          name: "NATUZZI EDITIONS",
          category: "Modern Furniture",
          location: "Left",
          logo: "/logos/Natuzzi-Edition.webp",
        },
        {
          name: "FIDA HOME",
          category: "Modern Furniture",
          location: "Left",
          logo: "/logos/Fida-Home-Gte-Vinyl.webp",
        },
        {
          name: "FURNITURE BEYOUT",
          category: "Modern Furniture",
          location: "Top",
          logo: null,
        },
        {
          name: "HANIMEX",
          category: "Multiple Categories",
          location: "Right",
          logo: "/logos/Hanimex_logo_black.webp",
        },
        {
          name: "AL F ITALIA",
          category: "Modern Furniture",
          location: "Center",
          logo: "/logos/Alf-Italia.webp",
        },
        {
          name: "Bed Home",
          category: "Bed Linen",
          location: "Bottom",
          logo: "/logos/Artboard 1 copy.webp",
        },
        {
          name: "Smart Shutter",
          category: "Doors & Windows",
          location: "Bottom",
          logo: "/logos/SMART-Shutter-Final-Logo-copy.webp",
        },
        {
          name: "MAINNOVA",
          category: "Modern Furniture",
          location: "Bottom",
          logo: "/logos/innova-logo--2.webp",
        },
      ],
    },
  ];

  const currentFloor = floors.find((floor) => floor.id === selectedFloor);
  const filteredShops =
    currentFloor?.shops.filter(
      (shop) =>
        shop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        shop.category.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-gradient-to-r from-blue-900 to-purple-900">
        <Image
          src="/Mall Photo_s/IMG_7893 copy.jpg"
          alt="Floor Plan"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Floor Plan</h1>
            <p className="text-xl md:text-2xl mb-8">
              Navigate HC Mall with ease
            </p>
          </div>
        </div>
      </div>

      {/* Floor Selection */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {floors.map((floor) => (
              <button
                key={floor.id}
                onClick={() => setSelectedFloor(floor.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedFloor === floor.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                <div className="text-center">
                  <div className="text-lg font-bold">{floor.name}</div>
                  <div className="text-sm opacity-75">{floor.arabicName}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-6 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search shops or categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
                <FaFilter className="inline mr-2" />
                Filter
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Floor Plan Display */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Floor Plan Image */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {currentFloor?.name} - {currentFloor?.arabicName}
                </h2>
                <div className="relative bg-gray-100 rounded-lg p-4 min-h-[400px] flex items-center justify-center">
                  {/* <div className="text-center text-gray-500">
                    <FaMapMarkerAlt size={48} className="mx-auto mb-4" />
                    <p className="text-lg">Floor Plan Image</p>
                    <p className="text-sm">Interactive floor plan will be displayed here</p>
                  </div> */}
                  {/* Placeholder for actual floor plan image */}
                  <Image
                    src={currentFloor?.image}
                    alt={`${currentFloor?.name} Floor Plan`}
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Shop Directory */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Shop Directory
                </h3>
                <div className="space-y-3 max-h-[600px] overflow-y-auto">
                  {filteredShops.map((shop, index) => (
                    <div
                      key={index}
                      className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors duration-200"
                      onClick={() => {
                        router.push(`/shops/${shop.name.toLowerCase()
                          .replace(/(^|\s)\w/g, letter => letter.toUpperCase())
                          .replace(/\s+/g, '')}`);
                      }}
                    >
                      <div className="flex items-center space-x-3">
                        {shop.logo && (
                          <Image
                            src={shop.logo}
                            alt={`${shop.name} logo`}
                            width={40}
                            height={40}
                            className="rounded-lg"
                          />
                        )}
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">
                            {shop.name}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {shop.category}
                          </p>
                          <p className="text-xs text-gray-500">
                            {shop.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Details Modal */}
      {selectedShop && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-900">
                {selectedShop.name}
              </h3>
              <button
                onClick={() => setSelectedShop(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            {selectedShop.logo && (
              <div className="mb-4">
                <Image
                  src={selectedShop.logo}
                  alt={`${selectedShop.name} logo`}
                  width={80}
                  height={80}
                  className="rounded-lg"
                />
              </div>
            )}

            <div className="space-y-2">
              <p>
                <strong>Category:</strong> {selectedShop.category}
              </p>
              <p>
                <strong>Location:</strong> {selectedShop.location}
              </p>
              <p>
                <strong>Floor:</strong> {currentFloor?.name}
              </p>
            </div>

            <div className="mt-6 flex space-x-3">
              <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                View Details
              </button>
              <button className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors duration-300">
                Get Directions
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloorPlanPage;
