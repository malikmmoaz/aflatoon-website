import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background-dark text-gray-200">
      <header className="w-full sticky top-0 z-50 bg-background-dark/80 backdrop-blur-md border-b border-primary/10">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 text-primary">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z" fill="currentColor"></path>
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white">Aflatoon</h2>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#features">Features</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#how-it-works">How It Works</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#pricing">Pricing</a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <a className="text-sm font-bold px-4 py-2 rounded-lg hover:bg-primary/10 transition-colors" href="#">Login</a>
            <button className="bg-primary text-black font-bold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
              Get Started
            </button>
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-16 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold text-primary bg-primary/10 rounded-full border border-primary/20">
                AI Assistant for Service & Food
              </span>
              <h1 className="text-5xl md:text-7xl font-black !leading-tight text-white mb-6">
                Your 24/7 WhatsApp Assistant — in <span className="text-primary">Urdu & English</span>
              </h1>
              <p className="text-xl text-gray-400 mb-10 max-w-xl">
                Aflatoon takes orders, schedules appointments, and manages deliveries via voice notes. Your customers talk, Aflatoon handles the business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="bg-primary text-black font-bold px-8 py-4 rounded-xl text-lg hover:shadow-[0_0_30px_-5px_rgba(56,224,123,0.5)] transition-all">
                  Start Free Trial
                </button>
                <button className="bg-card-dark text-white border border-gray-700 font-bold px-8 py-4 rounded-xl text-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined">play_circle</span> See Demo
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative mx-auto border-gray-800 bg-gray-900 border-[14px] rounded-[3rem] h-[650px] w-[320px] shadow-2xl overflow-hidden ring-4 ring-primary/5">
                <div className="absolute top-0 w-full h-16 bg-[#075e54] flex items-center px-4 pt-4 text-white z-10">
                  <div className="w-8 h-8 rounded-full bg-gray-400 mr-2 flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm">person</span>
                  </div>
                  <div>
                    <div className="text-xs font-bold leading-tight">Aflatoon AI</div>
                    <div className="text-[10px] opacity-80">online</div>
                  </div>
                </div>
                <div className="h-full pt-16 pb-16 bg-[#e5ddd5] dark:bg-[#0b141a] overflow-y-auto px-3 flex flex-col gap-4">
                  <div className="mt-4 flex justify-end">
                    <div className="bg-[#dcf8c6] dark:bg-[#005c4b] text-gray-900 dark:text-white p-3 rounded-2xl rounded-tr-none max-w-[85%] shadow-sm">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-gray-500 dark:text-gray-300">play_arrow</span>
                        <div className="flex flex-col gap-0.5">
                          <div className="w-32 h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full">
                            <div className="w-[60%] h-full bg-[#34b7f1] rounded-full"></div>
                          </div>
                          <div className="text-[10px] text-gray-500 dark:text-gray-300">0:08</div>
                        </div>
                      </div>
                      <div className="text-[10px] text-right mt-1 opacity-70">12:45 PM</div>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-white dark:bg-[#202c33] text-gray-800 dark:text-gray-100 p-3 rounded-2xl rounded-tl-none max-w-[85%] shadow-sm">
                      <p className="text-sm italic text-gray-500 mb-1">Aflatoon has processed your order.</p>
                      <p className="text-sm">Assalam-o-Alaikum! 2 Large Pizzas and 1 Coke are added. Total is Rs. 2,800. Deliver to <span className="font-bold text-primary">Gulberg III</span>?</p>
                      <div className="text-[10px] text-right mt-1 opacity-70">12:45 PM</div>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-white dark:bg-[#202c33] text-gray-800 dark:text-gray-100 p-3 rounded-2xl rounded-tl-none max-w-[85%] shadow-sm">
                      <p className="text-sm">I&apos;ve notified the kitchen and assigned a rider for you.</p>
                      <div className="text-[10px] text-right mt-1 opacity-70">12:46 PM</div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 w-full h-16 bg-white dark:bg-[#202c33] flex items-center px-4 gap-2 z-10">
                  <div className="flex-grow bg-gray-100 dark:bg-[#2a3942] rounded-full px-4 py-2 text-sm text-gray-400">Type message...</div>
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-black">
                    <span className="material-symbols-outlined">mic</span>
                  </div>
                </div>
              </div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/20 blur-[120px] rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Struggle Section */}
        <section className="bg-card-dark/30 py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Why Local Businesses Struggle</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">From messy group chats to missed orders, traditional ways don&apos;t scale.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-card-dark border border-gray-800 hover:border-primary/30 transition-colors">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                  <span className="material-symbols-outlined text-3xl">keyboard_off</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Typing is Difficult</h3>
                <p className="text-gray-400">Customers hate typing long addresses or complex food orders. They want it fast.</p>
              </div>
              <div className="p-8 rounded-2xl bg-card-dark border border-gray-800 hover:border-primary/30 transition-colors">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                  <span className="material-symbols-outlined text-3xl">record_voice_over</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Voice Notes Preferred</h3>
                <p className="text-gray-400">Pakistani users prefer voice notes for everything. Managing 100+ voice notes a day is impossible for humans.</p>
              </div>
              <div className="p-8 rounded-2xl bg-card-dark border border-gray-800 hover:border-primary/30 transition-colors">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                  <span className="material-symbols-outlined text-3xl">fmd_bad</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Order Errors</h3>
                <p className="text-gray-400">Misunderstanding a voice note leads to wrong orders, refunds, and unhappy customers.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
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

        {/* Business Types Section */}
        <section className="bg-card-dark py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Made for Service & Food Businesses</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { icon: 'restaurant', label: 'Restaurants' },
                { icon: 'bakery_dining', label: 'Catering' },
                { icon: 'dentistry', label: 'Dentists' },
                { icon: 'content_cut', label: 'Salons' },
                { icon: 'fitness_center', label: 'Gyms' },
                { icon: 'medical_services', label: 'Clinics' },
              ].map((item, index) => (
                <div key={index} className="bg-background-dark p-6 rounded-2xl border border-gray-800 text-center hover:bg-gray-800 transition-colors">
                  <span className="material-symbols-outlined text-4xl text-primary mb-3">{item.icon}</span>
                  <p className="font-bold">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-24 container mx-auto px-6" id="how-it-works">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-gray-400">Your AI assistant is ready in four simple steps.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Connect WhatsApp', desc: 'Scan QR code to link your business WhatsApp number.' },
              { step: 2, title: 'Upload Menu & Policies', desc: 'Share your digital menu, pricing, and business policies for Aflatoon to learn.' },
              { step: 3, title: 'Sync Calendar / POS', desc: 'Connect your existing tools to automate availability and order tracking.' },
              { step: 4, title: 'Go Live', desc: 'Aflatoon starts taking orders and bookings 24/7 without intervention.' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary text-black font-black rounded-full flex items-center justify-center mx-auto mb-6">{item.step}</div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 bg-card-dark/30" id="pricing">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
              <p className="text-gray-400">Plans designed for small cafes to large service chains.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Starter */}
              <div className="bg-background-dark p-8 rounded-2xl border border-gray-800 hover:border-primary transition-all">
                <h3 className="text-xl font-bold mb-2 text-white">Starter</h3>
                <div className="text-4xl font-black text-white mb-6">Rs. 4,999<span className="text-sm font-normal text-gray-500">/mo</span></div>
                <ul className="space-y-4 mb-8 text-gray-400">
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check</span> Up to 100 transactions</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check</span> 1 WhatsApp number</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check</span> Basic Menu Learning</li>
                  <li className="flex items-center gap-2 text-gray-600"><span className="material-symbols-outlined text-sm">close</span> Rider Dispatch</li>
                </ul>
                <button className="w-full py-3 rounded-xl border border-primary text-primary font-bold hover:bg-primary hover:text-black transition-all">Start 7-Day Free Trial</button>
              </div>
              {/* Growth */}
              <div className="bg-background-dark p-8 rounded-2xl border-2 border-primary relative transform lg:scale-105 shadow-[0_0_40px_-10px_rgba(56,224,123,0.3)]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-black text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full">Most Popular</div>
                <h3 className="text-xl font-bold mb-2 text-white">Growth</h3>
                <div className="text-4xl font-black text-white mb-6">Rs. 9,999<span className="text-sm font-normal text-gray-500">/mo</span></div>
                <ul className="space-y-4 mb-8 text-gray-400">
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check</span> Unlimited transactions</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check</span> Voice Note Processing</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check</span> Delivery/Rider Management</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check</span> Human-in-the-loop escalation</li>
                </ul>
                <button className="w-full py-3 rounded-xl bg-primary text-black font-bold hover:opacity-90 transition-all">Get Started Now</button>
              </div>
              {/* Pro */}
              <div className="bg-background-dark p-8 rounded-2xl border border-gray-800 hover:border-primary transition-all">
                <h3 className="text-xl font-bold mb-2 text-white">Pro</h3>
                <div className="text-4xl font-black text-white mb-6">Rs. 19,999<span className="text-sm font-normal text-gray-500">/mo</span></div>
                <ul className="space-y-4 mb-8 text-gray-400">
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check</span> Everything in Growth</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check</span> Custom API Webhooks</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check</span> Advanced Marketing Automations</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check</span> Multiple Locations</li>
                </ul>
                <button className="w-full py-3 rounded-xl border border-primary text-primary font-bold hover:bg-primary hover:text-black transition-all">Contact Sales</button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
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

        {/* CTA Section */}
        <section className="py-24 container mx-auto px-6">
          <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-center text-black relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black mb-6">Be Aflatoon — Never Miss a Sale Again</h2>
              <p className="text-xl font-medium mb-10 max-w-2xl mx-auto opacity-80">Join 500+ service and food businesses in Pakistan using AI to automate their operations.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-black text-white font-bold px-10 py-5 rounded-2xl text-xl hover:scale-105 transition-transform">Start Your Free Trial</button>
                <button className="bg-white/20 border-2 border-black/10 text-black font-bold px-10 py-5 rounded-2xl text-xl hover:bg-white/30 transition-colors">Book a Demo</button>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-black/5 rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full -ml-20 -mb-20"></div>
          </div>
        </section>
      </main>

      <footer className="bg-background-dark border-t border-gray-800">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 text-primary">
                  <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z" fill="currentColor"></path>
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-white">Aflatoon</h2>
              </div>
              <p className="text-sm text-gray-500">The smartest AI-powered WhatsApp assistant for service, catering, and retail businesses in Pakistan.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6">Product</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a className="hover:text-primary" href="#">F&B Features</a></li>
                <li><a className="hover:text-primary" href="#">Appointments</a></li>
                <li><a className="hover:text-primary" href="#">Pricing</a></li>
                <li><a className="hover:text-primary" href="#">Roadmap</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a className="hover:text-primary" href="#">About Us</a></li>
                <li><a className="hover:text-primary" href="#">Partner Program</a></li>
                <li><a className="hover:text-primary" href="#">Contact</a></li>
                <li><a className="hover:text-primary" href="#">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6">Connect</h4>
              <div className="flex gap-4">
                <a className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-black transition-colors" href="#">
                  <span className="material-symbols-outlined text-xl">share</span>
                </a>
                <a className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-black transition-colors" href="#">
                  <span className="material-symbols-outlined text-xl">mail</span>
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-gray-500">© 2024 Aflatoon. Made with ❤️ for the Pakistani business community.</p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a className="hover:text-primary" href="#">Terms</a>
              <a className="hover:text-primary" href="#">Privacy</a>
              <a className="hover:text-primary" href="#">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
