import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Transformations from "@/components/sections/Transformations";
import Testimonials from "@/components/sections/Testimonials";
import Gallery from "@/components/sections/Gallery";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Transformations />
      <Testimonials />
      <Gallery />
      <CTA />
    </main>
  );
}