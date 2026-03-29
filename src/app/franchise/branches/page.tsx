"use client";

import Navbar from "@/components/Navbar";

export default function BranchesPage() {
  const branches = [
    {
      name: "Kukatpally Branch",
      address: "KPHB Colony, Hyderabad",
      phone: "+91 9700744357",
    },
    {
      name: "Miyapur Branch",
      address: "Miyapur Main Road, Hyderabad",
      phone: "+91 9700744357",
    },
    {
      name: "Hitech City Branch",
      address: "Near Cyber Towers, Hyderabad",
      phone: "+91 9700744357",
    },
  ];

  return (
    <main className="bg-white text-[#1A1A1A]">
      <Navbar />

      {/* HERO */}
      <section className="pt-32 pb-20 text-center px-6 bg-[#F8F5F0]">
        <h1 className="text-5xl md:text-6xl font-serif">
          Our Branches
        </h1>
        <p className="mt-4 text-gray-500">
          Find a ROOT’S salon near you
        </p>
      </section>

      {/* BRANCH CARDS */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-8">
        {branches.map((branch, i) => (
          <div
            key={i}
            className="p-6 border border-gray-200 rounded-2xl hover:shadow-xl transition"
          >
            <h3 className="text-xl font-serif mb-3">
              {branch.name}
            </h3>

            <p className="text-gray-600 text-sm">
              {branch.address}
            </p>

            <p className="mt-3 text-[#E07B2A] font-medium">
              {branch.phone}
            </p>

            <button className="mt-5 px-5 py-2 border border-black rounded-full hover:bg-black hover:text-white transition">
              Get Directions
            </button>
          </div>
        ))}
      </section>

      {/* GOOGLE MAP */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-lg">
          
          <iframe
            src="https://www.google.com/maps?q=Kukatpally+Hyderabad&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#E07B2A] py-24 text-center text-white">
        <h2 className="text-4xl font-serif">
          Want to Open Your Own ROOT’S?
        </h2>

        <div className="mt-6">
          <a
            href="/franchise/apply"
            className="bg-black px-7 py-3 rounded-full"
          >
            Apply for Franchise
          </a>
        </div>
      </section>
    </main>
  );
}