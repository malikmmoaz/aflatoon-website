import React from 'react';

const HowItWorks = () => {
  const steps = [
    { step: 1, title: 'Connect WhatsApp', desc: 'Scan QR code to link your business WhatsApp number.' },
    { step: 2, title: 'Upload Menu & Policies', desc: 'Share your digital menu, pricing, and business policies for Aflatoon to learn.' },
    { step: 3, title: 'Sync Calendar / POS', desc: 'Connect your existing tools to automate availability and order tracking.' },
    { step: 4, title: 'Go Live', desc: 'Aflatoon starts taking orders and bookings 24/7 without intervention.' },
  ];

  return (
    <section className="py-24 container mx-auto px-6" id="how-it-works">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">How It Works</h2>
        <p className="text-gray-400">Your AI assistant is ready in four simple steps.</p>
      </div>
      <div className="grid md:grid-cols-4 gap-8">
        {steps.map((item, index) => (
          <div key={index} className="text-center">
            <div className="w-12 h-12 bg-primary text-black font-black rounded-full flex items-center justify-center mx-auto mb-6">{item.step}</div>
            <h3 className="font-bold text-white mb-2">{item.title}</h3>
            <p className="text-sm text-gray-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
