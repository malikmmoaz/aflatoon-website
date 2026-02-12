import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-background-dark border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12 items-center justify-center">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-3">
                <Image src="/logo.png" alt="Aflatoon AI Logo" width={105} height={30} />
              </div>
            </div>
            <p className="text-sm text-gray-500">
              The smartest AI-powered WhatsApp assistant for service, catering,
              and retail businesses in Pakistan.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>
                <a className="hover:text-primary" href="#features">
                  F&B Features
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="#pricing">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          {/*<div>
            <h4 className="font-bold text-white mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>
                <a className="hover:text-primary" href="#">
                  About Us
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="#">
                  Partner Program
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="#">
                  Contact
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="#">
                  Support
                </a>
              </li>
            </ul>
          </div>*/}
          <div>
            <h4 className="font-bold text-white mb-6">Connect</h4>
            <div className="flex gap-4">
              <a
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-black transition-colors"
                href="https://wa.me/923239856439?text=I%20would%20like%20to%20learn%20more%20about%20Aflatoon%20AI%21"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact us on WhatsApp"
              >
                <span className="material-symbols-outlined text-xl">
                  message
                </span>
              </a>
              <a
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-black transition-colors"
                href="mailto:team@aflatoon.ai"
                aria-label="Email us at team@aflatoon.ai"
              >
                <span className="material-symbols-outlined text-xl">mail</span>
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-center items-center gap-6">
          <p className="text-sm text-gray-500">
            © 2024 Aflatoon. Made with ❤️ for the Pakistani business community.
          </p>
          {/*<div className="flex gap-6 text-sm text-gray-500">
            <a className="hover:text-primary" href="#">
              Terms
            </a>
            <a className="hover:text-primary" href="#">
              Privacy
            </a>
            <a className="hover:text-primary" href="#">
              Cookies
            </a>
          </div>*/}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
