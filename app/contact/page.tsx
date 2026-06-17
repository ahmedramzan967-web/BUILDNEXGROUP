'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import PageWrapper from '@/components/PageWrapper';
import { Mail, Phone, Globe, MapPin, Clock, Paperclip } from 'lucide-react';

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formElement = e.currentTarget;
    const formData = new FormData(formElement);

    try {
      const response = await fetch("https://formsubmit.co/ajax/info@buildimizegroup.com", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        formElement.reset();
      } else {
        alert("There was an error submitting your form. Please try again.");
      }
    } catch (error) {
      alert("There was an error submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageWrapper>
      {/* HERO BANNER */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/contact_hero_documents.jpg"
            alt="Contact Office"
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-white/60 mix-blend-overlay z-10 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 to-transparent z-10 pointer-events-none"></div>
        </div>
        
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-navy mb-6 leading-tight tracking-tight uppercase"
            >
              Get In <span className="bg-gold px-2 pb-1 inline-block">Touch</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-slate-700 mb-10 max-w-2xl leading-relaxed font-light"
            >
              We don&apos;t want to close a sale; we want to open a relationship.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="py-24 bg-white relative border-y border-slate-200">
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
                <h2 className="text-xs font-bold font-sans tracking-[0.2em] bg-gold text-navy px-3 py-1 inline-block rounded-sm uppercase mb-3">Connect With Us</h2>
                <h3 className="text-4xl font-display font-bold text-navy mb-6 uppercase">We&apos;re Ready to Help</h3>
                <p className="text-slate-600 font-sans leading-relaxed mb-8">
                  Reach out to discuss your project requirements. Our dedicated team provides accurate quotes and reliable support for all your construction documentation needs.
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-sm shadow-sm border border-slate-200 space-y-6">
                {[
                  { icon: Mail, label: "Email", val: "info@buildimizegroup.com" },
                  { icon: Phone, label: "Phone / WhatsApp", val: "+1 (346) 440 6862" },
                  { icon: Globe, label: "Website", val: "www.buildimizegroup.com" },
                  { icon: MapPin, label: "Service Area", val: "All 50 US States" },
                  { icon: Clock, label: "Response Time", val: "Within 24 Hours" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-sm bg-white text-gold flex items-center justify-center shrink-0 border border-slate-200 shadow-sm">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium uppercase tracking-[0.1em]">{item.label}</p>
                      <p className="text-navy font-display font-bold text-lg">{item.val}</p>
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
              <div className="bg-white p-8 md:p-10 rounded-sm shadow-xl border border-slate-100 border-t-4 border-t-gold">
                <h3 className="text-3xl font-display font-bold text-navy uppercase mb-8">Request a Quote</h3>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-50 text-gold rounded-full flex items-center justify-center mx-auto mb-6">
                      <Mail className="h-10 w-10 text-green-500" />
                    </div>
                    <h4 className="text-2xl font-bold font-display text-navy mb-2 uppercase">Message Sent!</h4>
                    <p className="text-slate-600 font-sans mb-8">We&apos;ve received your request and will respond within 24 business hours.</p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="bg-navy text-white px-6 py-3 font-bold font-sans rounded-sm hover:bg-gold hover:text-navy transition-colors"
                    >
                      Send Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" encType="multipart/form-data">
                    {/* FormSubmit Configuration */}
                    <input type="hidden" name="_subject" value="New Service Request via Buildimize Group Website" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-sans font-bold text-slate-700">Full Name</label>
                        <input required type="text" name="fullName" className="w-full px-4 py-3 bg-slate-50 text-navy border border-slate-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-all font-sans" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-sans font-bold text-slate-700">Company Name</label>
                        <input required type="text" name="companyName" className="w-full px-4 py-3 bg-slate-50 text-navy border border-slate-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-all font-sans" placeholder="Acme Construction" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-sans font-bold text-slate-700">Email Address</label>
                        <input required type="email" name="email" className="w-full px-4 py-3 bg-slate-50 text-navy border border-slate-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-all font-sans" placeholder="john@company.com" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-sans font-bold text-slate-700">Phone Number</label>
                        <input required type="tel" name="phone" className="w-full px-4 py-3 bg-slate-50 text-navy border border-slate-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-all font-sans" placeholder="(555) 123-4567" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-sans font-bold text-slate-700">Service Required</label>
                        <select required name="service" className="w-full px-4 py-3 bg-slate-50 text-navy border border-slate-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-all font-sans appearance-none">
                          <option value="">Select a service...</option>
                          {SERVICES_LIST.map((srv, i) => (
                            <option key={i} value={srv}>{srv}</option>
                          ))}
                          <option value="Other">Other Custom Service</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-sans font-bold text-slate-700">Project Location (State)</label>
                        <input required type="text" name="projectLocation" className="w-full px-4 py-3 bg-slate-50 text-navy border border-slate-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-all font-sans" placeholder="e.g. Texas, TX" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-sans font-bold text-slate-700">Project Description</label>
                      <textarea required name="projectDescription" rows={5} className="w-full px-4 py-3 bg-slate-50 text-navy border border-slate-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-all resize-none font-sans" placeholder="Please describe your project, timeline, and specific requirements..."></textarea>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-sans font-bold text-slate-700 flex items-center gap-2">
                        <Paperclip className="h-4 w-4" />
                        Attach Files (Optional)
                      </label>
                      <input type="file" name="attachment" multiple className="w-full px-4 py-3 bg-slate-50 text-navy border border-slate-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-all font-sans file:mr-4 file:py-2 file:px-4 file:rounded-sm file:border-0 file:text-sm file:font-semibold file:bg-navy file:text-white hover:file:bg-slate-800 cursor-pointer" />
                      <p className="text-xs text-slate-500 font-sans mt-1">Upload plans, blueprints, or reference documents.</p>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-gold hover:bg-navy text-navy hover:text-white font-display font-bold uppercase tracking-wide text-lg px-8 py-4 rounded-sm transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-md flex justify-center items-center"
                    >
                      {isSubmitting ? (
                        <span className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      ) : "Send My Request"}
                    </button>
                    <p className="text-center text-sm text-slate-500 mt-4 font-sans font-medium">We typically respond within 24 business hours.</p>
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
