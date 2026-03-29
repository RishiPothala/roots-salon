"use client";

import { useState } from "react";

const images = [
  "/images/gallery/1.jpg",
  "/images/gallery/2.jpg",
  "/images/gallery/3.jpg",
  "/images/gallery/4.jpg",
  "/images/gallery/5.jpg",
  "/images/gallery/6.jpg",
  "/images/gallery/7.jpg",
  "/images/gallery/8.jpg",
];

export default function Gallery() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="bg-white py-24 px-6">
      
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif">
          The Work Speaks
        </h2>
        <p className="text-gray-400 mt-4 text-sm tracking-widest">
          OUR GALLERY
        </p>
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 md:columns-3 gap-4 max-w-6xl mx-auto">
        {images.map((src, index) => (
          <div
            key={index}
            className="mb-4 break-inside-avoid cursor-pointer group relative"
            onClick={() => setSelected(src)}
          >
            <img
              src={src}
              className="w-full rounded-xl transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-500 rounded-xl" />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <img
            src={selected}
            className="max-w-[90%] max-h-[90%] rounded-lg"
          />
        </div>
      )}
    </section>
  );
}