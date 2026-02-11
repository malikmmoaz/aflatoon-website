import React from 'react';

const Navbar = () => {
  return (
    <header className="w-full sticky top-0 z-50 bg-background-dark/80 backdrop-blur-md border-b border-primary/10">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 text-primary">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z" fill="currentColor"></path>
            </svg>
          </div>
          <h2 className="text-xl font-bold text-white">Aflatoon</h2>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#features">Features</a>
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#how-it-works">How It Works</a>
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#pricing">Pricing</a>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <a className="text-sm font-bold px-4 py-2 rounded-lg hover:bg-primary/10 transition-colors" href="#">Login</a>
          <button className="bg-primary text-black font-bold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
            Get Started
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
