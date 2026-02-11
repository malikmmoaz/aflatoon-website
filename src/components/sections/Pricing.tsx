import React from "react";

const Pricing = () => {
  return (
    <section className="py-24 bg-card-dark/30" id="pricing">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-400">
            Plans designed for small cafes to large service chains.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Starter */}
          <div className="bg-background-dark p-8 rounded-2xl border border-gray-800 hover:border-primary transition-all">
            <h3 className="text-xl font-bold mb-2 text-white">Starter</h3>
            <div className="text-4xl font-black text-white mb-6">
              Rs. 9,999
              <span className="text-sm font-normal text-gray-500">/mo</span>
            </div>
            <ul className="space-y-4 mb-8 text-gray-400">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">
                  check
                </span>{" "}
                Up to 100 transactions
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">
                  check
                </span>{" "}
                1 WhatsApp number
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">
                  check
                </span>{" "}
                Basic Menu Learning
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <span className="material-symbols-outlined text-sm">close</span>{" "}
                Rider Dispatch
              </li>
            </ul>
            <a
              className="text-sm font-bold rounded-lg hover:bg-primary/10 transition-colors"
              href="https://wa.me/923239856439?text=I%20would%20like%20to%20learn%20more%20about%20Aflatoon%20AI%21"
              target="_blank"
            >
              <button className="w-full py-3 rounded-xl border border-primary text-primary font-bold hover:bg-primary hover:text-black transition-all">
                Contact Sales
              </button>
            </a>
          </div>
          {/* Growth */}
          <div className="bg-background-dark p-8 rounded-2xl border-2 border-primary relative transform lg:scale-105 shadow-[0_0_40px_-10px_rgba(56,224,123,0.3)]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-black text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full">
              Most Popular
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Growth</h3>
            <div className="text-4xl font-black text-white mb-6">
              Rs. 19,999
              <span className="text-sm font-normal text-gray-500">/mo</span>
            </div>
            <ul className="space-y-4 mb-8 text-gray-400">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">
                  check
                </span>{" "}
                Unlimited transactions
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">
                  check
                </span>{" "}
                Voice Note Processing
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">
                  check
                </span>{" "}
                Delivery/Rider Management
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">
                  check
                </span>{" "}
                Human-in-the-loop escalation
              </li>
            </ul>
            <a
              className="text-sm font-bold rounded-lg hover:bg-primary/10 transition-colors"
              href="https://wa.me/923239856439?text=I%20would%20like%20to%20learn%20more%20about%20Aflatoon%20AI%21"
              target="_blank"
            >
              <button className="w-full py-3 rounded-xl bg-primary text-black font-bold hover:opacity-90 transition-all">
                Contact Sales
              </button>
            </a>
          </div>
          {/* Pro */}
          <div className="bg-background-dark p-8 rounded-2xl border border-gray-800 hover:border-primary transition-all">
            <h3 className="text-xl font-bold mb-2 text-white">Pro</h3>
            <div className="text-4xl font-black text-white mb-6">
              Rs. 19,999
              <span className="text-sm font-normal text-gray-500">/mo</span>
            </div>
            <ul className="space-y-4 mb-8 text-gray-400">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">
                  check
                </span>{" "}
                Everything in Growth
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">
                  check
                </span>{" "}
                Custom API Webhooks
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">
                  check
                </span>{" "}
                Advanced Marketing Automations
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">
                  check
                </span>{" "}
                Multiple Locations
              </li>
            </ul>
            <a
              className="text-sm font-bold rounded-lg hover:bg-primary/10 transition-colors"
              href="https://wa.me/923239856439?text=I%20would%20like%20to%20learn%20more%20about%20Aflatoon%20AI%21"
              target="_blank"
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
