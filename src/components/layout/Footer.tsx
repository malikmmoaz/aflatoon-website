import React from "react";

const Footer = () => {
  return (
    <footer className="bg-background-dark border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12 items-start">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.png" width={105} alt="Aflatoon" />
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              The smartest AI-powered WhatsApp assistant for service, catering,
              and retail businesses in Pakistan.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6 text-sm tracking-wider uppercase">Product</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>
                <a className="hover:text-primary transition-colors" href="#features">
                  Features
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#how-it-works">
                  How It Works
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#pricing">
                  Pricing
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#testimonials">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6 text-sm tracking-wider uppercase">Connect</h4>
            <div className="flex gap-4 mb-6">
              <a
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-black transition-colors text-lg"
                href="https://wa.me/923239856439?text=I%20would%20like%20to%20learn%20more%20about%20Aflatoon%20AI%21"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                💬
              </a>
              <a
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-black transition-colors text-lg"
                href="mailto:team@aflatoon.ai"
                aria-label="Email"
              >
                ✉️
              </a>
            </div>
            <p className="text-sm text-gray-500">team@aflatoon.ai</p>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-center items-center gap-6">
          <p className="text-sm text-gray-500">
            © 2025 Aflatoon. Made with ❤️ for the Pakistani business community.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
