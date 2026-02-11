import React from 'react';

const Testimonials = () => {
  return (
    <section className="py-24 container mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-card-dark p-8 rounded-3xl border border-gray-800">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center text-white font-bold">FA</div>
            <div>
              <h4 className="font-bold text-white">Faisal Abbas</h4>
              <p className="text-xs text-primary">Owner, Chai Wala Express</p>
            </div>
          </div>
          <p className="text-gray-300 italic">&quot;Ordering tea and snacks via WhatsApp was a nightmare. Now Aflatoon takes 100+ orders a day, pins the location, and even tells my rider where to go. Life is so much easier.&quot;</p>
        </div>
        <div className="bg-card-dark p-8 rounded-3xl border border-gray-800">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center text-white font-bold">SK</div>
            <div>
              <h4 className="font-bold text-white">Dr. Salman Khan</h4>
              <p className="text-xs text-primary">Orthodontist, Lahore</p>
            </div>
          </div>
          <p className="text-gray-300 italic">&quot;Aflatoon has changed my clinic&apos;s workflow. Patients just send a voice note saying &apos;Doc, Monday 4 baje&apos; and it&apos;s booked. No more missed patients while I&apos;m in surgery.&quot;</p>
        </div>
        <div className="bg-card-dark p-8 rounded-3xl border border-gray-800">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center text-white font-bold">SA</div>
            <div>
              <h4 className="font-bold text-white">Sara Ahmed</h4>
              <p className="text-xs text-primary">Salon Owner, Karachi</p>
            </div>
          </div>
          <p className="text-gray-300 italic">&quot;I used to spend 3 hours a day responding to messages. Now Aflatoon handles 90% of the bookings. It&apos;s like having a real receptionist at 1/10th the cost.&quot;</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
