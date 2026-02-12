import React from "react";
import WhatsAppMockup from "./WhatsAppMockup";

const Hero = () => {
  return (
    <section className="container mx-auto px-6 py-20 md:py-32">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="text-center md:text-left">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold text-primary bg-primary/10 rounded-full border border-primary/20 tracking-widest uppercase">
            Limited Availability — Apply Now
          </span>
          <h1 className="text-4xl md:text-6xl font-black !leading-tight text-white mb-6">
            AI Operating System for{" "}
            <span className="text-primary">
              Restaurants &amp; Service Providers
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
            Aflatoon takes orders, schedules appointments, and manages
            deliveries on text, voice and call. Grow, nurture, and retain every
            customer with 24/7 VIP treatment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
            <a
              href="https://wa.me/923239856439?text=I%20would%20like%20to%20learn%20more%20about%20Aflatoon%20AI%21"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-primary text-black font-bold px-8 py-4 rounded-xl text-lg hover:shadow-[0_0_30px_-5px_rgba(56,224,123,0.5)] transition-all">
                Get Started
              </button>
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6 justify-center md:justify-start text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
              500+ Businesses Onboarded
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
              Urdu &amp; English Support
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
              24/7 Availability
            </div>
          </div>
        </div>
        <WhatsAppMockup />
      </div>
    </section>
  );
};

export default Hero;
