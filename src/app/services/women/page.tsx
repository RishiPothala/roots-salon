"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function WomenPage() {
  const sections = [
    {
      title: "Hair Styling",
      items: [
        ["Hair Cut", "₹400"],
        ["Advanced Hair Cut", "₹800"],
        ["Blow Dry", "₹500"],
      ],
    },
    {
      title: "Hair Treatments",
      items: [
        ["Global Colour", "₹2200+"],
        ["Smoothening", "₹4500+"],
        ["Keratin", "₹5000+"],
      ],
    },
    {
      title: "Skin & Care",
      items: [
        ["Facial", "₹1200+"],
        ["Clean Up", "₹800+"],
        ["Detan", "₹600+"],
      ],
    },
  ];

  return (
    <main className="bg-white text-[#1A1A1A]">
      <Navbar />

      {/* HERO */}
      <section className="relative h-[75vh] w-full overflow-hidden">
        <Image
          src="/images/services/women-hero.jpg"
          alt="women"
          fill
          className="object-cover scale-105"
        />

        <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-center">
          <div className="animate-fadeUp">
            <h1 className="text-5xl md:text-6xl font-serif text-white leading-tight">
              Elegance in Every Detail
            </h1>
            <p className="mt-4 text-white/80 tracking-[0.2em] text-xs">
              WOMEN’S SERVICES
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 px-6 text-center max-w-3xl mx-auto animate-fadeUp">
        <p className="text-gray-500 leading-relaxed text-lg">
          Every service is thoughtfully crafted to enhance your natural beauty
          with precision, care, and refined elegance.
        </p>
      </section>

      {/* SERVICES */}
      <section className="max-w-5xl mx-auto px-6 pb-24 space-y-20">
        {sections.map((group, i) => (
          <div key={i} className="animate-fadeUp">
            
            <h2 className="text-3xl font-serif mb-8 tracking-wide">
              {group.title}
            </h2>

            <div className="space-y-5">
              {group.items.map(([name, price], j) => (
                <div
                  key={j}
                  className="group flex justify-between items-center border-b border-gray-200 pb-4 cursor-pointer"
                >
                  <span className="relative text-gray-700 group-hover:text-[#E07B2A] transition">
                    {name}

                    {/* underline animation */}
                    <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-[#E07B2A] transition-all duration-300 group-hover:w-full"></span>
                  </span>

                  <span className="text-[#E07B2A] font-medium">
                    {price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* FEATURE */}
      <section className="bg-[#F8F5F0] py-24 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          
          <div className="relative h-[400px] rounded-2xl overflow-hidden group">
            <Image
              src="/images/services/women-1.jpg"
              alt="women"
              fill
              className="object-cover transition duration-700 group-hover:scale-110"
            />
          </div>

          <div className="animate-fadeUp">
            <h2 className="text-4xl font-serif mb-6 leading-snug">
              Designed for Grace & Confidence
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg">
              From subtle styling to complete transformations, our services are
              tailored to bring out your best version with elegance and care.
            </p>

            <button className="mt-8 px-7 py-3 border border-black rounded-full hover:bg-black hover:text-white transition-all duration-300 hover:scale-105">
              Explore Packages
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#E07B2A] py-24 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-serif">
          Discover Your Signature Look
        </h2>

        <div className="mt-8 flex justify-center gap-5">
          <button className="bg-black px-7 py-3 rounded-full hover:scale-105 transition">
            Call Now
          </button>

          <button className="border border-white px-7 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300">
            WhatsApp
          </button>
        </div>
      </section>
    </main>
  );
}