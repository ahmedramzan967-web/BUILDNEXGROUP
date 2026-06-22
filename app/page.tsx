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
  "/images/home_hero_office_docs.jpg"
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
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-navy">
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
                className="object-cover opacity-30"
                priority
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={STAGGER}
            className="max-w-3xl"
          >
            <motion.h1 variants={FADE_UP} className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight tracking-tight uppercase">
              Partnered with US-Licensed PEs. <span className="text-gold">Permit-Ready Drawings</span> at Half the Cost of Local Firms.
            </motion.h1>
            <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-4">
              <Link href="/services" className="bg-gold hover:bg-white text-navy text-center font-bold px-8 py-4 rounded-sm transition-colors duration-300 text-lg shadow-lg uppercase tracking-wider">
                View Our Services
              </Link>
              <Link href="/contact" className="bg-transparent hover:bg-white/10 border-2 border-white text-white hover:text-white text-center font-bold px-8 py-4 rounded-sm transition-all duration-300 text-lg uppercase tracking-wider">
                Get a Free Quote
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
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
                className="bg-white p-8 border hover:border-gold border-slate-200 rounded-sm shadow-sm hover:shadow-md hover:-translate-y-2 transition-all group"
              >
                <div className="h-14 w-14 bg-navy text-gold flex items-center justify-center rounded-sm mb-6 group-hover:bg-gold group-hover:text-navy transition-colors">
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-display font-bold text-navy mb-3 tracking-tight">{feature.title}</h3>
                <p className="text-slate-600 font-sans leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 md:flex justify-between items-end">
            <div className="max-w-2xl">
              <h2 className="text-xs font-bold tracking-[0.2em] font-sans bg-gold text-navy px-3 py-1 inline-block rounded-sm uppercase mb-3">Our Expertise</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-navy uppercase tracking-tight">Comprehensive<br/> Construction Support</h3>
            </div>
            <Link href="/services" className="hidden md:flex items-center gap-2 text-navy font-bold hover:text-gold transition-colors group pb-2">
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
                className="bg-slate-50 p-8 xl:p-10 shadow-sm border border-slate-200 rounded-sm flex flex-col h-full hover:border-gold transition-colors group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 text-slate-100 group-hover:text-gold/20 transition-colors pointer-events-none">
                  <service.icon className="w-48 h-48 -mr-10 -mt-10" />
                </div>
                <service.icon className="h-10 w-10 text-navy mb-6 relative z-10 group-hover:text-gold transition-colors" />
                <h4 className="text-2xl font-display font-bold text-navy mb-4 relative z-10">{service.title}</h4>
                <p className="text-slate-600 mb-8 leading-relaxed flex-grow relative z-10">{service.desc}</p>
                <Link href="/services" className="font-bold text-navy flex items-center gap-2 hover:text-gold transition-colors w-fit relative z-10 group">
                  Learn More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-10 md:hidden text-center">
            <Link href="/services" className="inline-flex items-center gap-2 bg-gold text-navy px-6 py-3 rounded-sm font-bold font-display uppercase tracking-wide hover:bg-gold-hover transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold font-sans tracking-[0.2em] bg-gold text-navy px-3 py-1 inline-block rounded-sm uppercase mb-4">Process</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-navy tracking-tight uppercase">How Buildimize Works</h3>
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
                <div className="text-7xl font-display font-black text-slate-200 mb-[-30px] relative z-0">{step.num}</div>
                <div className="relative z-10 bg-white shadow-sm p-8 rounded-sm border-t-4 border-gold">
                  <h4 className="text-xl font-display font-bold text-navy mb-3">{step.title}</h4>
                  <p className="text-slate-600 font-sans text-sm">{step.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-[50%] right-[-20%] xl:right-[-30%] w-[40%] xl:w-[60%] border-t-2 border-dashed border-slate-300 z-0 opacity-50"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-navy py-16 relative border-y border-slate-700">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/about_desk_blueprints.png')] bg-cover mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 text-center divide-x-0 md:divide-x md:divide-slate-700">
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
                <div className="text-5xl md:text-6xl font-display font-black text-gold mb-2">{stat.val}</div>
                <div className="text-white font-sans font-medium tracking-[0.1em] uppercase text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-24 bg-gold">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-navy mb-8 tracking-tighter uppercase">
            Ready to Start<br/>Your Project?
          </h2>
          <Link href="/contact" className="inline-block bg-navy hover:bg-slate-800 text-gold font-display font-bold text-xl px-12 py-6 rounded-sm shadow-[8px_8px_0_0_#111111] hover:shadow-[4px_4px_0_0_#111111] transition-all duration-300 hover:translate-x-1 hover:translate-y-1">
            CONTACT US TODAY
          </Link>
        </div>
      </section>

    </PageWrapper>
  );
}
