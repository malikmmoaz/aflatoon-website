import React from "react";

const CTA = () => {
  return (
    <section className="py-24 container mx-auto px-6">
      <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-center text-black relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Be Aflatoon — Never Miss a Sale Again
          </h2>
          <p className="text-xl font-medium mb-10 max-w-2xl mx-auto opacity-80">
            Join 500+ service and food businesses in Pakistan using AI to
            automate their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/923239856439?text=I%20would%20like%20to%20learn%20more%20about%20Aflatoon%20AI%21"
              target="_blank"
            >
              <button className="bg-black text-white font-bold px-10 py-5 rounded-2xl text-xl hover:scale-105 transition-transform">
                Start Now
              </button>
            </a>
            {/*<button className="bg-white/20 border-2 border-black/10 text-black font-bold px-10 py-5 rounded-2xl text-xl hover:bg-white/30 transition-colors">Book a Demo</button>*/}
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-black/5 rounded-full -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full -ml-20 -mb-20"></div>
      </div>
    </section>
  );
};

export default CTA;
