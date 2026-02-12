import React from "react";

const BusinessTypes = () => {
  const types = [
    { icon: "🍕", label: "Restaurants" },
    { icon: "🎂", label: "Catering" },
    { icon: "🦷", label: "Dentists" },
    { icon: "💇", label: "Salons" },
    { icon: "🏋️", label: "Gyms" },
    { icon: "🏥", label: "Clinics" },
  ];

  return (
    <section className="bg-card-dark py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-bold text-primary bg-primary/10 rounded-full border border-primary/20 tracking-widest uppercase">
            Industries
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Made for Service &amp; Food Businesses
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Purpose-built for businesses that serve customers on WhatsApp every day.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {types.map((item, index) => (
            <div
              key={index}
              className="bg-background-dark p-6 rounded-2xl border border-gray-800 text-center hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <p className="font-bold text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessTypes;
