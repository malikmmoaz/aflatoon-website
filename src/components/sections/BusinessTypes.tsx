import React from 'react';

const BusinessTypes = () => {
  const types = [
    { icon: 'restaurant', label: 'Restaurants' },
    { icon: 'bakery_dining', label: 'Catering' },
    { icon: 'dentistry', label: 'Dentists' },
    { icon: 'content_cut', label: 'Salons' },
    { icon: 'fitness_center', label: 'Gyms' },
    { icon: 'medical_services', label: 'Clinics' },
  ];

  return (
    <section className="bg-card-dark py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Made for Service & Food Businesses</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {types.map((item, index) => (
            <div key={index} className="bg-background-dark p-6 rounded-2xl border border-gray-800 text-center hover:bg-gray-800 transition-colors">
              <span className="material-symbols-outlined text-4xl text-primary mb-3">{item.icon}</span>
              <p className="font-bold">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessTypes;
