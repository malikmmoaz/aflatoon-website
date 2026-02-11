import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Struggle from "@/components/sections/Struggle";
import Capabilities from "@/components/sections/Capabilities";
import BusinessTypes from "@/components/sections/BusinessTypes";
import HowItWorks from "@/components/sections/HowItWorks";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background-dark text-gray-200">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Struggle />
        <Capabilities />
        <BusinessTypes />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
