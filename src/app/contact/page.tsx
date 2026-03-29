"use client";

import Navbar from "@/components/Navbar";
import { useEffect } from "react";

export default function ContactPage() {
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
      <section className="pt-32 pb-16 text-center px-6 bg-[#F8F5F0] reveal">
        <h1 className="text-5xl md:text-6xl font-serif">
          Book Your Appointment
        </h1>
        <p className="mt-4 text-gray-500">
          Schedule your visit with ease
        </p>
      </section>

      {/* MAIN SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-start">
        
        {/* LEFT: CONTACT INFO */}
        <div className="space-y-8 reveal">
          
          <h2 className="text-3xl font-serif">
            Contact Details
          </h2>

          <div className="space-y-6">
            
            <div>
              <p className="text-gray-500 text-sm">Phone</p>
              <p className="text-lg font-medium text-[#E07B2A]">
                +91 9700744357
              </p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Email</p>
              <p className="text-lg font-medium">
                roots@gmail.com
              </p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Location</p>
              <p className="text-gray-600">
                Kukatpally, Hyderabad
              </p>
            </div>

          </div>

          {/* MAP */}
          <div className="rounded-xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps?q=Kukatpally+Hyderabad&output=embed"
              width="100%"
              height="250"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>

        </div>

        {/* RIGHT: FORM */}
        <div className="p-8 border rounded-2xl shadow-md reveal">
          
          <h2 className="text-2xl font-serif mb-6">
            Book Appointment
          </h2>

          <form className="space-y-5">
            
            {/* NAME */}
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:border-[#E07B2A]"
              required
            />

            {/* GENDER */}
            <select className="w-full p-3 border rounded-lg focus:outline-none focus:border-[#E07B2A]">
              <option>Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

            {/* DATE + TIME */}
            <div className="grid grid-cols-2 gap-4">
              <input
                type="date"
                className="p-3 border rounded-lg focus:outline-none focus:border-[#E07B2A]"
              />
              <input
                type="time"
                className="p-3 border rounded-lg focus:outline-none focus:border-[#E07B2A]"
              />
            </div>

            {/* SERVICE */}
            <select className="w-full p-3 border rounded-lg focus:outline-none focus:border-[#E07B2A]">
              <option>Service Required</option>
              <option>Hair Cut</option>
              <option>Hair Styling</option>
              <option>Facial</option>
              <option>Bridal Makeup</option>
            </select>

            {/* BRANCH */}
            <select className="w-full p-3 border rounded-lg focus:outline-none focus:border-[#E07B2A]">
              <option>Select Branch</option>
              <option>Kukatpally</option>
              <option>Miyapur</option>
              <option>Hitech City</option>
            </select>

            {/* PHONE */}
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 border rounded-lg focus:outline-none focus:border-[#E07B2A]"
              required
            />

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border rounded-lg focus:outline-none focus:border-[#E07B2A]"
            />

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-[#E07B2A] text-white py-3 rounded-full hover:scale-105 transition"
            >
              Book Appointment
            </button>

          </form>
        </div>
      </section>
    </main>
  );
}