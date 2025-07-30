import React from "react";
import Image from "next/image";
import {
  FaElevator,
  FaCar,
  FaRestroom,
  FaPlay,
  FaBus,
  FaTaxi,
  FaVideo,
  FaWheelchair,
} from "react-icons/fa6";
import { FaPray } from "react-icons/fa";

const ServicesPage = () => {
  const facilities = [
    {
      id: 1,
      icon: FaElevator,
      title: "Elevators & Escalators",
      description:
        "Convenient vertical transportation throughout the mall with modern elevators and escalators for easy access to all floors.",
      color: "bg-blue-500",
      textColor: "text-blue-500",
    },
    {
      id: 2,
      icon: FaCar,
      title: "Free Parking",
      description:
        "Spacious parking area with free parking for all visitors. Safe and secure parking with 24/7 monitoring.",
      color: "bg-green-500",
      textColor: "text-green-500",
    },
    {
      id: 3,
      icon: FaRestroom,
      title: "Clean Restrooms",
      description:
        "Well-maintained and hygienic restroom facilities located on all floors for your comfort and convenience.",
      color: "bg-purple-500",
      textColor: "text-purple-500",
    },
    {
      id: 4,
      icon: FaPray,
      title: "Prayer Rooms",
      description:
        "Dedicated prayer rooms available for visitors, providing a peaceful space for religious observances.",
      color: "bg-yellow-500",
      textColor: "text-yellow-500",
    },
    {
      id: 5,
      icon: FaBus,
      title: "Public Transport Access",
      description:
        "Easy access to public transportation with bus stops and metro connections nearby for convenient travel.",
      color: "bg-red-500",
      textColor: "text-red-500",
    },
    {
      id: 6,
      icon: FaTaxi,
      title: "Uber & Ride Pick-Up Point",
      description:
        "Designated pick-up and drop-off areas for ride-sharing services and taxis for seamless transportation.",
      color: "bg-indigo-500",
      textColor: "text-indigo-500",
    },
    {
      id: 7,
      icon: FaVideo,
      title: "24/7 Security & Cameras",
      description:
        "Comprehensive security system with CCTV cameras and professional security staff ensuring your safety.",
      color: "bg-gray-500",
      textColor: "text-gray-500",
    },
    {
      id: 8,
      icon: FaWheelchair,
      title: "Accessibility Support",
      description:
        "Full accessibility features including ramps, wide corridors, and dedicated facilities for visitors with special needs.",
      color: "bg-teal-500",
      textColor: "text-teal-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-gradient-to-r from-blue-900 to-purple-900">
        <Image
          src="/Mall Photo_s/IMG_7893 copy.jpg"
          alt="Services & Facilities"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Services & Facilities
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              We care about your convenience.
            </p>
          </div>
        </div>
      </div>

      {/* Facilities Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Available facilities:
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility) => (
            <div
              key={facility.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full  text-white mb-4`}
              >
                <facility.icon size={32} className={`${facility.textColor}`} />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {facility.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {facility.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-gray-600">
              Beyond our facilities, we offer additional services to enhance
              your shopping experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Information Desk
              </h3>
              <p className="text-gray-600 mb-4">
                Our friendly staff is available to assist you with directions,
                store locations, and general inquiries.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Store directory assistance</li>
                <li>• Event information</li>
                <li>• Lost and found services</li>
                <li>• General mall information</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Wi-Fi Access
              </h3>
              <p className="text-gray-600 mb-4">
                Stay connected with complimentary high-speed Wi-Fi throughout
                the mall.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Free Wi-Fi coverage</li>
                <li>• High-speed internet</li>
                <li>• Easy connection process</li>
                <li>• Available in all areas</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ATM Services
              </h3>
              <p className="text-gray-600 mb-4">
                Multiple ATM machines located throughout the mall for your
                banking convenience.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Multiple bank ATMs</li>
                <li>• 24/7 cash access</li>
                <li>• Convenient locations</li>
                <li>• Secure transactions</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Food & Dining
              </h3>
              <p className="text-gray-600 mb-4">
                Enjoy a variety of dining options from quick snacks to
                full-service restaurants.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Food court options</li>
                <li>• Coffee shops</li>
                <li>• Fine dining restaurants</li>
                <li>• International cuisine</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Assistance?
          </h2>
          <p className="text-xl mb-8">
            Our staff is here to help you with any questions or concerns
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div>
              <h3 className="text-xl font-semibold mb-2">Information Desk</h3>
              <p>Ground Floor, Main Entrance</p>
              <p>Daily: 10:00 AM - 10:00 PM</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Security Office</h3>
              <p>Available 24/7</p>
              <p>Emergency: 02-3826-XXXX</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Mall Management</h3>
              <p>Office Hours: 9:00 AM - 6:00 PM</p>
              <p>Email: info@hcmall.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
