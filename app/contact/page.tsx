'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import PageWrapper from '@/components/PageWrapper';
import { Mail, Phone, Globe, MapPin, Clock } from 'lucide-react';

const SERVICES_LIST = [
  "Drawing & Design Services",
  "Cost Estimating",
  "Permit Support Services",
  "Project Management & Administration",
  "Construction Documentation",
  "Bidding & Procurement Support",
  "Engineering Support & Coordination",
  "Survey & Site Documentation",
  "Real Estate & Development Support"
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <PageWrapper>
      {/* HERO BANNER */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center bg-navy-dark overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/contact_hero_construction.png"
            alt="Contact Office"
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-navy/80 mix-blend-multiply pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-navy/90 to-transparent pointer-events-none"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6"
          >
            Get In <span className="text-gold">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed"
          >
            We don&apos;t want to close a sale; we want to open a relationship.
          </motion.p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="py-20 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-8">
            
            {/* LEFT CONTACT INFO */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h2 className="text-sm font-bold tracking-widest text-gold uppercase mb-2">Connect With Us</h2>
                <h3 className="text-3xl font-bold text-navy mb-6">We&apos;re Ready to Help</h3>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Reach out to discuss your project requirements. Our dedicated team provides accurate quotes and reliable support for all your construction documentation needs.
                </p>
              </div>

              <div className="bg-white p-8 rounded-sm shadow-sm border border-slate-100 space-y-6">
                {[
                  { icon: Mail, label: "Email", val: "hello@archivus.com" },
                  { icon: Phone, label: "Phone / WhatsApp", val: "+1 (555) 123-4567" },
                  { icon: Globe, label: "Website", val: "www.archivus.com" },
                  { icon: MapPin, label: "Service Area", val: "All 50 US States" },
                  { icon: Clock, label: "Response Time", val: "Within 24 Hours" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-sm bg-navy-dark text-gold flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">{item.label}</p>
                      <p className="text-navy font-bold text-lg">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT CONTACT FORM */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-3"
            >
              <div className="bg-white p-8 md:p-10 rounded-sm shadow-xl border-t-4 border-gold">
                <h3 className="text-2xl font-bold text-navy mb-8">Request a Quote</h3>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Mail className="h-10 w-10" />
                    </div>
                    <h4 className="text-2xl font-bold text-navy mb-2">Message Sent!</h4>
                    <p className="text-slate-600 mb-8">We&apos;ve received your request and will respond within 24 business hours.</p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="bg-navy text-white px-6 py-3 font-bold rounded-sm hover:bg-gold transition-colors"
                    >
                      Send Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Full Name</label>
                        <input required type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Company Name</label>
                        <input required type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all" placeholder="Acme Construction" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Email Address</label>
                        <input required type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all" placeholder="john@company.com" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Phone Number</label>
                        <input required type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all" placeholder="(555) 123-4567" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Service Required</label>
                        <select required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all text-slate-700">
                          <option value="">Select a service...</option>
                          {SERVICES_LIST.map((srv, i) => (
                            <option key={i} value={srv}>{srv}</option>
                          ))}
                          <option value="Other">Other Custom Service</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Project Location (State)</label>
                        <input required type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all" placeholder="e.g. Texas, TX" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Project Description</label>
                      <textarea required rows={5} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all resize-none" placeholder="Please describe your project, timeline, and specific requirements..."></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-gold hover:bg-gold-hover text-white font-bold text-lg px-8 py-4 rounded-sm transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-md flex justify-center items-center"
                    >
                      {isSubmitting ? (
                        <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      ) : "Send My Request"}
                    </button>
                    <p className="text-center text-sm text-slate-500 mt-4 font-medium">We typically respond within 24 business hours.</p>
                  </form>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </PageWrapper>
  );
}
