import React from "react";

const Struggle = () => {
  const painPoints = [
    {
      icon: "⏱️",
      title: "Attention Span",
      desc: "Customers demand immediate responses or they lose interest. They want it fast.",
    },
    {
      icon: "📋",
      title: "Tracking Chaos",
      desc: "Managing orders through WhatsApp is chaotic. Messages get lost, customers get ignored, and businesses lose money.",
    },
    {
      icon: "📊",
      title: "Customer Database",
      desc: "No way to track customers, preferences, or order history. It's all in the chat, and it's impossible to analyze or improve.",
    },
    {
      icon: "❌",
      title: "Order Errors",
      desc: "Misunderstanding leads to wrong orders, refunds, and unhappy customers.",
    },
  ];

  return (
    <section className="bg-card-dark/30 py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-bold text-primary bg-primary/10 rounded-full border border-primary/20 tracking-widest uppercase">
            The Problem
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Why Local Businesses Struggle
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From messy group chats to missed orders, traditional ways don&apos;t
            scale.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {painPoints.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-card-dark border border-gray-800 hover:border-primary/30 transition-all hover:-translate-y-1 duration-300"
            >
              <div className="text-4xl mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Struggle;
