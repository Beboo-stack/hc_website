"use client";
import Link from "next/link";
import { useState, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { mainLinks, blackLinks, mallCategories } from "@/data";
import Image from "next/image";
import { ChevronDownIcon } from "lucide-react";
import { shops } from "@/shops";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileCategoriesOpen, setMobileCategoriesOpen] = useState(false);
  
  // Add refs to control dropdown visibility
  const mallCategoriesRef = useRef(null);
  const shopsRef = useRef(null);

  // Function to hide dropdowns
  const hideDropdown = (dropdownRef) => {
    if (dropdownRef.current) {
      // Remove focus and blur to hide the dropdown
      dropdownRef.current.blur();
      // Force remove hover state by temporarily removing the group class
      const parentGroup = dropdownRef.current.closest('.group');
      if (parentGroup) {
        parentGroup.classList.remove('group');
        setTimeout(() => {
          parentGroup.classList.add('group');
        }, 50);
      }
    }
  };

  return (
    <>
      {/* Top Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white flex md:flex-col items-center justify-between px-6 md:px-0 py-3">
        <Link
          href="/"
          className="hidden text-secondary border-b-2 mb-2 pb-3 border-black/20 w-full md:flex justify-center font-bold text-2xl tracking-widest"
        >
          HC MALL
        </Link>
        <div className="flex items-center justify-between w-full md:w-auto gap-4">
          <button
            className="md:hidden text-2xl"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <FiMenu />
          </button>
          <Link
            href="/"
            className="md:hidden text-secondary font-bold text-2xl tracking-widest mx-auto md:mx-0"
          >
            HC MALL
          </Link>
          <div className="hidden w-full md:flex justify-center items-center gap-12 lg:gap-20 text-base font-medium">
            {mainLinks.map((link, index) => (
              <div key={index} className="group">
                <Link href={link.href} className="group inline-block">
                  <div className="relative flex items-center justify-center gap-1 pb-2 border-b-2 border-transparent group-hover:border-black transition-colors duration-200">
                    {(link.name === "Mall Categories" ||
                      link.name === "Shops") && (
                      <span className="text-black">
                        <ChevronDownIcon className="w-5 h-5" />
                      </span>
                    )}
                    {link.name}
                  </div>
                </Link>
                {/* Enhanced Dropdown for Mall Categories */}
                {link.name === "Mall Categories" && (
                  <div
                    ref={mallCategoriesRef}
                    tabIndex={0}
                    className="absolute left-0 z-40 hidden group-hover:grid group-focus-within:grid transition-all duration-300 ease-out w-full overflow-y-auto grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 bg-white border border-gray-200 shadow-2xl rounded-xl p-6 animate-fade-in-down focus:outline-none custom-scrollbar"
                    style={{ maxHeight: "60vh" }}
                    role="menu"
                    aria-label="Mall Categories"
                  >
                    <div className="col-span-full mb-2 text-lg font-bold text-primary text-center">
                      Mall Categories
                    </div>
                    {mallCategories.map((cat, subIndex) => (
                      <Link
                        key={subIndex}
                        href="#"
                        className="block focus:outline-none focus:ring-2 focus:ring-primary rounded-lg transition-colors duration-200 hover:bg-primary/10 hover:border-primary border border-transparent p-2"
                        tabIndex={0}
                        role="menuitem"
                        onClick={() => hideDropdown(mallCategoriesRef)}
                      >
                        <div className="flex flex-col items-center gap-2">
                          <Image
                            width={120}
                            height={120}
                            src={cat.image}
                            alt={cat.name}
                            className="w-[100px] h-[100px] object-cover rounded shadow-sm border border-gray-100"
                          />
<<<<<<< HEAD
                          <span className="font-semibold text-center text-secondary group-hover:text-primary">
                            {cat.name.trim()}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
                {/*dropdown for shops */}
                {link.name === "Shops" && (
                  <div
                    ref={shopsRef}
                    tabIndex={0}
                    className="absolute left-0 z-40 hidden group-hover:grid group-focus-within:grid transition-all duration-300 ease-out w-full overflow-y-auto grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 bg-white border border-gray-200 shadow-2xl rounded-xl p-6 animate-fade-in-down focus:outline-none custom-scrollbar"
                    style={{ maxHeight: "60vh" }}
                    role="menu"
                    aria-label="Mall Categories"
                  >
                    <div className="col-span-full mb-2 text-lg font-bold text-primary text-center">
                      Shops
                    </div>
                    {shops.map((shop, subIndex) => (
                      <Link
                        key={subIndex}
                        href={`/shop/${shop.name.replace(/\s+/g, '')}`}
                        className="block focus:outline-none focus:ring-2 focus:ring-primary rounded-lg transition-colors duration-200 hover:bg-primary/10 hover:border-primary border border-transparent p-2"
                        tabIndex={0}
                        role="menuitem"
                        onClick={() => hideDropdown(shopsRef)}
                      >
                        <div className="flex flex-col items-center gap-2">
                          <Image
                            width={120}
                            height={120}
                            src={shop.logo}
                            alt={shop.name}
                            className="w-[100px] h-[100px] object-cover rounded shadow-sm border border-gray-100"
                          />
                          <span className="font-semibold text-center text-secondary group-hover:text-primary">
                            {shop.name.trim()}
                          </span>
=======
                          <span className="font-semibold text-center text-secondary group-hover:text-primary">{cat.name.trim()}</span>
                          <span className="text-xs text-gray-500 text-center">Category description here</span>
>>>>>>> bfda2e8b429c622c7d736fe436260a80eb6a2949
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
                {/* Default dropdown for other links with subLinks */}
                {link.subLinks && link.name !== "Mall Categories" && (
                  <div className="absolute hidden group-hover:grid transition-all duration-500 w-full overflow-y-auto grid-cols-6 left-0 gap-10 bg-white shadow-lg mt-2 rounded-lg p-4">
                    {link.subLinks.map((subLink, subIndex) => (
                      <Link
                        key={subIndex}
                        href={"#"}
                        className="block text-sm text-gray-700 hover:text-gray-900"
                      >
                        <div className="flex flex-col items-center gap-2">
                          <Image
                            width={150}
                            height={150}
                            src={subLink.image}
                            alt={subLink.name}
                            className="w-[150px] h-[150px] object-cover rounded"
                          />
                          <span>{subLink.name.trim()}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Secondary Navbar (Black, desktop only) */}
      <nav className="hidden md:flex flex-wrap bg-black items-center justify-center text-white lg:gap-16 md:gap-8 px-8 py-2 font-semibold text-base tracking-wider md:mt-[100px] lg:mt-[105px]">
        {blackLinks.map((link, index) => (
          <Link key={index} href={link.href} className="hover:text-gray-400">
            {link.name}
          </Link>
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
            <Link
              href="/"
              className="font-bold text-secondary text-2xl tracking-widest"
            >
              HC MALL
            </Link>
            <div style={{ width: 32 }} /> {/* Spacer for symmetry */}
          </div>
          <nav className="flex flex-col">
            {mainLinks.map((link, index) =>
              link.name === "Mall Categories" ? (
                <>
                  <button
                    key={index}
                    className="px-6 py-4 border-b text-primary font-medium text-base flex items-center justify-between focus:outline-none"
                    onClick={() => setMobileCategoriesOpen((open) => !open)}
                    aria-expanded={mobileCategoriesOpen}
                    aria-controls="mobile-mall-categories-list"
                  >
                    <span>Mall Categories</span>
                    <span
                      className={`transition-transform duration-200 ${
                        mobileCategoriesOpen ? "rotate-180" : ""
                      }`}
                    >
                      ▼
                    </span>
                  </button>
                  {mobileCategoriesOpen && (
                    <div
                      id="mobile-mall-categories-list"
                      className="flex flex-col gap-2 px-6 py-2 bg-gray-50 border-b"
                    >
                      {mallCategories.map((cat, idx) => (
                        <Link
                          key={idx}
                          href="#"
                          className="flex items-center gap-3 py-2 px-2 rounded hover:bg-primary/10 border border-transparent hover:border-primary transition-colors duration-200"
                          onClick={() => setMobileCategoriesOpen(false)}
                        >
                          <Image
                            width={40}
                            height={40}
                            src={cat.image}
                            alt={cat.name}
                            className="w-10 h-10 object-cover rounded border border-gray-100"
                          />
                          <span className="text-sm font-medium text-secondary">
                            {cat.name.trim()}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  key={index}
                  href={link.href}
                  className="px-6 py-4 border-b text-primary font-medium text-base"
                >
                  {link.name}
                </Link>
              )
            )}
            {blackLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="px-6 py-4 bg-black text-white font-semibold text-base border-b"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}