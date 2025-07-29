"use client";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { useRouter } from "next/navigation"; // Import useRouter

export default function ShopCard({
  logo,
  name,
  floor,
  contact,
  social,
  category, // Added category prop
}) {
  const router = useRouter();
  const shopSlug = name.replace(/\s+/g, "")

  // Handle click on the card to navigate
  const handleCardClick = () => {
    router.push(`/shops/${shopSlug}`);
  };

  return (
    // The main div is now clickable
    <div
      className="max-w-sm w-full bg-white shadow-md rounded-2xl p-4 border hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between" // Added flex-col and justify-between for layout
      onClick={handleCardClick} // Attach the click handler here
    >
      <div> {/* Container for top content (logo, name, floor) */}
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border">
            <Image src={logo} alt={`${name} logo`} fill className="object-contain" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="text-sm text-gray-500">Floor: {floor}</p> {/* Changed from {floor} to Floor: {floor} for clarity */}
          </div>
        </div>

        {/* Categories Section - Added below shop details */}
        {category && category.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {category.map((cat, index) => (
              <span
                key={index}
                className="bg-orange-300 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"
              >
                {cat}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Contact and Social Icons Section - Placed at the bottom */}
      <div className="mt-4 flex items-center justify-between">
        <p className="text-sm text-gray-700">📞 {contact}</p>

        {social && (
          <div className="flex gap-3 text-xl text-gray-600">
            {social.facebook && (
              <a
                href={social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()} // STOP the event from bubbling up to the card's onClick
              >
                <FaFacebook className="hover:text-blue-600" />
              </a>
            )}
            {social.instagram && (
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()} // STOP the event from bubbling up
              >
                <FaInstagram className="hover:text-pink-500" />
              </a>
            )}
            {social.twitter && (
              <a
                href={social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()} // STOP the event from bubbling up
              >
                <FaTwitter className="hover:text-blue-400" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
