import React from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa6";
import { FaApple, FaGooglePlay, FaAppStoreIos } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-white text-black text-sm mt-10">
      {/* Top Row: Social, Newsletter, App Badges */}
      <div className="flex w-full justify-center text-center items-center">
        <div className="w-full h-[3px] bg-gray-200" />
        <h2 className="text-lg uppercase w-[20%] md:text-2xl font-semibold  text-black">
          HC Mall
        </h2>
        <div className="w-full h-[3px] bg-gray-200" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row md:justify-between md:items-start gap-8">
        {/* Social */}
        <div className="flex flex-col gap-3 md:w-1/3">
          <span className="font-bold tracking-wider mb-2">FOLLOW US</span>
          <div className="flex gap-4 text-2xl">
            <a href="#" aria-label="Facebook" className="hover:text-blue-600">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="X" className="hover:text-black">
              <FaXTwitter />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-red-600">
              <FaYoutube />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-500">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-3 md:w-1/3">
          <span className="font-bold tracking-wider mb-2">
            RECEIVE OUR NEWSLETTER
          </span>
          <form className="flex w-full max-w-md">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded-r-md font-semibold hover:bg-gray-800"
            >
              SIGN UP
            </button>
          </form>
        </div>

        {/* App Badges */}
        <div className="flex flex-col gap-3 md:w-1/3 justify-center md:items-center">
          <span className="font-bold tracking-wider mb-2">
            DOWNLOAD THE APP
          </span>
          <div className="flex gap-3">
            <a href="#" aria-label="App Store" className="inline-block">
              <FaApple className="text-3xl" />
            </a>
            <a href="#" aria-label="Google Play" className="inline-block">
              <FaGooglePlay className="text-3xl" />
            </a>
            <a href="#" aria-label="App Gallery" className="inline-block">
              <FaAppStoreIos className="text-3xl" />
            </a>
          </div>
        </div>
      </div>
      {/* Divider */}
      <div className="border-t border-gray-200 my-2" />
      {/* Middle Section: Info Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Visitor Information */}
        <div>
          <span className="font-bold tracking-wider mb-3 block">
            VISITOR INFORMATION
          </span>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Mall Map
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Emaar Gift Card
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                The Lounge
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                More from Emaar
              </a>
            </li>
          </ul>
        </div>
        {/* About Us */}
        <div>
          <span className="font-bold tracking-wider mb-3 block">ABOUT US</span>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                About Dubai Mall
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About Emaar
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Media Centre
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Emaar Malls
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
          </ul>
        </div>
        {/* E-Services/Legal */}
        <div>
          <span className="font-bold tracking-wider mb-3 block">
            E-Services/Tenants' Portal
          </span>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                E-Services/Tenants' Portal
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Leasing Enquiries
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms and Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Parking FAQs
              </a>
            </li>
          </ul>
        </div>
        {/* Contact Us */}
        <div>
          <span className="font-bold tracking-wider mb-3 block">
            CONTACT US
          </span>
          <div className="mb-2">UAE ONLY: 800 DUBAI MALL (800 38224 6255)</div>
          <a
            href="mailto:enquiry@thedubaimall.com"
            className="hover:underline block"
          >
            enquiry@thedubaimall.com
          </a>
        </div>
      </div>
      {/* Divider */}
      <div className="border-t border-gray-200 my-2" />
      {/* Bottom Row: Emaar, copyright, etc. */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-700">
        <div className="flex items-center gap-2 font-serif text-2xl font-bold">
          EMAAR
        </div>
        <div>
          View All Group Entities{" "}
          <span className="inline-block align-middle">&#9650;</span>
        </div>
        <div className="text-center md:text-right flex-1">
          Emaar Properties PJSC is the Master Developer of Dubai Mall
        </div>
      </div>
      <div className="w-full text-center text-base bg-black py-3 text-white pb-4">
        © 2025 HC Mall. All rights reserved.
      </div>
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/"
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
