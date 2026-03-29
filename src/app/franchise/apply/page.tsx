"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useEffect } from "react";

export default function ApplyPage() {
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
      <section className="relative h-[75vh]">
        <Image
          src="/images/franchise/hero.jpg"
          alt="franchise"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center px-6">
          <div className="reveal">
            <h1 className="text-5xl md:text-6xl font-serif text-white">
              Own a ROOT’S Franchise
            </h1>
          </div>
        </div>
      </section>

      {/* ADVANTAGES + IMAGE */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        
        <div className="reveal">
          <h2 className="text-3xl font-serif mb-6">
            Why Choose ROOT’S
          </h2>

          <ul className="space-y-3 text-gray-700">
            <li>• Proven business model</li>
            <li>• Strong customer base</li>
            <li>• Marketing & branding support</li>
            <li>• Training & onboarding</li>
          </ul>
        </div>

        <div className="relative h-[350px] rounded-xl overflow-hidden reveal">
          <Image
            src="/images/franchise/interior.jpg"
            alt="interior"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* INVESTMENT */}
      <section className="bg-[#F8F5F0] py-20 text-center reveal">
        <h2 className="text-4xl font-serif mb-4">
          Investment Overview
        </h2>

        <div className="text-4xl text-[#E07B2A] font-semibold">
          ₹5L – ₹12L
        </div>
      </section>

      {/* COST + IMAGE */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        
        <div className="reveal">
          <h2 className="text-3xl font-serif mb-6">
            Cost Breakdown
          </h2>

          {[
            ["Interior Setup", "₹2L – ₹5L"],
            ["Equipment", "₹1L – ₹2L"],
            ["Branding", "₹50K – ₹1L"],
            ["Training", "₹50K"],
            ["Inventory", "₹50K – ₹1L"],
          ].map(([name, price], i) => (
            <div key={i} className="flex justify-between border-b pb-3 mb-3">
              <span>{name}</span>
              <span className="text-[#E07B2A]">{price}</span>
            </div>
          ))}
        </div>

        <div className="relative h-[350px] rounded-xl overflow-hidden reveal">
          <Image
            src="/images/franchise/setup.jpg"
            alt="setup"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* SUPPORT + IMAGE */}
      <section className="bg-[#1A1A1A] text-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          
          <div className="relative h-[300px] rounded-xl overflow-hidden reveal">
            <Image
              src="/images/franchise/team.jpg"
              alt="team"
              fill
              className="object-cover"
            />
          </div>

          <div className="reveal">
            <h2 className="text-3xl font-serif mb-6">
              Complete Support System
            </h2>

            <ul className="space-y-3 text-gray-300">
              <li>• Staff training</li>
              <li>• Marketing support</li>
              <li>• Setup guidance</li>
              <li>• Ongoing assistance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center reveal">
        <h2 className="text-3xl font-serif mb-6">
          Requirements & Terms
        </h2>

        <div className="space-y-3 text-gray-600">
          <p>• Minimum 500–800 sq.ft space</p>
          <p>• High footfall location preferred</p>
          <p>• Commitment to brand standards</p>
        </div>
      </section>

      {/* FORM */}
      <section className="bg-[#F8F5F0] py-20 text-center px-6 reveal">
        <h2 className="text-3xl font-serif mb-6">
          Get Started Today
        </h2>

        <form className="max-w-md mx-auto space-y-4">
          <input
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg"
          />

          <input
            placeholder="Phone Number"
            className="w-full p-3 border rounded-lg"
          />

          <button className="w-full bg-[#E07B2A] text-white py-3 rounded-full hover:scale-105 transition">
            Request Call Back
          </button>
        </form>
      </section>
    </main>
  );
}