import React from "react";

const Pricing = () => {
  return (
    <section className="py-24 bg-card-dark/30" id="pricing">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-bold text-primary bg-primary/10 rounded-full border border-primary/20 tracking-widest uppercase">
            Pricing
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Plans designed for small cafes to large service chains.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Starter */}
          <div className="bg-background-dark p-8 rounded-2xl border border-gray-800 hover:border-primary/40 transition-all duration-300 flex flex-col">
            <h3 className="text-xl font-bold mb-2 text-white">Starter</h3>
            <div className="text-4xl font-black text-white mb-1">
              Rs. 9,999
            </div>
            <p className="text-sm text-gray-500 mb-6">per month</p>
            <ul className="space-y-4 mb-8 text-gray-400 flex-grow">
              <li className="flex items-center gap-3">
                <span className="text-primary text-lg">✓</span>
                Up to 100 transactions
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary text-lg">✓</span>
                1 WhatsApp number
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary text-lg">✓</span>
                Basic Menu Learning
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <span className="text-lg">✗</span>
                Rider Dispatch
              </li>
            </ul>
            <a
              href="https://wa.me/923239856439?text=I%20would%20like%20to%20learn%20more%20about%20Aflatoon%20AI%21"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full py-3 rounded-xl border border-primary text-primary font-bold hover:bg-primary hover:text-black transition-all">
                Contact Sales
              </button>
            </a>
          </div>
          {/* Growth */}
          <div className="bg-background-dark p-8 rounded-2xl border-2 border-primary relative transform lg:scale-105 shadow-[0_0_40px_-10px_rgba(56,224,123,0.3)] flex flex-col">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-black text-[10px] font-black uppercase tracking-wider px-4 py-1 rounded-full">
              Most Popular
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Growth</h3>
            <div className="text-4xl font-black text-white mb-1">
              Rs. 19,999
            </div>
            <p className="text-sm text-gray-500 mb-6">per month</p>
            <ul className="space-y-4 mb-8 text-gray-400 flex-grow">
              <li className="flex items-center gap-3">
                <span className="text-primary text-lg">✓</span>
                Unlimited transactions
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary text-lg">✓</span>
                Voice Note Processing
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary text-lg">✓</span>
                Delivery/Rider Management
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary text-lg">✓</span>
                Human-in-the-loop escalation
              </li>
            </ul>
            <a
              href="https://wa.me/923239856439?text=I%20would%20like%20to%20learn%20more%20about%20Aflatoon%20AI%21"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full py-3 rounded-xl bg-primary text-black font-bold hover:opacity-90 transition-all">
                Contact Sales
              </button>
            </a>
          </div>
          {/* Pro */}
          <div className="bg-background-dark p-8 rounded-2xl border border-gray-800 hover:border-primary/40 transition-all duration-300 flex flex-col">
            <h3 className="text-xl font-bold mb-2 text-white">Pro</h3>
            <div className="text-4xl font-black text-white mb-1">
              Custom
            </div>
            <p className="text-sm text-gray-500 mb-6">tailored to your needs</p>
            <ul className="space-y-4 mb-8 text-gray-400 flex-grow">
              <li className="flex items-center gap-3">
                <span className="text-primary text-lg">✓</span>
                Everything in Growth
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary text-lg">✓</span>
                Custom API Webhooks
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary text-lg">✓</span>
                Advanced Marketing Automations
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary text-lg">✓</span>
                Multiple Locations
              </li>
            </ul>
            <a
              href="https://wa.me/923239856439?text=I%20would%20like%20to%20learn%20more%20about%20Aflatoon%20AI%21"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full py-3 rounded-xl border border-primary text-primary font-bold hover:bg-primary hover:text-black transition-all">
                Contact Sales
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
