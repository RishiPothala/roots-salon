"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function KidsPage() {
  const services = [
    ["Kids Haircut", "₹200"],
    ["Stylish Cut", "₹250"],
    ["Hair Wash + Styling", "₹400"],
    ["Special Occasion Styling", "₹600+"],
  ];

  return (
    <main className="bg-white text-[#1A1A1A]">
      <Navbar />

      {/* HERO */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <Image
          src="/images/services/kids-hero.jpg"
          alt="kids"
          fill
          className="object-cover scale-105"
        />

        <div className="absolute inset-0 bg-black/20 flex items-center justify-center text-center">
          <div className="animate-fadeUp">
            <h1 className="text-5xl md:text-6xl font-serif text-white">
              Happy Looks for Little Smiles
            </h1>
            <p className="mt-4 text-white/80 tracking-[0.2em] text-xs">
              KIDS SERVICES
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 px-6 text-center max-w-3xl mx-auto">
        <p className="text-gray-500 text-lg leading-relaxed">
          We make every visit fun, comfortable, and stress-free for kids —
          ensuring they leave with a smile and a style they love.
        </p>
      </section>

      {/* SERVICES CARDS */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map(([name, price], i) => (
            <div
              key={i}
              className="group p-6 rounded-2xl border border-gray-200 bg-[#F8F5F0] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-lg font-medium group-hover:text-[#E07B2A] transition">
                {name}
              </h3>

              <p className="mt-2 text-[#E07B2A] font-semibold">
                {price}
              </p>

              <div className="mt-4 h-[2px] w-0 bg-[#E07B2A] group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURE */}
      <section className="bg-[#F8F5F0] py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          
          <div>
            <h2 className="text-4xl font-serif mb-6">
              Comfort First, Style Always
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg">
              Our team ensures a calm and friendly environment where kids feel
              relaxed, making every haircut an enjoyable experience.
            </p>

            <button className="mt-8 px-7 py-3 border border-black rounded-full hover:bg-black hover:text-white transition">
              Learn More
            </button>
          </div>

          <div className="relative h-[350px] rounded-2xl overflow-hidden group">
            <Image
              src="/images/services/kids-1.jpg"
              alt="kids"
              fill
              className="object-cover transition duration-700 group-hover:scale-110"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#E07B2A] py-24 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-serif">
          Book a Fun Experience Today
        </h2>

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