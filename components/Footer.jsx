import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";
import Image from "next/image";
import { mallCategories } from "@/data";
import Link from "next/link";

// NOTE: This assumes `mallCategories` is an array of objects like `{ name: 'Category Name', image: '...' }`

const Footer = () => {
  return (
    <footer className="relative bg-white text-black text-sm mt-10">
      {/* Top Row: Social, Newsletter, App Badges */}
      <div className="flex w-full justify-center text-center items-center">
        <div className="w-full h-[3px] bg-gray-200" />
        <h2 className="w-fit md:text-2xl font-semibold  text-black">
          <Image
            src="/HC Logo Source-01.png"
            width={330}
            height={330}
            alt="HC mall logo"
          />
        </h2>
        <div className="w-full h-[3px] bg-gray-200" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row md:justify-center md:items-start gap-8">
        {/* Social */}
        <div className="flex flex-col gap-3 justify-center items-center">
          <span className="font-bold tracking-wider mb-2">FOLLOW US</span>
          <div className="flex gap-4 text-2xl ">
            <a
              href="https://www.facebook.com/HCFurnitureMall/?eid=ARDi4rPTxlXxiH7LU5X5FbKjmzefHp0aI3kl1unAZtHkWdqbuoQQ_HRIYIlPOJlHeWrBPl7aQZZmzqzb"
              target="_blank"
              aria-label="Facebook"
              className="hover:text-blue-600"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/hc_furnituremall/"
              target="_blank"
              aria-label="Instagram"
              className="hover:text-pink-500"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/2001281100001"
              target="_blank"
              aria-label="WhatsApp"
              className="hover:text-green-500"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.tiktok.com/@hc_furnituremall"
              target="_blank"
              aria-label="TikTok"
              className="hover:text-pink-500"
            >
              <FaTiktok />
            </a>
            <a
              href="https://www.youtube.com/@hcfurnituremall4504"
              target="_blank"
              aria-label="YouTube"
              className="hover:text-red-500"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 my-2" />

      {/* Middle Section: Info Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Categories - spans 2 columns */}
        <div className="md:col-span-2">
          <span className="font-bold tracking-wider mb-3 block">
            CATEGORIES
          </span>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2">
            {/* The fix is here: {category.name} instead of {category} */}
            {mallCategories.map((category, index) => (
              <Link
                href={`/categories/${category.name
                  .toLocaleLowerCase()
                  .trim()
                  .replace(/\s+/g, "-")}`}
                key={index}
                className="text-gray-700 hover:text-black hover:underline cursor-pointer"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <span className="font-bold tracking-wider mb-3 block">Services</span>
          <ul className="space-y-2">
            <li>Elevators & Escalators</li>
            <li>Free Parking</li>
            <li>Clean Restrooms</li>
            <li>Prayer Rooms</li>
            <li>Public Transport Access</li>
            <li>Uber & Ride Pick-Up Point</li>
            <li>24/7 Security & Cameras</li>
            <li>Accessibility Support</li>
            <li>Information Desk</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <span className="font-bold tracking-wider mb-3 block">
            CONTACT US
          </span>
          <div className="mb-2">
            Mall of Arabia - Gate 1, Juhayna Sq., 6th of October, Egypt
          </div>
          <a
            href="tel:+2001281100001"
            target="_blank"
            className="hover:underline block"
          >
            +20 0128 1100 001
          </a>
        </div>
      </div>

      <div className="w-full text-center text-base bg-black py-3 text-white pb-4">
        © {new Date().getFullYear()} HC Mall. Developed by Digirain.
      </div>
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/2001281100001"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-50 bottom-6 right-6 bg-green-500 rounded-full p-3 shadow-lg hover:bg-green-600 transition-colors"
      >
        <FaWhatsapp className="text-white text-3xl" />
      </a>
    </footer>
  );
};

export default Footer;
