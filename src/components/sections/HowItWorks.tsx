import React from 'react';
import { Smartphone, FileText, Link, Rocket } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    { step: 1, title: 'Connect WhatsApp', desc: 'Scan QR code to link your business WhatsApp number.', icon: Smartphone },
    { step: 2, title: 'Upload Menu & Policies', desc: 'Share your digital menu, pricing, and business policies for Aflatoon to learn.', icon: FileText },
    { step: 3, title: 'Sync Calendar / POS', desc: 'Connect your existing tools to automate availability and order tracking.', icon: Link },
    { step: 4, title: 'Go Live', desc: 'Aflatoon starts taking orders and bookings 24/7 without intervention.', icon: Rocket },
  ];

  return (
    <section className="py-24 container mx-auto px-6" id="how-it-works">
      <div className="text-center mb-16">
        <span className="inline-block px-3 py-1 mb-4 text-xs font-bold text-primary bg-primary/10 rounded-full border border-primary/20 tracking-widest uppercase">
          Setup
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">How It Works</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Your AI assistant is ready in four simple steps.</p>
      </div>
      <div className="grid md:grid-cols-4 gap-8 relative">
        <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 flow-line"></div>
        {steps.map((item, index) => (
          <div key={index} className="text-center relative">
            <div className="w-20 h-20 bg-card-dark border-2 border-primary/30 rounded-2xl flex items-center justify-center mx-auto mb-6 relative z-10">
              <item.icon className="w-8 h-8 text-primary" />
            </div>
            <div className="text-xs font-bold text-primary mb-2 tracking-wider">STEP {item.step}</div>
            <h3 className="font-bold text-white mb-2">{item.title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
