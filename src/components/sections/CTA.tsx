"use client";

export default function CTA() {
  return (
    <section className="bg-[#E07B2A] py-20 px-6 text-center">
      
      <div className="max-w-3xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
          Your Best Look Is One Appointment Away
        </h2>

        {/* Sub */}
        <p className="text-white/80 mt-4 text-sm tracking-wide">
          Experience premium grooming at Root’s — The Family Salon
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
          
          {/* Call */}
          <a
            href="tel:9700744357"
            className="bg-black text-white px-6 py-3 rounded-full hover:bg-[#1A1A1A] transition"
          >
            Call Now
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919700744357"
            target="_blank"
            className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}