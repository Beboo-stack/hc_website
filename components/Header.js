"use client";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const mainLinks = [
  "WHAT'S NEW",
  "SHOP",
  "DINE",
  "STAY",
  "ENTERTAIN",
  "PLAN YOUR VISIT",
  "SERVICES",
];
const blackLinks = [
  "FASHION AVENUE",
  "FOUNTAIN VIEWS",
  "CHINATOWN",
  "SOUK AL BAHAR",
  "OFFERS",
  "EVENTS",
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white flex md:flex-col items-center justify-between px-6 md:px-0 py-3">
        <div className="hidden border-b-2 mb-2 pb-3 border-black/20 w-full md:flex justify-center font-bold text-2xl tracking-widest">
          HC MALL
        </div>
        <div className="flex items-center justify-between w-full md:w-auto gap-4">
          <button
            className="md:hidden text-2xl"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <FiMenu />
          </button>
          <div className="md:hidden  font-bold text-2xl tracking-widest mx-auto md:mx-0">
            HC MALL
          </div>
          <div className="hidden w-full md:flex justify-center items-center gap-20 text-sm font-medium">
            {mainLinks.map((link) => (
              <Link key={link} href="#" className="hover:text-blue-600 ">
                {link}
              </Link>
            ))}
          </div>
        </div>
      </header>

      {/* Secondary Navbar (Black, desktop only) */}
      <nav className="hidden md:flex bg-black items-center justify-center text-white gap-16 px-8 py-2 font-semibold text-sm mt-[100px]">
        {blackLinks.map((link) => (
          <a key={link} href="#" className="hover:text-yellow-400">
            {link}
          </a>
        ))}
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed overflow-y-auto inset-0 z-50 bg-white flex flex-col">
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <button
              className="text-2xl"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <FiX />
            </button>
            <div className="font-bold text-2xl tracking-widest">HC MALL</div>
            <div style={{ width: 32 }} /> {/* Spacer for symmetry */}
          </div>
          <nav className="flex flex-col">
            {mainLinks.map((link) => (
              <Link
                key={link}
                href="#"
                className="px-6 py-4 border-b text-black font-medium text-base"
              >
                {link}
              </Link>
            ))}
            {blackLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="px-6 py-4 bg-black text-white font-semibold text-base border-b"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
