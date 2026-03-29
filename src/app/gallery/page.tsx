"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useEffect } from "react";

export default function GalleryPage() {
  const images = [
    "/images/services/women-1.jpg",
    "/images/services/women-hero.jpg",
    "/images/services/kids-hero.jpg",
    "/images/services/bridal-hero.jpg",
    "/images/franchise/interior.jpg",
    "/images/franchise/setup.jpg",
    "/images/founder/portrait.jpg",
    "/images/testimonials/1.jpg",
    "/images/services/women-1.jpg",
    "/images/franchise/team.jpg",
    "/images/services/bridal-hero.jpg",
    "/images/services/kids-hero.jpg",
  ];

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <main className="bg-white text-[#1A1A1A]">
      <Navbar />

      {/* HERO */}
      <section className="pt-32 pb-20 text-center px-6 bg-[#F8F5F0] reveal">
        <h1 className="text-5xl md:text-6xl font-serif">
          Our Gallery
        </h1>

        <p className="mt-4 text-gray-500">
          A glimpse into our work and spaces
        </p>
      </section>

      {/* GRID */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
          {images.map((src, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-2xl group reveal"
            >
              <Image
                src={src}
                alt="gallery"
                width={500}
                height={600}
                className="w-full h-auto object-cover transition duration-500 group-hover:scale-105"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300"></div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}