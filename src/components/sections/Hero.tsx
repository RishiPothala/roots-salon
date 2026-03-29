"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Hero() {
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const frameCount = 132;
  const images: HTMLImageElement[] = [];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // 🔥 PRELOAD ALL IMAGES (VERY IMPORTANT)
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      const frame = String(i).padStart(3, "0");
      img.src = `/videos/ezgif-frame-${frame}.jpg`;
      images.push(img);
    }

    const obj = { frame: 1 };

    gsap.to(obj, {
      frame: frameCount,
      ease: "none",
      snap: "frame",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=300%", // 👈 IMPORTANT: gives enough scroll space
        scrub: 1, // 👈 smooth interpolation
        pin: true,
        markers: false,
      },
      onUpdate: () => {
        const frame = Math.floor(obj.frame);
        const frameString = String(frame).padStart(3, "0");

        if (imageRef.current) {
          imageRef.current.src = `/videos/ezgif-frame-${frameString}.jpg`;
        }
      },
    });
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden">
      
      {/* IMAGE */}
      <img
        ref={imageRef}
        src="/videos/ezgif-frame-001.jpg"
        className="absolute top-0 left-0 w-full h-full object-cover"
        alt="frame"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* TEXT */}
      <div className="relative z-10 flex h-full items-center justify-center text-center text-white">
        <div>
          <h1 className="text-5xl md:text-6xl font-serif leading-tight">
            Where Every Visit <br /> Becomes a Transformation
          </h1>

          <p className="mt-4 text-orange-400 tracking-widest">
            ROOT’S — THE FAMILY SALON
          </p>
        </div>
      </div>
    </div>
  );
}