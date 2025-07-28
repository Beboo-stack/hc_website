"use client";
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AutomaticCarousel = ({ slides }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollTo = useCallback(
    (idx) => emblaApi && emblaApi.scrollTo(idx),
    [emblaApi]
  );

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    
    const autoScroll = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000); 

    return () => {
      clearInterval(autoScroll);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="h-full w-full" ref={emblaRef}>
          <div className="flex h-full">
            {slides[0].map((slide, idx) => (
              <div
                className="flex-[0_0_100%] relative h-full"
                key={idx}
                style={{ minWidth: 0 }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                  <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white">
                    <div className="text-lg font-semibold mb-2">EVENT</div>
                    <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
                    <p className="mb-6">{slide.subtitle}</p>
                    <button className="px-6 py-2 bg-white text-black font-semibold rounded hover:bg-gray-200">
                      {slide.button}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides[0].map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${
              idx === selectedIndex ? "bg-red-500" : "bg-red-500/50"
            }`}
            onClick={() => scrollTo(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default AutomaticCarousel;