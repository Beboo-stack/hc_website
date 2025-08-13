"use client";
import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const ImageGallery = ({ images, height = "h-[400px]" }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Don't render if no images
  if (!images || images.length === 0) {
    return null;
  }

  const openModal = (image, index) => {
    setSelectedImage({ image, index });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      {/* Thumbnail Gallery */}
      <section className={`${height} overflow-hidden rounded-lg`}>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 h-full">
          {images.map((image, idx) => (
            <div
              key={idx}
              className="relative group cursor-pointer overflow-hidden rounded-lg"
              onClick={() => openModal(image, idx)}
            >
              <Image
                src={image}
                alt={`Image ${idx + 1}`}
                width={300}
                height={300}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="relative w-full max-w-6xl my-8">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors duration-200"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
            
            {/* Image Container */}
            <div className="relative w-full">
              <Image
                src={selectedImage.image}
                alt={`Image ${selectedImage.index + 1}`}
                width={1200}
                height={800}
                className="w-full h-auto max-h-[80vh] object-contain"
                priority
              />
            </div>
            
            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
              {selectedImage.index + 1} of {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;
