"use client";

import { useRef, useState } from "react";

export default function Transformations() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);

  const updatePosition = (clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = clientX - rect.left;
    const percent = (x / rect.width) * 100;

    setPosition(Math.max(0, Math.min(100, percent)));
  };

  // Mouse Events
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging) return;
    updatePosition(e.clientX);
  };

  const handleMouseUp = () => setDragging(false);

  // Touch Events (mobile)
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!dragging) return;
    updatePosition(e.touches[0].clientX);
  };

  return (
    <section className="bg-white py-24 px-6">
      
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif">
          Transformations That Speak
        </h2>
        <p className="text-gray-400 mt-4 text-sm tracking-widest">
          BEFORE & AFTER
        </p>
      </div>

      {/* Slider */}
      <div className="max-w-5xl mx-auto">
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseUp}
          className="relative w-full h-[450px] overflow-hidden rounded-2xl"
        >
          {/* AFTER */}
          <img
            src="/images/transform/after.jpg"
            className="absolute w-full h-full object-cover"
          />

          {/* BEFORE */}
          <div
            className="absolute top-0 left-0 h-full overflow-hidden"
            style={{ width: `${position}%` }}
          >
            <img
              src="/images/transform/before.jpg"
              className="w-full h-full object-cover"
            />
          </div>

          {/* DRAG LINE */}
          <div
            className="absolute top-0 h-full w-[2px] bg-white cursor-ew-resize"
            style={{ left: `${position}%` }}
          >
            {/* HANDLE */}
            <div
              onMouseDown={() => setDragging(true)}
              onTouchStart={() => setDragging(true)}
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#E07B2A] flex items-center justify-center shadow-lg"
            >
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}