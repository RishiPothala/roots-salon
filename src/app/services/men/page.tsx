"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function MenPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;

      const offset = window.scrollY;
      heroRef.current.style.backgroundPosition = `center ${offset * 0.4}px`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { name: "Haircut", price: "₹200" },
    { name: "Advanced Haircut", price: "₹250" },
    { name: "Beard Styling", price: "₹100" },
    { name: "Clean Shave", price: "₹100" },
    { name: "Hair Spa", price: "₹600+" },
    { name: "Keratin Spa", price: "₹1500+" },
  ];

  return (
    <main>
      <Navbar />

      {/* HERO */}
      <section
        ref={heroRef}
        className="h-[80vh] flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/services/men-hero.jpg')",
        }}
      >
        <div className="bg-black/40 px-8 py-10 rounded-xl">
          <h1 className="text-5xl md:text-6xl font-serif leading-tight">
            Sharp. Clean. Refined.
          </h1>

          <p className="mt-4 text-sm tracking-widest text-orange-300">
            MEN'S GROOMING
          </p>

          <button className="mt-6 px-6 py-3 bg-[#E07B2A] rounded-full hover:scale-105 transition">
            Book Appointment
          </button>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="p-6 border border-gray-200 rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer bg-white"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-[#1A1A1A] hover:text-[#E07B2A] transition">
                  {s.name}
                </h3>

                <span className="text-[#E07B2A] font-semibold">
                  {s.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURE SECTION */}
      <section className="bg-[#F8F5F0] py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          
          <div className="relative h-[300px] rounded-2xl overflow-hidden">
            <Image
              src="/images/services/men.jpg"
              alt="men"
              fill
              className="object-cover hover:scale-105 transition duration-700"
            />
          </div>

          <div>
            <h2 className="text-4xl font-serif mb-4 text-[#1A1A1A]">
              Crafted for Confidence
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Precision grooming that enhances your personality and presence.
              Every detail matters.
            </p>

            <button className="mt-6 px-6 py-3 border border-black rounded-full hover:bg-black hover:text-white transition">
              Explore Styles
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#E07B2A] py-20 text-center text-white">
        <h2 className="text-4xl font-serif">
          Elevate Your Look Today
        </h2>

        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-black px-6 py-3 rounded-full">
            Call Now
          </button>

          <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
            WhatsApp
          </button>
        </div>
      </section>
    </main>
  );
}