'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import PageWrapper from '@/components/PageWrapper';
import { 
  CheckCircle2, 
  Map, 
  Clock, 
  ShieldCheck, 
  PencilRuler, 
  Calculator, 
  FileCheck2,
  ArrowRight
} from 'lucide-react';

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const STAGGER = {
  visible: { transition: { staggerChildren: 0.1 } }
};

const HERO_IMAGES = [
  "/images/home_hero_construction.png",
  "/images/home_hero_2.png",
  "/images/home_hero_3.png"
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <PageWrapper>
      {/* HERO SECTION */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-navy-dark">
        <div className="absolute inset-0 z-0">
          <AnimatePresence>
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image 
                src={HERO_IMAGES[currentImageIndex]}
                alt={`Construction background ${currentImageIndex + 1}`}
                fill
                className="object-cover"
                priority
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-navy/85 mix-blend-multiply z-10 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-transparent z-10 pointer-events-none"></div>
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={STAGGER}
            className="max-w-3xl"
          >
            <motion.h1 variants={FADE_UP} className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
              Your Complete US <span className="text-gold">Construction Services</span> Partner
            </motion.h1>
            <motion.p variants={FADE_UP} className="text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              PE-Stamped Drawings. Expert Estimating. Full Project Documentation. Delivered On Time.
            </motion.p>
            <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-4">
              <Link href="/services" className="bg-gold hover:bg-gold-hover text-white text-center font-bold px-8 py-4 rounded-sm transition-colors duration-300 text-lg shadow-lg">
                View Our Services
              </Link>
              <Link href="/contact" className="bg-white/10 hover:bg-white border-2 border-white text-white hover:text-navy text-center font-bold px-8 py-4 rounded-sm transition-all duration-300 text-lg">
                Get a Free Quote
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: CheckCircle2, title: "PE-Stamped Drawings", desc: "Licensed in 50 states for full compliance." },
              { icon: ShieldCheck, title: "US Code Compliant", desc: "Expertise in IBC, ADA, and local codes." },
              { icon: Clock, title: "Fast Turnaround", desc: "Rapid delivery to keep projects on schedule." },
              { icon: Map, title: "Nationwide Service", desc: "Supporting projects across the entire USA." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 p-8 border border-slate-100 rounded-sm hover:shadow-lg transition-shadow group"
              >
                <div className="h-14 w-14 bg-navy text-gold flex items-center justify-center rounded-sm mb-6 group-hover:bg-gold group-hover:text-white transition-colors">
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 md:flex justify-between items-end">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold tracking-widest text-gold uppercase mb-2">Our Expertise</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-navy tracking-tight">Comprehensive Construction Support</h3>
            </div>
            <Link href="/services" className="hidden md:flex items-center gap-2 text-navy font-bold hover:text-gold transition-colorsgroup pb-2">
              View All Services <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: PencilRuler, title: "Drawing & Design Services", desc: "Complete architectural and structural drawing sets including permit drawings, shop drawings, and as-builts." },
              { icon: Calculator, title: "Cost Estimating", desc: "Detailed quantity takeoffs, bid estimates, conceptual budgets, and change order pricing for contractors." },
              { icon: FileCheck2, title: "Permit Support Services", desc: "Permit application preparation, zoning research, code compliance reports, and submission packages." }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="bg-white p-8 xl:p-10 shadow-sm border border-slate-100 rounded-sm flex flex-col h-full"
              >
                <service.icon className="h-10 w-10 text-gold mb-6 relative z-10" />
                <h4 className="text-2xl font-bold text-navy mb-4 relative z-10">{service.title}</h4>
                <p className="text-slate-600 mb-8 leading-relaxed flex-grow relative z-10">{service.desc}</p>
                <Link href="/services" className="font-bold text-navy flex items-center gap-2 hover:text-gold transition-colors w-fit relative z-10 group">
                  Learn More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-10 md:hidden text-center">
            <Link href="/services" className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3 rounded-sm font-bold hover:bg-gold transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-gold uppercase mb-2">Process</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-navy tracking-tight">How Archivus Works</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 xl:gap-8">
            {[
              { num: "01", title: "Share Info", desc: "Send us your sketches, ideas, or base files." },
              { num: "02", title: "We Draft", desc: "Our team produces the required documentation." },
              { num: "03", title: "PE Review", desc: "US-licensed engineers review and stamp." },
              { num: "04", title: "We Deliver", desc: "Receive permit-ready sets on schedule." }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative text-center p-6"
              >
                <div className="text-7xl font-black text-slate-100 mb-[-30px] relative z-0">{step.num}</div>
                <div className="relative z-10 bg-white shadow-xl p-8 rounded-sm border-t-4 border-gold">
                  <h4 className="text-xl font-bold text-navy mb-3">{step.title}</h4>
                  <p className="text-slate-600 text-sm">{step.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-[50%] right-[-20%] xl:right-[-30%] w-[40%] xl:w-[60%] border-t-2 border-dashed border-slate-200 z-0"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-navy py-16 relative">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/about_desk_blueprints.png')] bg-cover mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 text-center divide-x-0 md:divide-x md:divide-slate-700/50">
            {[
              { val: "500+", label: "Projects Completed" },
              { val: "98%", label: "Permit Approval Rate" },
              { val: "15+", label: "Team Members" }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-4"
              >
                <div className="text-4xl md:text-5xl font-black text-gold mb-2">{stat.val}</div>
                <div className="text-slate-300 font-medium tracking-wide uppercase text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 bg-gold">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-navy mb-8 tracking-tight">
            Ready to Start Your Project?
          </h2>
          <Link href="/contact" className="inline-block bg-navy hover:bg-navy-dark text-white font-bold text-lg px-10 py-5 rounded-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            Contact Us Today
          </Link>
        </div>
      </section>

    </PageWrapper>
  );
}
