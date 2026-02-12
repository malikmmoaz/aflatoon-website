import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      initials: "FA",
      name: "Faisal Abbas",
      role: "Owner, Chai Wala Express",
      quote: "Ordering tea and snacks via WhatsApp was a nightmare. Now Aflatoon takes 100+ orders a day, pins the location, and even tells my rider where to go. Life is so much easier.",
    },
    {
      initials: "SK",
      name: "Dr. Salman Khan",
      role: "Orthodontist, Lahore",
      quote: "Aflatoon has changed my clinic\u2019s workflow. Patients just send a voice note saying \u2018Doc, Monday 4 baje\u2019 and it\u2019s booked. No more missed patients while I\u2019m in surgery.",
    },
    {
      initials: "SA",
      name: "Sara Ahmed",
      role: "Salon Owner, Karachi",
      quote: "I used to spend 3 hours a day responding to messages. Now Aflatoon handles 90% of the bookings. It\u2019s like having a real receptionist at 1/10th the cost.",
    },
  ];

  return (
    <section className="py-24 container mx-auto px-6" id="testimonials">
      <div className="text-center mb-16">
        <span className="inline-block px-3 py-1 mb-4 text-xs font-bold text-primary bg-primary/10 rounded-full border border-primary/20 tracking-widest uppercase">
          Testimonials
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          What Our Customers Say
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Real results from real businesses across Pakistan.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((item, index) => (
          <div key={index} className="bg-card-dark p-8 rounded-2xl border border-gray-800 hover:border-primary/30 transition-all duration-300 flex flex-col">
            <div className="text-primary text-4xl mb-4 opacity-30">&ldquo;</div>
            <p className="text-gray-300 leading-relaxed mb-6 flex-grow">{item.quote}</p>
            <div className="flex items-center gap-4 pt-6 border-t border-gray-800">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">{item.initials}</div>
              <div>
                <h4 className="font-bold text-white text-sm">{item.name}</h4>
                <p className="text-xs text-gray-500">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
