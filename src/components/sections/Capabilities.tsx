import React from 'react';
import { UtensilsCrossed, Truck, TrendingUp, UserCog, User, Bot, Receipt, Bike } from 'lucide-react';

const Capabilities = () => {
  return (
    <section className="py-24 container mx-auto px-6" id="features">
      <div className="text-center mb-16">
        <span className="inline-block px-3 py-1 mb-4 text-xs font-bold text-primary bg-primary/10 rounded-full border border-primary/20 tracking-widest uppercase">
          Features
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Full-Stack F&B Capabilities</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Everything your business needs to automate customer interactions and operations.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <ul className="space-y-6">
            <li className="flex gap-4 p-4 rounded-xl hover:bg-card-dark/50 transition-colors">
              <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center"><UtensilsCrossed className="w-5 h-5 text-primary" /></div>
              <div>
                <p className="font-bold text-white mb-1">Smart Order Management</p>
                <p className="text-gray-400 text-sm leading-relaxed">Aflatoon takes orders directly from WhatsApp, processing your menu, pricing, and dietary policies in real-time.</p>
              </div>
            </li>
            <li className="flex gap-4 p-4 rounded-xl hover:bg-card-dark/50 transition-colors">
              <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center"><Truck className="w-5 h-5 text-primary" /></div>
              <div>
                <p className="font-bold text-white mb-1">Delivery Optimization</p>
                <p className="text-gray-400 text-sm leading-relaxed">Automatically stores pin locations and allocates riders based on availability and distance.</p>
              </div>
            </li>
            <li className="flex gap-4 p-4 rounded-xl hover:bg-card-dark/50 transition-colors">
              <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center"><TrendingUp className="w-5 h-5 text-primary" /></div>
              <div>
                <p className="font-bold text-white mb-1">Customer Intelligence</p>
                <p className="text-gray-400 text-sm leading-relaxed">Remembers order history, preferences, and automatically upsells deals to frequent customers.</p>
              </div>
            </li>
            <li className="flex gap-4 p-4 rounded-xl hover:bg-card-dark/50 transition-colors">
              <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center"><UserCog className="w-5 h-5 text-primary" /></div>
              <div>
                <p className="font-bold text-white mb-1">Human-in-the-Loop</p>
                <p className="text-gray-400 text-sm leading-relaxed">Seamless escalation to a human agent for complex complaints or special requests.</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="bg-card-dark p-8 rounded-[2rem] border border-gray-800">
          <div className="flex flex-col gap-10 relative">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                <User className="w-7 h-7 text-primary" />
              </div>
              <div className="flex-grow h-0.5 flow-line"></div>
              <div className="text-right">
                <p className="font-bold text-white">Customer</p>
                <p className="text-xs text-gray-500">Voice Note Order/Booking</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shadow-[0_0_20px_rgba(56,224,123,0.3)]">
                <Bot className="w-7 h-7 text-black" />
              </div>
              <div className="flex-grow h-0.5 flow-line"></div>
              <div className="text-right">
                <p className="font-bold text-primary">Aflatoon AI</p>
                <p className="text-xs text-gray-500">Processes Order/Appointment</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                <Receipt className="w-7 h-7 text-primary" />
              </div>
              <div className="flex-grow h-0.5 flow-line"></div>
              <div className="text-right">
                <p className="font-bold text-white">POS / Calendar</p>
                <p className="text-xs text-gray-500">Syncs Order & Schedule</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                <Bike className="w-7 h-7 text-primary" />
              </div>
              <div className="flex-grow h-0.5 flow-line"></div>
              <div className="text-right">
                <p className="font-bold text-white">Operations</p>
                <p className="text-xs text-gray-500">Rider / Kitchen Notified</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
