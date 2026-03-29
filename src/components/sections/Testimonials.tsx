"use client";

import { useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Ayesha K.",
    service: "Bridal Makeup",
    review: "Absolutely loved the experience. The team made my big day perfect.",
  },
  {
    name: "Rahul S.",
    service: "Haircut",
    review: "Best haircut I’ve had in Hyderabad. Clean, sharp, and professional.",
  },
  {
    name: "Sneha R.",
    service: "Facial",
    review: "My skin feels amazing. Highly recommend their facial treatments.",
  },
  {
    name: "Arjun M.",
    service: "Beard Styling",
    review: "Attention to detail is insane. Loved the final look.",
  },
];

export default function Testimonials() {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scrollAmount = 0;
    const speed = 0.3;

    const animate = () => {
      if (!sliderRef.current) return;

      scrollAmount += speed;
      sliderRef.current.scrollLeft = scrollAmount;

      if (
        sliderRef.current.scrollLeft >=
        sliderRef.current.scrollWidth / 2
      ) {
        scrollAmount = 0;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <section className="bg-[#F8F5F0] py-24 px-6 overflow-hidden">
      
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A]">
          Words That Mean Everything
        </h2>
        <p className="text-gray-500 mt-4 text-sm tracking-widest">
          CLIENT TESTIMONIALS
        </p>
      </div>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex gap-6 overflow-x-hidden"
      >
        {[...testimonials, ...testimonials].map((t, index) => (
          <div
            key={index}
            className="min-w-[300px] bg-white shadow-lg p-6 rounded-2xl flex-shrink-0 border border-gray-100"
          >
            {/* Stars */}
            <div className="text-[#E07B2A] mb-3 text-lg">
              ★★★★★
            </div>

            {/* Review */}
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              {t.review}
            </p>

            {/* Info */}
            <div>
              <h4 className="font-semibold text-[#1A1A1A]">
                {t.name}
              </h4>
              <p className="text-xs text-gray-400">
                {t.service}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}