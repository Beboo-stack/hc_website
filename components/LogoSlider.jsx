"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { logosCarousels } from "@/lib/contentful";

const LogoSlider = () => {
  const [logos, setLogos] = useState([]);

  const duplicateLogos = (logos) => {
    return logos.concat(logos);
  };

  useEffect(() => {
    const fetchLogos = async () => {
      const entries = await logosCarousels();
      // Flatten all logos arrays into one big array of URLs
      const allLogos = entries.flatMap((entry) =>
        entry.fields.logos.map((asset) => asset.fields.file.url)
      );
      setLogos(duplicateLogos(allLogos));
    };
    fetchLogos();
  }, []);

  return (
    <div className="overflow-hidden w-full bg-white py-6">
      <div className="slide-track flex w-fit animate-slide">
        {logos.map((logoUrl, index) => (
          <div
            key={index}
            className="flex items-center justify-center px-8 min-w-[150px] h-[80px]"
          >
            <Image
              src={`https:${logoUrl}`} // ✅ prepend https:
              alt={`Logo ${index}`}
              width={120}
              height={60}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
