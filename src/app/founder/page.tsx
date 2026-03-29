"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useEffect } from "react";

export default function FounderPage() {
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
    <main className="bg-white text-[#1A1A1A] overflow-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <Image
          src="/images/founder/hero.jpg"
          alt="founder"
          fill
          className="object-cover scale-110"
        />

        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-serif text-white reveal">
            The Vision Behind ROOT’S
          </h1>
        </div>
      </section>

      {/* INTRO SPLIT */}
      <section className="max-w-6xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center">
        
        <div className="reveal">
          <h2 className="text-5xl font-serif mb-6">
            [Founder Name]
          </h2>

          <p className="text-gray-600 leading-relaxed text-lg">
            ROOT’S was built with a simple belief — quality and consistency
            should never be compromised. What started as a vision is now growing
            into a trusted name in grooming.
          </p>
        </div>

        <div className="relative h-[500px] rounded-2xl overflow-hidden reveal">
          <Image
            src="/images/founder/portrait.jpg"
            alt="portrait"
            fill
            className="object-cover parallax-img"
          />
        </div>
      </section>

      {/* STORY SECTION (FLOAT STYLE) */}
      <section className="bg-[#F8F5F0] py-32 px-6">
        <div className="max-w-5xl mx-auto text-center reveal">
          
          <h2 className="text-4xl font-serif mb-8">
            The Journey
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            From a single setup to a growing brand, the journey of ROOT’S has
            always been driven by attention to detail and customer trust. Every
            step was built on understanding what truly matters to clients.
          </p>
        </div>
      </section>

      {/* IMAGE + TEXT (PARALLAX FEEL) */}
      <section className="max-w-6xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center">
        
        <div className="relative h-[400px] rounded-2xl overflow-hidden reveal">
          <Image
            src="/images/founder/work.jpg"
            alt="work"
            fill
            className="object-cover parallax-img"
          />
        </div>

        <div className="reveal">
          <h2 className="text-4xl font-serif mb-6">
            Built with Precision
          </h2>

          <p className="text-gray-600 leading-relaxed text-lg">
            Every service, every setup, and every branch reflects a commitment
            to delivering consistent quality — something that defines ROOT’S.
          </p>
        </div>
      </section>

      {/* VISION */}
      <section className="bg-[#1A1A1A] text-white py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto reveal">
          <h2 className="text-4xl font-serif mb-6">
            Vision
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            To build a strong, recognizable salon brand that delivers consistent
            quality across locations while maintaining customer trust.
          </p>
        </div>
      </section>

      {/* FINAL IMAGE */}
      <section className="relative h-[70vh]">
        <Image
          src="/images/founder/salon.jpg"
          alt="salon"
          fill
          className="object-cover scale-105"
        />
      </section>

      {/* QUOTE */}
      <section className="py-28 text-center px-6">
        <p className="text-2xl md:text-3xl font-serif italic max-w-3xl mx-auto reveal">
          “Consistency, quality, and trust — that’s what builds a brand that lasts.”
        </p>
      </section>
    </main>
  );
}