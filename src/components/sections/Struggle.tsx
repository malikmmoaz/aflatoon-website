import React from "react";

const Struggle = () => {
  return (
    <section className="bg-card-dark/30 py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Why Local Businesses Struggle
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From messy group chats to missed orders, traditional ways don&apos;t
            scale.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="p-8 rounded-2xl bg-card-dark border border-gray-800 hover:border-primary/30 transition-colors">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
              <span className="material-symbols-outlined text-3xl">person</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Attention Span
            </h3>
            <p className="text-gray-400">
              Customers demand immediate responses or they lose interest. They
              want it fast.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-card-dark border border-gray-800 hover:border-primary/30 transition-colors">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
              <span className="material-symbols-outlined text-3xl">
                keyboard
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Tracking Chaos
            </h3>
            <p className="text-gray-400">
              Managing orders through WhatsApp is chaotic. Messages get lost,
              customers get ignored, and businesses lose money.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-card-dark border border-gray-800 hover:border-primary/30 transition-colors">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
              <span className="material-symbols-outlined text-3xl">
                database
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Customer Database
            </h3>
            <p className="text-gray-400">
              No way to track customers, preferences, or order history.
              It&apos;s all in the chat, and it&apos;s impossible to analyze or
              improve.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-card-dark border border-gray-800 hover:border-primary/30 transition-colors">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
              <span className="material-symbols-outlined text-3xl">
                fmd_bad
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Order Errors</h3>
            <p className="text-gray-400">
              Misunderstanding leads to wrong orders, refunds, and unhappy
              customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Struggle;
