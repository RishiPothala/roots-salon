"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function BridalPage() {
  const services = [
    ["Bridal Makeup", "₹15000+"],
    ["Reception Makeup", "₹5500+"],
    ["Engagement Look", "₹4500+"],
    ["Trial Makeup", "₹2500"],
  ];

  return (
    <main className="bg-white text-[#1A1A1A]">
      <Navbar />

      {/* HERO */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <Image
          src="/images/services/bridal-hero.jpg"
          alt="bridal"
          fill
          className="object-cover scale-105"
        />

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center">
          <div className="animate-fadeUp">
            <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight">
              Your Day. Your Glow.
            </h1>

            <p className="mt-4 text-white/80 tracking-[0.25em] text-xs">
              BRIDAL MAKEUP
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 px-6 text-center max-w-3xl mx-auto">
        <p className="text-gray-500 text-lg leading-relaxed">
          Every bride deserves to feel confident, radiant, and unforgettable.
          Our bridal services are crafted to enhance your natural beauty while
          making your special day truly timeless.
        </p>
      </section>

      {/* SERVICES */}
      <section className="max-w-4xl mx-auto px-6 pb-24 space-y-8">
        {services.map(([name, price], i) => (
          <div
            key={i}
            className="group flex justify-between items-center border-b border-gray-200 pb-4 cursor-pointer"
          >
            <span className="relative text-lg group-hover:text-[#E07B2A] transition">
              {name}
              <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-[#E07B2A] transition-all duration-300 group-hover:w-full"></span>
            </span>

            <span className="text-[#E07B2A] font-medium text-lg">
              {price}
            </span>
          </div>
        ))}
      </section>

      {/* FEATURE SECTION (DARK LUXURY) */}
      <section className="bg-[#1A1A1A] text-white py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          
          <div className="relative h-[400px] rounded-2xl overflow-hidden group">
            <Image
              src="/images/services/bridal-1.jpg"
              alt="bridal"
              fill
              className="object-cover transition duration-700 group-hover:scale-110"
            />
          </div>

          <div className="animate-fadeUp">
            <h2 className="text-4xl font-serif mb-6 leading-snug">
              Crafted for Your Once-in-a-Lifetime Moment
            </h2>

            <p className="text-gray-300 leading-relaxed text-lg">
              We focus on precision, elegance, and perfection — ensuring you
              look flawless in every moment, from ceremony to celebration.
            </p>

            <button className="mt-8 px-7 py-3 border border-white rounded-full hover:bg-white hover:text-black transition-all duration-300">
              View Bridal Packages
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#E07B2A] py-24 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-serif">
          Book Your Bridal Experience
        </h2>

        <p className="mt-4 text-white/80">
          Limited slots available for upcoming weddings
        </p>

        <div className="mt-8 flex justify-center gap-5">
          <button className="bg-black px-7 py-3 rounded-full hover:scale-105 transition">
            Call Now
          </button>

          <button className="border border-white px-7 py-3 rounded-full hover:bg-white hover:text-black transition">
            WhatsApp
          </button>
        </div>
      </section>
    </main>
  );
}