import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-background-dark border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 text-primary">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z" fill="currentColor"></path>
                </svg>
              </div>
              <h2 className="text-xl font-bold text-white">Aflatoon</h2>
            </div>
            <p className="text-sm text-gray-500">The smartest AI-powered WhatsApp assistant for service, catering, and retail businesses in Pakistan.</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a className="hover:text-primary" href="#">F&B Features</a></li>
              <li><a className="hover:text-primary" href="#">Appointments</a></li>
              <li><a className="hover:text-primary" href="#">Pricing</a></li>
              <li><a className="hover:text-primary" href="#">Roadmap</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a className="hover:text-primary" href="#">About Us</a></li>
              <li><a className="hover:text-primary" href="#">Partner Program</a></li>
              <li><a className="hover:text-primary" href="#">Contact</a></li>
              <li><a className="hover:text-primary" href="#">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6">Connect</h4>
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-black transition-colors" href="#">
                <span className="material-symbols-outlined text-xl">share</span>
              </a>
              <a className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-black transition-colors" href="#">
                <span className="material-symbols-outlined text-xl">mail</span>
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-500">© 2024 Aflatoon. Made with ❤️ for the Pakistani business community.</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a className="hover:text-primary" href="#">Terms</a>
            <a className="hover:text-primary" href="#">Privacy</a>
            <a className="hover:text-primary" href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
