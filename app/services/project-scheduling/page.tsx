import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageWrapper from '@/components/PageWrapper';
import { CheckCircle2, CalendarDays, CalendarRange, Activity, Users, Layers, RotateCcw, FileSpreadsheet, FileDown } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Construction Project Scheduling | Buildimize Group',
  description: 'CPM schedules, Gantt charts, and baseline planning for US contractors and developers. Primavera P6 and MS Project. Fast turnaround, all 50 states.',
};

const INCLUDED_ITEMS = [
  { icon: CalendarDays, text: "Baseline CPM Schedule (Primavera P6 / MS Project)" },
  { icon: CalendarRange, text: "Gantt chart with milestone tracking" },
  { icon: Activity, text: "Critical path and float analysis" },
  { icon: Users, text: "Resource-loaded schedules" },
  { icon: Layers, text: "Phased scheduling: pre-construction, construction, closeout" },
  { icon: RotateCcw, text: "Schedule recovery plans for delayed projects" },
  { icon: FileSpreadsheet, text: "Monthly update reports" },
  { icon: FileDown, text: "PDF and native file delivery (.xer, .mpp)" }
];

const WHY_CHOOSE_US = [
  "US construction knowledge — we understand permit timelines, inspection holds, and trade sequencing",
  "Baseline schedules delivered in 3–5 business days",
  "Lender, bonding, and owner-ready documentation"
];

const PROCESS_STEPS = [
  { title: "Share Project Info", desc: "Send drawings, scope, and contract milestones" },
  { title: "We Build the Schedule", desc: "CPM schedule with all activities, durations, and dependencies" },
  { title: "Review & Revise", desc: "We incorporate your feedback and finalize the baseline" },
  { title: "Deliver", desc: "Receive final files plus ongoing update support" }
];

export default function SchedulingPage() {
  return (
    <PageWrapper>
      {/* HERO SECTION */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-navy">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80"
            alt="project manager reviewing construction schedule chart"
            fill
            className="object-cover opacity-30"
            priority
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight">
            Keep Your Project <span className="text-gold">On Time</span>, Every Time
          </h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed font-sans">
            CPM Scheduling, Gantt Charts & Baseline Planning for US Construction Projects
          </p>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy uppercase tracking-wide">What&apos;s Included</h2>
            <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {INCLUDED_ITEMS.map((item, idx) => (
              <div key={idx} className="bg-white p-8 border border-slate-200 rounded-sm hover:border-gold transition-colors text-center group">
                <div className="w-16 h-16 mx-auto bg-slate-50 border border-slate-100 flex items-center justify-center rounded-full mb-6 group-hover:bg-gold/10 transition-colors">
                  <item.icon className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-[17px] font-bold text-navy font-sans leading-tight">{item.text}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TWO COLUMN: WHY CHOOSE US & PROCESS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* WHY CHOOSE US */}
            <div>
              <h2 className="text-3xl font-bold text-navy uppercase tracking-wide mb-8">Why Choose Us</h2>
              <div className="space-y-6">
                {WHY_CHOOSE_US.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-gold shrink-0 mt-1" />
                    <p className="text-slate-600 text-[15px] font-sans leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* OUR PROCESS */}
            <div>
              <h2 className="text-3xl font-bold text-navy uppercase tracking-wide mb-8">Our Process</h2>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent hidden-before-md">
                {PROCESS_STEPS.map((step, idx) => (
                  <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-100 text-navy font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:bg-gold group-hover:text-white transition-colors">
                      {idx + 1}
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 p-6 rounded-sm border border-slate-100 shadow-sm hover:border-gold transition-colors">
                      <h3 className="font-bold text-navy text-lg mb-2 font-sans">{step.title}</h3>
                      <p className="text-slate-600 font-sans">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy text-center px-4 border-t border-gold relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M0 40L40 0H20L0 20M40 40V20L20 40" fill="none" stroke="currentColor" strokeWidth="1"/></pattern></defs><rect width="100%" height="100%" fill="url(#grid-pattern)"/></svg>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-wide">Need a schedule that keeps your project on track?</h2>
          <p className="text-xl pb-3 text-slate-300 font-sans mb-10 max-w-2xl mx-auto">
            Contact us today.
          </p>
          <Link href="/contact" className="inline-block bg-gold text-navy hover:bg-white font-bold text-lg px-10 py-4 rounded-sm transition-colors duration-300 uppercase tracking-widest shadow-lg">
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </PageWrapper>
  );
}
