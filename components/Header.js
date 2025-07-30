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
  const [mobileShopsOpen, setMobileShopsOpen] = useState(false);

  const sortedShops = [...shops].sort((a, b) => a.name.localeCompare(b.name));

  const mallCategoriesRef = useRef(null);
  const shopsRef = useRef(null);

  // This function will be called when clicking on a sub-item or leaving the dropdown area
  const closeAllDropdowns = () => {
    setMobileShopsOpen(false);
    setMobileCategoriesOpen(false); // Make sure this is also handled for consistency
    // No need to set menuOpen here as this function is primarily for desktop dropdowns
  };

  // Function to handle closing dropdowns on mouse leave from the parent group
  const handleDropdownMouseLeave = () => {
    // Only close if the dropdown is currently open
    // This will implicitly handle both shops and categories if they are under the same mechanism
    if (mallCategoriesRef.current || shopsRef.current) {
      closeAllDropdowns();
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white flex md:flex-col items-center justify-between px-6 md:px-0 py-3">
        <Link
          href="/"
          className="hidden text-secondary  mb-2  w-fit md:flex justify-center font-bold text-2xl tracking-widest"
          onClick={() => {
            setMobileShopsOpen(false);
            setMenuOpen(false);
          }}
        >
          <Image
            src="/HC Logo Source-01.png"
            width={150}
            height={150}
            alt="HC mall logo"
          />
        </Link>
        <div className="flex items-center justify-between w-full md:w-full gap-4 md:border-t-2 md:border-black/20">
          <button
            className="md:hidden text-2xl"
            aria-label="Open menu"
            onClick={() => {
              setMenuOpen(true);
              setMobileShopsOpen(false); // Close shops dropdown if open
              setMobileCategoriesOpen(false); // Close categories dropdown if open
            }}
          >
            <FiMenu />
          </button>
          <Link
            href="/"
            className="md:hidden text-secondary font-bold text-2xl tracking-widest mx-auto md:mx-0"
            onClick={() => {
              setMobileShopsOpen(false);
              setMenuOpen(false);
            }}
          >
            <Image
              src="/HC Logo Source-01.png"
              width={150}
              height={150}
              alt="HC mall logo"
            />
          </Link>
          <div className="hidden w-full md:flex justify-center items-center gap-12 lg:gap-20 pt-3 text-base font-medium">
            {mainLinks.map((link, index) => (
              <div
                key={index}
                className="group"
                onMouseLeave={
                  link.name === "Mall Categories" || link.name === "Shops"
                    ? handleDropdownMouseLeave
                    : undefined
                }
              >
                <Link
                  href={link.href}
                  className="group inline-block"
                  onClick={() => {
                    setMobileShopsOpen(false);
                    setMenuOpen(false);
                    // Also close desktop dropdowns if a non-dropdown link is clicked
                    closeAllDropdowns();
                  }}
                >
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

                {link.name === "Mall Categories" && (
                  <div
                    ref={mallCategoriesRef}
                    tabIndex={0}
                    // onMouseLeave is already on the parent group div
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
                        href={`/categories/${cat.name
                          .toLocaleLowerCase()
                          .trim()
                          .replace(/\s+/g, "-")}`}
                        className="block focus:outline-none focus:ring-2 focus:ring-primary rounded-lg transition-colors duration-200 hover:bg-primary/10 hover:border-primary border border-transparent p-2"
                        tabIndex={0}
                        role="menuitem"
                        onClick={closeAllDropdowns} // Call closeAllDropdowns when a sub-item is clicked
                      >
                        <div className="flex flex-col items-center gap-2">
                          <Image
                            width={120}
                            height={120}
                            src={cat.image}
                            alt={cat.name}
                            className="w-[100px] h-[100px] object-cover rounded shadow-sm border border-gray-100"
                          />
                          <span className="font-semibold text-center text-secondary group-hover:text-primary">
                            {cat.name.trim()}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}

                {link.name === "Shops" && (
                  <div
                    ref={shopsRef}
                    tabIndex={0}
                    // onMouseLeave is already on the parent group div
                    className="absolute left-0 z-40 hidden group-hover:grid group-focus-within:grid transition-all duration-300 ease-out w-full overflow-y-auto grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 bg-white border border-gray-200 shadow-2xl rounded-xl p-6 animate-fade-in-down focus:outline-none custom-scrollbar"
                    style={{ maxHeight: "60vh" }}
                    role="menu"
                    aria-label="Shops"
                  >
                    <div className="col-span-full mb-2 text-lg font-bold text-primary text-center">
                      Shops
                    </div>
                    {sortedShops.map((shop, subIndex) => (
                      <Link
                        key={subIndex}
                        href={`/shops/${shop.name.replace(/\s+/g, "")}`}
                        className="block focus:outline-none focus:ring-2 focus:ring-primary rounded-lg transition-colors duration-200 hover:bg-primary/10 hover:border-primary border border-transparent p-2"
                        tabIndex={0}
                        role="menuitem"
                        onClick={() => {
                          closeAllDropdowns();
                        }} // Call closeAllDropdowns when a sub-item is clicked
                      >
                        <div className="flex flex-col items-center gap-2">
                          <Image
                            width={120}
                            height={120}
                            src={shop.logo}
                            alt={shop.name}
                            className="w-[100px] h-[100px] object-contain rounded shadow-sm border border-gray-100 bg-white"
                          />
                          <span className="font-semibold text-center text-secondary group-hover:text-primary">
                            {shop.name.trim()}
                          </span>
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
      <nav className="hidden md:flex flex-wrap bg-black items-center justify-center text-white lg:gap-16 md:gap-8 px-8 py-2 font-semibold text-base tracking-wider md:mt-[120px] lg:mt-[125px]">
        {blackLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="hover:text-gray-400"
            onClick={() => {
              setMobileShopsOpen(false);
              setMenuOpen(false);
              closeAllDropdowns(); // Also close desktop dropdowns
            }}
          >
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
              onClick={() => {
                setMobileShopsOpen(false);
                setMenuOpen(false);
              }}
            >
              <Image
                src="/HC Logo Source-01.png"
                width={150}
                height={150}
                alt="HC mall logo"
              />
            </Link>
            <div style={{ width: 32 }} />
          </div>
          <nav className="flex flex-col">
            {mainLinks.map((link, index) =>
              link.name === "Mall Categories" ? (
                <>
                  <button
                    key={index}
                    className="px-6 py-4 border-b text-primary font-medium text-base flex items-center justify-between focus:outline-none"
                    onClick={() => {
                      setMobileCategoriesOpen((open) => !open);
                      setMobileShopsOpen(false); // Close shops dropdown if categories is opened
                    }}
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
                          href={`/categories/${cat.name
                            .toLocaleLowerCase()
                            .trim()
                            .replace(/\s+/g, "-")}`}
                          className="flex items-center gap-3 py-2 px-2 rounded hover:bg-primary/10 border border-transparent hover:border-primary transition-colors duration-200"
                          onClick={() => {
                            setMobileCategoriesOpen(false);
                            setMenuOpen(false);
                          }}
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
              ) : link.name === "Shops" ? (
                <>
                  <button
                    key={index}
                    className="px-6 py-4 border-b text-primary font-medium text-base flex items-center justify-between focus:outline-none"
                    onClick={() => {
                      setMobileShopsOpen((open) => !open);
                      setMobileCategoriesOpen(false); // Close categories dropdown if shops is opened
                    }}
                    aria-expanded={mobileShopsOpen}
                    aria-controls="mobile-shops-list"
                  >
                    <span>Shops</span>
                    <span
                      className={`transition-transform duration-200 ${
                        mobileShopsOpen ? "rotate-180" : ""
                      }`}
                    >
                      ▼
                    </span>
                  </button>
                  {mobileShopsOpen && (
                    <div
                      id="mobile-shops-list"
                      className="flex flex-col gap-2 px-6 py-2 bg-gray-50 border-b"
                    >
                      {sortedShops.map((shop, idx) => (
                        <Link
                          key={idx}
                          href={`/shops/${shop.name.replace(/\s+/g, "")}`}
                          className="flex items-center gap-3 py-2 px-2 rounded hover:bg-primary/10 border border-transparent hover:border-primary transition-colors duration-200"
                          onClick={() => {
                            setMobileShopsOpen(false);
                            setMenuOpen(false);
                          }}
                        >
                          <Image
                            width={40}
                            height={40}
                            src={shop.logo}
                            alt={shop.name}
                            className="w-10 h-10 object-contain bg-white border border-gray-100 rounded"
                          />
                          <span className="text-sm font-medium text-secondary">
                            {shop.name.trim()}
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
                  onClick={() => {
                    setMenuOpen(false);
                    setMobileShopsOpen(false); // Close mobile shops dropdown
                    setMobileCategoriesOpen(false); // Close mobile categories dropdown
                  }}
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
                onClick={() => {
                  setMenuOpen(false);
                  setMobileShopsOpen(false); // Close mobile shops dropdown
                  setMobileCategoriesOpen(false); // Close mobile categories dropdown
                }}
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
