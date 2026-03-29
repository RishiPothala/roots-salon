"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useEffect } from "react";

export default function TestimonialPage() {
  const testimonials = [
    {
      name: "Priya Sharma",
      text: "Amazing service and very professional staff. I always leave feeling confident and satisfied.",
      image: "/images/testimonials/1.jpg",
    },
    {
      name: "Rahul Verma",
      text: "Great experience every time. Clean environment and skilled stylists.",
      image: "/images/testimonials/2.jpg",
    },
    {
      name: "Sneha Reddy",
      text: "Loved the ambience and attention to detail. Highly recommended!",
      image: "/images/testimonials/3.jpg",
    },
    {
      name: "Arjun Kumar",
      text: "Consistent quality and friendly staff. My go-to salon.",
      image: "/images/testimonials/1.jpg",
    },
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

      {/* HERO TESTIMONIAL */}
      <section className="bg-[#F8F5F0] py-32 px-6 text-center">
        
        <div className="max-w-3xl mx-auto reveal">
          
          <p className="text-2xl md:text-3xl font-serif italic leading-relaxed">
            “ROOT’S completely transformed my look. The attention to detail and
            professionalism is unmatched.”
          </p>

          <div className="mt-8 flex flex-col items-center">
            
            <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
              <Image
                src="/images/testimonials/1.jpg"
                alt="client"
                fill
                className="object-cover"
              />
            </div>

            <p className="font-medium">Anjali Mehta</p>
            <p className="text-gray-500 text-sm">Regular Client</p>
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="group p-6 border rounded-2xl hover:shadow-xl transition-all duration-300 reveal"
            >
              {/* IMAGE */}
              <div className="relative w-16 h-16 rounded-full overflow-hidden mb-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* TEXT */}
              <p className="text-gray-600 leading-relaxed text-sm">
                “{item.text}”
              </p>

              {/* NAME */}
              <p className="mt-4 font-medium group-hover:text-[#E07B2A] transition">
                {item.name}
              </p>

              {/* LINE ANIMATION */}
              <div className="mt-2 h-[2px] w-0 bg-[#E07B2A] group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}