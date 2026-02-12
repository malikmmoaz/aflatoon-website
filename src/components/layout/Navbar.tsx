import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="w-full sticky top-0 z-50 bg-background-dark/80 backdrop-blur-md border-b border-primary/10">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center" aria-label="Main navigation">
        <div className="flex items-center gap-3">
          <a href="/" aria-label="Aflatoon - Home">
            <Image src="/logo.png" alt="Aflatoon AI Logo" width={105} height={30} priority />
          </a>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a
            className="text-sm font-medium hover:text-primary transition-colors"
            href="#features"
          >
            Features
          </a>
          <a
            className="text-sm font-medium hover:text-primary transition-colors"
            href="#how-it-works"
          >
            How It Works
          </a>
          <a
            className="text-sm font-medium hover:text-primary transition-colors"
            href="#pricing"
          >
            Pricing
          </a>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <a
            className="bg-primary text-black font-bold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity text-sm"
            href="https://wa.me/923239856439?text=I%20would%20like%20to%20learn%20more%20about%20Aflatoon%20AI%21"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get Started - Contact us on WhatsApp"
          >
            Get Started
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
