import React from 'react';

const Capabilities = () => {
  return (
    <section className="py-24 container mx-auto px-6" id="features">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Full-Stack F&B Capabilities</h2>
          <ul className="space-y-6">
            <li className="flex gap-4">
              <div className="flex-shrink-0 w-6 h-6 text-primary"><span className="material-symbols-outlined">restaurant_menu</span></div>
              <p className="text-gray-300"><span className="font-bold text-white">Smart Order Management:</span> Aflatoon takes orders directly from WhatsApp, processing your menu, pricing, and dietary policies in real-time.</p>
            </li>
            <li className="flex gap-4">
              <div className="flex-shrink-0 w-6 h-6 text-primary"><span className="material-symbols-outlined">local_shipping</span></div>
              <p className="text-gray-300"><span className="font-bold text-white">Delivery Optimization:</span> Automatically stores pin locations and allocates riders based on availability and distance.</p>
            </li>
            <li className="flex gap-4">
              <div className="flex-shrink-0 w-6 h-6 text-primary"><span className="material-symbols-outlined">insights</span></div>
              <p className="text-gray-300"><span className="font-bold text-white">Customer Intelligence:</span> Remembers order history, preferences, and automatically upsells deals to frequent customers.</p>
            </li>
            <li className="flex gap-4">
              <div className="flex-shrink-0 w-6 h-6 text-primary"><span className="material-symbols-outlined">support_agent</span></div>
              <p className="text-gray-300"><span className="font-bold text-white">Human-in-the-loop:</span> Seamless escalation to a human agent for complex complaints or special requests.</p>
            </li>
          </ul>
        </div>
        <div className="bg-card-dark p-8 rounded-[2rem] border border-gray-800">
          <div className="flex flex-col gap-10 relative">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-3xl">person</span>
              </div>
              <div className="flex-grow h-0.5 flow-line"></div>
              <div className="text-right">
                <p className="font-bold text-white">Customer</p>
                <p className="text-xs text-gray-500">Voice Note Order/Booking</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-black shadow-[0_0_20px_rgba(56,224,123,0.3)]">
                <span className="material-symbols-outlined text-3xl">smart_toy</span>
              </div>
              <div className="flex-grow h-0.5 flow-line"></div>
              <div className="text-right">
                <p className="font-bold text-white text-primary">Aflatoon AI</p>
                <p className="text-xs text-gray-500">Processes Order/Appointment</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-3xl">receipt_long</span>
              </div>
              <div className="flex-grow h-0.5 flow-line"></div>
              <div className="text-right">
                <p className="font-bold text-white">POS / Calendar</p>
                <p className="text-xs text-gray-500">Syncs Order & Schedule</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-3xl">delivery_dining</span>
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
