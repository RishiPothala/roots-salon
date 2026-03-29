"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function BlogPage() {
  const posts = [
    {
      title: "Top 5 Hair Trends in 2026",
      image: "/images/blog/1.jpg",
    },
    {
      title: "How to Maintain Healthy Hair",
      image: "/images/blog/2.jpg",
    },
    {
      title: "Best Grooming Tips for Men",
      image: "/images/blog/3.jpg",
    },
    {
      title: "Bridal Makeup Essentials",
      image: "/images/blog/1.jpg",
    },
    {
      title: "Kids Haircare Guide",
      image: "/images/blog/2.jpg",
    },
    {
      title: "Salon Hygiene & Care",
      image: "/images/blog/3.jpg",
    },
  ];

  return (
    <main className="bg-white text-[#1A1A1A]">
      <Navbar />

      {/* HERO */}
      <section className="pt-32 pb-16 text-center px-6 bg-[#F8F5F0]">
        <h1 className="text-5xl md:text-6xl font-serif">
          Our Blog
        </h1>
        <p className="mt-4 text-gray-500">
          Insights, trends, and expert tips
        </p>
      </section>

      {/* FEATURED POST */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          <div className="relative h-[400px] rounded-2xl overflow-hidden group">
            <Image
              src="/images/blog/1.jpg"
              alt="featured"
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-serif mb-4">
              Latest Trends in Hair Styling
            </h2>

            <p className="text-gray-600 mb-6">
              Discover the latest trends in hair styling and how you can achieve
              them with ease.
            </p>

            <button className="px-6 py-3 border border-black rounded-full hover:bg-black hover:text-white transition">
              Read More
            </button>
          </div>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <div
              key={i}
              className="group cursor-pointer"
            >
              {/* IMAGE */}
              <div className="relative h-[250px] rounded-xl overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* TEXT */}
              <h3 className="mt-4 text-lg font-medium group-hover:text-[#E07B2A] transition">
                {post.title}
              </h3>

              <div className="mt-2 h-[1px] w-0 bg-[#E07B2A] group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}