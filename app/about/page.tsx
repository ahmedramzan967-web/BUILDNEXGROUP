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
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-navy">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/about_hero_no_humans.jpg"
            alt="Buildimize Group Office"
            fill
            className="object-cover opacity-30"
            priority
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight uppercase"
            >
              About <span className="text-gold">Buildimize</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed font-sans"
            >
              Engineering excellence, precise documentation, and dedicated partnerships—building the foundation of America&apos;s infrastructure.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* COMPANY OVERVIEW */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}
              className="text-xs font-bold font-sans tracking-[0.2em] bg-gold text-navy px-3 py-1 inline-block rounded-sm uppercase mb-4"
            >
              Who We Are
            </motion.h2>
            <motion.p 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}
              className="text-xl text-slate-700 font-sans leading-relaxed"
            >
              Buildimize Group is a professional firm offering complete construction documentation and design support to US clients. We leverage an international team and US-licensed PE partners to serve contractors, engineers, and building owners nationwide.
            </motion.p>
          </div>
        </div>
      </section>

      {/* MISSION & VALUES */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}>
              <h2 className="text-4xl font-display font-bold text-navy mb-6 uppercase">Our Mission</h2>
              <p className="text-lg text-slate-600 font-sans leading-relaxed mb-6">
                To bridge the gap between design and construction by accelerating the documentation process. We empower US contractors and engineers with high-quality, code-compliant, and PE-stamped drawing sets at competitive rates, ensuring project success from bid to closeout.
              </p>
              <div className="flex items-center gap-4 text-navy font-display font-bold">
                <div className="bg-navy p-2 rounded-sm text-gold">
                  <Building2 className="h-6 w-6" />
                </div>
                Building Success Nationwide
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              className="relative h-[400px] rounded-sm overflow-hidden border-2 border-slate-200 shadow-xl bg-white"
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
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold text-navy uppercase">Our Core Values</h2>
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
                  className="bg-white p-8 rounded-sm shadow-sm border border-slate-200 text-center hover:border-gold hover:-translate-y-2 transition-all group"
                >
                  <div className="w-16 h-16 bg-slate-50 border border-slate-200 rounded-sm flex items-center justify-center mx-auto mb-6 group-hover:bg-gold group-hover:text-navy group-hover:border-gold transition-colors text-navy">
                    <val.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-navy mb-3 uppercase">{val.title}</h3>
                  <p className="text-slate-600 font-sans">{val.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* WHY WE'RE DIFFERENT */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-navy uppercase">Why We&apos;re Different</h2>
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
                className="flex items-start gap-4 p-5 bg-slate-50 rounded-sm border border-slate-200 hover:border-gold transition-colors group"
              >
                <CheckCircle2 className="h-6 w-6 text-navy group-hover:text-gold shrink-0 mt-0.5 transition-colors" />
                <span className="text-lg text-slate-700 font-sans font-medium">{point}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* THE TEAM */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4 text-navy uppercase">Leadership Team</h2>
          </div>
          
          <div className="flex justify-center max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-sm border border-slate-200 w-full shadow-lg flex flex-col md:flex-row items-center md:items-start gap-12"
            >
              <div className="shrink-0 w-64 h-64 bg-slate-100 rounded-full mx-auto md:mx-0 flex items-center justify-center overflow-hidden border-4 border-slate-50 relative">
                <Image 
                  src="https://lh3.googleusercontent.com/d/1ESDpM2TL-dlhhwr-mzI280TjW2TvzqZr"
                  alt="Ahmed Ramzan, Founder & CEO"
                  fill
                  sizes="(max-width: 768px) 192vw, 192vw"
                  className="object-cover w-full h-full object-top transition-all duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-left">
                <h3 className="text-3xl font-bold mb-2 text-navy">Ahmed Ramzan</h3>
                <p className="text-[#080404] text-sm tracking-wide uppercase font-bold mb-8">FOUNDER & CEO</p>
                <div className="space-y-4 text-slate-600 font-sans leading-relaxed text-lg text-justify">
                  <p>
                    Ahmed Ramzan started his career in construction cost estimating — learning the industry from the ground up by working with US contractors, reading thousands of drawing sets, and understanding exactly what makes a project succeed or fail on paper before it ever breaks ground.
                  </p>
                  <p>
                    That foundation shaped everything. He founded Buildimize Group with a clear mission: to give US contractors and building owners access to professional-grade construction documentation — PE-stamped drawings, accurate estimates, and complete project support — delivered by a team that genuinely understands how American construction works.
                  </p>
                  <p>
                    With 15+ professionals under his leadership and clients across multiple US states, Ahmed has built a firm where quality is not a promise — it is a process. Every drawing set reviewed. Every estimate verified. Every deadline honored.
                  </p>
                  <p>
                    &quot;His clients don&apos;t just get documents. They get a partner who treats their project like his own.&quot;
                  </p>
                  <div className="mt-8">
                    <a href="tel:+13464406862" className="inline-block bg-[#111111] hover:bg-gold hover:text-navy hover:border-gold text-white px-8 py-3 rounded-md font-bold font-sans transition-colors duration-300 shadow-sm border border-black uppercase text-sm tracking-wider">
                      Call Ahmed Directly
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </PageWrapper>
  );
}
