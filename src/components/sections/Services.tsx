"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const services = [
  { title: "Men", image: "/images/services/men.jpg" },
  { title: "Women", image: "/images/services/women.jpg" },
  { title: "Kids", image: "/images/services/kids.jpg" },
  { title: "Bridal", image: "/images/services/bridal.jpg" },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = gsap.utils.toArray(".service-card");

    gsap.from(cards, {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#F8F5F0] py-24 px-6 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-serif">
          Every Service, Crafted with Precision
        </h2>
        <p className="text-gray-400 mt-4 text-sm tracking-widest">
          EXPERIENCE LUXURY CARE
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card relative group overflow-hidden rounded-2xl cursor-pointer"
          >
            {/* Image */}
            <Image
              src={service.image}
              alt={service.title}
              width={800}
              height={600}
              className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <h3 className="text-3xl font-serif mb-2">
                {service.title}
              </h3>

              <span className="text-sm tracking-widest opacity-0 group-hover:opacity-100 transition duration-500">
                EXPLORE →
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}