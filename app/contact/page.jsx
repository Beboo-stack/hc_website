import React from "react";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaGlobe,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaEnvelope,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

const ContactPage = () => {
  const contactInfo = {
    facebook:
      "https://www.facebook.com/HCFurnitureMall/?eid=ARDi4rPTxlXxiH7LU5X5FbKjmzefHp0aI3kl1unAZtHkWdqbuoQQ_HRIYIlPOJlHeWrBPl7aQZZmzqzb",
    instagram: "https://www.instagram.com/hc_furnituremall/",
    youtube: "https://www.youtube.com/@hcfurnituremall4504",
    tiktok: "https://www.tiktok.com/@hc_furnituremall",
    website: "www.hcfurnituremall.com",
    phone: "01281100001",
    address: "Mall of Arabia - Gate 1, Juhayna Sq., 6th of October, Egypt",
  };

  const businessHours = [
    { day: "Saturday to Wednesday ", hours: "10:00 AM - 11:00 PM" },
    { day: "Thursday and Friday ", hours: "10:00 AM - 12:00 Midnight" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-gradient-to-r from-blue-900 to-purple-900">
        <Image
          src="/Mall Photo_s/IMG_7893 copy.jpg"
          alt="Contact HC Mall"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl md:text-2xl mb-8">
              Get in touch with HC Furniture Mall
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            HC Furniture Mall Contacts
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Phone */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500 text-white mb-4">
              <FaPhone size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Phone</h3>
            <p className="text-gray-600 mb-4">{contactInfo.phone}</p>
            <a
              href={`tel:${contactInfo.phone}`}
              className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              Call Now
            </a>
          </div>

          {/* Address */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500 text-white mb-4">
              <FaMapMarkerAlt size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Address
            </h3>
            <p className="text-gray-600 mb-4">{contactInfo.address}</p>
            <a
              href="https://maps.app.goo.gl/DBaGShHkVdvsvwo69"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300"
            >
              Get Directions
            </a>
          </div>

          {/* Website */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-500 text-white mb-4">
              <FaGlobe size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Website
            </h3>
            <p className="text-gray-600 mb-4">{contactInfo.website}</p>
            <a
              href={`https://${contactInfo.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors duration-300"
            >
              Visit Website
            </a>
          </div>

          {/* Facebook */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white mb-4">
              <FaFacebook size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Facebook
            </h3>
            <p className="text-gray-600 mb-4">Follow us on Facebook</p>
            <a
              href={contactInfo.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Follow Us
            </a>
          </div>

          {/* Instagram */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pink-500 text-white mb-4">
              <FaInstagram size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Instagram
            </h3>
            <p className="text-gray-600 mb-4">Follow us on Instagram</p>
            <a
              href={contactInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors duration-300"
            >
              Follow Us
            </a>
          </div>
          {/* YouTube */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500 text-white mb-4">
              <FaYoutube size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              YouTube
            </h3>
            <p className="text-gray-600 mb-4">Follow us on YouTube</p>
            <a
              href={contactInfo.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300"
            >
              Follow Us
            </a>
          </div>
          {/* TikTok */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black text-white mb-4">
              <FaTiktok size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">TikTok</h3>
            <p className="text-gray-600 mb-4">Follow us on TikTok</p>
            <a
              href={contactInfo.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-300"
            >
              Follow Us
            </a>
          </div>
        </div>
      </section>

      {/* Business Hours Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Business Hours
            </h2>
            <p className="text-lg text-gray-600">
              Visit us during our operating hours
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {businessHours.map((schedule, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm"
                >
                  <span className="font-semibold text-gray-900">
                    {schedule.day}
                  </span>
                  <span className="text-gray-600">{schedule.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location Map Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find Us
            </h2>
            <p className="text-lg text-gray-600">
              Located at Mall of Arabia - Gate 1
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d55289.66401843745!2d31.0283273!3d29.9908086!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14585744f661d153%3A0x7a42760289ea2356!2sHC%20Furniture%20Mall!5e0!3m2!1sar!2seg!4v1753894692569!5m2!1sar!2seg"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="HC Mall Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
