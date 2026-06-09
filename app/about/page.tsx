'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import PageWrapper from '@/components/PageWrapper';
import { Target, Shield, Clock, Users, Building2, CheckCircle2 } from 'lucide-react';

const FADE_UP = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function AboutPage() {
  return (
    <PageWrapper>
      {/* HERO BANNER */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center bg-navy-dark overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/about_hero.png"
            alt="Archivus Team"
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
            About <span className="text-gold">Archivus</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed"
          >
            Engineering excellence, precise documentation, and dedicated partnerships—building the foundation of America&apos;s infrastructure.
          </motion.p>
        </div>
      </section>

      {/* COMPANY OVERVIEW */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}
              className="text-sm font-bold tracking-widest text-gold uppercase mb-4"
            >
              Who We Are
            </motion.h2>
            <motion.p 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}
              className="text-xl text-slate-700 leading-relaxed"
            >
              Archivus is a professional firm offering complete construction documentation and design support to US clients. We leverage an international team and US-licensed PE partners to serve contractors, engineers, and building owners nationwide.
            </motion.p>
          </div>
        </div>
      </section>

      {/* MISSION & VALUES */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}>
              <h2 className="text-3xl font-bold text-navy mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                To bridge the gap between design and construction by accelerating the documentation process. We empower US contractors and engineers with high-quality, code-compliant, and PE-stamped drawing sets at competitive rates, ensuring project success from bid to closeout.
              </p>
              <div className="flex items-center gap-4 text-navy font-bold">
                <Building2 className="h-8 w-8 text-gold" />
                Building Success Nationwide
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              className="relative h-[400px] rounded-sm overflow-hidden shadow-2xl"
            >
              <Image 
                src="/images/about_desk_blueprints.png"
                alt="Architecture Desk"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy">Our Core Values</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Shield, title: "Quality", desc: "Rigorous QA/QC on every line we draw." },
                { icon: Target, title: "Accuracy", desc: "Precise dimensions and code adherence." },
                { icon: Clock, title: "Reliability", desc: "We deliver when we say we will." },
                { icon: Users, title: "Transparency", desc: "Clear communication at every phase." }
              ].map((val, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-sm shadow-sm border border-slate-100 text-center hover:-translate-y-1 transition-transform"
                >
                  <val.icon className="h-10 w-10 text-gold mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-navy mb-2">{val.title}</h3>
                  <p className="text-slate-600">{val.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* WHY WE'RE DIFFERENT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy">Why We&apos;re Different</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "PE-stamped work for permitting in all 50 US States",
              "Deep expertise in US building codes and regulations",
              "Highly competitive pricing through global talent",
              "Fast delivery to maintain your critical path schedule",
              "Single point of contact for US clients",
              "Scalable team ready to handle large portfolios"
            ].map((point, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-4 p-4 bg-slate-50 rounded-sm border border-slate-100"
              >
                <CheckCircle2 className="h-6 w-6 text-gold shrink-0 mt-0.5" />
                <span className="text-lg text-slate-700 font-medium">{point}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* THE TEAM (PLACEHOLDERS) */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">Decades of combined experience in construction engineering, design, and project management.</p>
          </div>
          
          <div className="flex justify-center max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-navy-dark p-8 rounded-sm text-center border border-slate-700/50 max-w-sm w-full"
            >
              <div className="w-48 h-48 bg-slate-800 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                <Image 
                  src="/images/ceo_drive.jpg"
                  alt="CEO & Director of Operations"
                  width={192}
                  height={192}
                  className="object-cover w-full h-full object-top transition-all duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gold">Founder</h3>
              <p className="text-slate-300 text-sm tracking-wide uppercase">CEO & Director of Operations</p>
            </motion.div>
          </div>
        </div>
      </section>

    </PageWrapper>
  );
}
