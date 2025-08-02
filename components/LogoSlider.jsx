"use client";
import Image from "next/image";
import React from "react";
import { logos } from "@/data";

const repeatedLogos = [...logos, ...logos]; // Must repeat for seamless animation

const LogoSlider = () => {
  return (
    <div className="overflow-hidden w-full bg-white py-6">
      <div className="slide-track flex w-fit animate-slide">
        {repeatedLogos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center px-8 min-w-[150px] h-[80px]"
          >
            <Image
              src={logo}
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
