"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CategoryCard = ({ category }) => {
  const router = useRouter();
  const slug = category.name.toLowerCase().trim().replace(/\s+/g, "-");

  // Handle click on the card to navigate
  const handleCardClick = () => {
    router.push(`/categories/${slug}`);
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={() => {
        handleCardClick();
      }}
    >
      <div className="relative h-48 w-full">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 text-center">
          {category.name}
        </h3>
      </div>
    </div>
  );
};

export default CategoryCard;
