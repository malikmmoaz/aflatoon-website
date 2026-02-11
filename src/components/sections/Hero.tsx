import React from 'react';
import WhatsAppMockup from './WhatsAppMockup';

const Hero = () => {
  return (
    <section className="container mx-auto px-6 py-16 md:py-28">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold text-primary bg-primary/10 rounded-full border border-primary/20">
            AI Assistant for Service & Food
          </span>
          <h1 className="text-5xl md:text-7xl font-black !leading-tight text-white mb-6">
            Your 24/7 WhatsApp Assistant — in <span className="text-primary">Urdu & English</span>
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-xl">
            Aflatoon takes orders, schedules appointments, and manages deliveries via voice notes. Your customers talk, Aflatoon handles the business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-primary text-black font-bold px-8 py-4 rounded-xl text-lg hover:shadow-[0_0_30px_-5px_rgba(56,224,123,0.5)] transition-all">
              Start Free Trial
            </button>
            <button className="bg-card-dark text-white border border-gray-700 font-bold px-8 py-4 rounded-xl text-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">play_circle</span> See Demo
            </button>
          </div>
        </div>
        <WhatsAppMockup />
      </div>
    </section>
  );
};

export default Hero;
