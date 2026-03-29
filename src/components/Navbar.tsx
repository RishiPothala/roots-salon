"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm">
      
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* LOGO */}
        <Link
          href="/"
          className="text-xl font-semibold text-[#1A1A1A] tracking-wide"
        >
          ROOT’S
        </Link>

        {/* NAV LINKS */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          
          {/* HOME */}
          <Link href="/" className="text-[#1A1A1A] hover:text-[#E07B2A] transition">
            Home
          </Link>

          {/* SERVICES */}
          <div className="relative group">
            <span className="cursor-pointer text-[#1A1A1A] hover:text-[#E07B2A] transition">
              Services
            </span>

            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              
              <div className="bg-white shadow-xl rounded-2xl p-3 w-52 border border-gray-100">
                <Link href="/services/men" className="block px-4 py-2 rounded-lg hover:bg-[#F8F5F0]">
                  Men
                </Link>
                <Link href="/services/women" className="block px-4 py-2 rounded-lg hover:bg-[#F8F5F0]">
                  Women
                </Link>
                <Link href="/services/kids" className="block px-4 py-2 rounded-lg hover:bg-[#F8F5F0]">
                  Kids
                </Link>
                <Link href="/services/bridal" className="block px-4 py-2 rounded-lg hover:bg-[#F8F5F0]">
                  Bridal
                </Link>
              </div>
            </div>
          </div>

          {/* FRANCHISE */}
          <div className="relative group">
            <span className="cursor-pointer text-[#1A1A1A] hover:text-[#E07B2A] transition">
              Franchise
            </span>

            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              
              <div className="bg-white shadow-xl rounded-2xl p-3 w-52 border border-gray-100">
                <Link href="/franchise/branches" className="block px-4 py-2 rounded-lg hover:bg-[#F8F5F0]">
                  Our Branches
                </Link>
                <Link href="/franchise/apply" className="block px-4 py-2 rounded-lg hover:bg-[#F8F5F0]">
                  Apply Now
                </Link>
              </div>
            </div>
          </div>

          {/* FOUNDER */}
          <Link href="/founder" className="text-[#1A1A1A] hover:text-[#E07B2A] transition">
            Founder
          </Link>

          {/* BLOG */}
          <Link href="/blog" className="text-[#1A1A1A] hover:text-[#E07B2A] transition">
            Blog
          </Link>

          {/* TESTIMONIALS */}
          <Link href="/testimonials" className="text-[#1A1A1A] hover:text-[#E07B2A] transition">
            Testimonials
          </Link>

          {/* GALLERY */}
          <Link href="/gallery" className="text-[#1A1A1A] hover:text-[#E07B2A] transition">
            Gallery
          </Link>

          {/* CONTACT */}
          <Link href="/contact" className="text-[#1A1A1A] hover:text-[#E07B2A] transition">
            Contact
          </Link>
        </div>

        {/* CTA */}
        <Link
          href="/contact"
          className="bg-[#E07B2A] px-5 py-2 rounded-full text-white hover:bg-orange-600 transition"
        >
          Book Now
        </Link>
      </div>
    </nav>
  );
}