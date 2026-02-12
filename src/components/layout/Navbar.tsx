import React from "react";

const Navbar = () => {
  return (
    <header className="w-full sticky top-0 z-50 bg-background-dark/80 backdrop-blur-md border-b border-primary/10">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="/logo.png" width={105} alt="Aflatoon" />
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
          <a
            className="text-sm font-medium hover:text-primary transition-colors"
            href="#testimonials"
          >
            Testimonials
          </a>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://wa.me/923239856439?text=I%20would%20like%20to%20learn%20more%20about%20Aflatoon%20AI%21"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-primary text-black font-bold px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity text-sm">
              Get Started
            </button>
          </a>
        </div>
        <a
          className="md:hidden"
          href="https://wa.me/923239856439?text=I%20would%20like%20to%20learn%20more%20about%20Aflatoon%20AI%21"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-primary text-black font-bold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity text-sm">
            Get Started
          </button>
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
