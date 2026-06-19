import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageWrapper from '@/components/PageWrapper';
import { CheckCircle2, Calculator, ListChecks, DollarSign, TrendingDown, Users, FileSpreadsheet } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Construction Estimating & Bid Preparation | Buildimize Group',
  description: 'Detailed cost estimating and bid packages for US general contractors and subcontractors. CSI format, fast turnaround.',
};

const INCLUDED_ITEMS = [
  { icon: ListChecks, text: "Quantity takeoffs (all trades)" },
  { icon: Calculator, text: "Detailed bid estimates in CSI MasterFormat" },
  { icon: DollarSign, text: "Conceptual and schematic budgets" },
  { icon: TrendingDown, text: "Change order pricing" },
  { icon: Users, text: "Subcontractor bid leveling" },
  { icon: FileSpreadsheet, text: "Excel and PDF deliverables" }
];

const WHY_CHOOSE_US = [
  "Strict adherence to CSI MasterFormat standards preferred by US contractors.",
  "Highly accurate takeoffs ensuring you don't overbid or underbid.",
  "Deep understanding of regional material and labor pricing nuances."
];

const PROCESS_STEPS = [
  { title: "Review Scope", desc: "We review the drawings, specs, and your specific bidding requirements." },
  { title: "Quantity Takeoff", desc: "Our estimators perform detailed on-screen material takeoffs." },
  { title: "Pricing & Assembly", desc: "We apply labor, equipment, and material costs to generate the estimate." },
  { title: "Review & Adjust", desc: "We review the final numbers with you to dial in margins before the bid deadline." }
];

export default function EstimatingPage() {
  return (
    <PageWrapper>
      {/* HERO SECTION */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-navy">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/services_estimating.jpg"
            alt="construction cost estimating spreadsheet"
            fill
            className="object-cover opacity-30"
            priority
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight">
            Estimating & <span className="text-gold">Bidding</span>
          </h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed font-sans">
            We prepare detailed quantity takeoffs, bid estimates, and complete bid packages in CSI format — helping US contractors win more work and control costs.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INCLUDED_ITEMS.map((item, idx) => (
              <div key={idx} className="bg-white p-8 border border-slate-200 rounded-sm hover:border-gold transition-colors text-center group">
                <div className="w-16 h-16 mx-auto bg-slate-50 border border-slate-100 flex items-center justify-center rounded-full mb-6 group-hover:bg-gold/10 transition-colors">
                  <item.icon className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-lg font-bold text-navy font-sans">{item.text}</h3>
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
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-wide">Ready to get started?</h2>
          <p className="text-lg text-slate-300 font-sans mb-10 max-w-2xl mx-auto">
            Contact us today to review your project scope and get a custom quote.
          </p>
          <Link href="/contact" className="inline-block bg-gold text-navy hover:bg-white font-bold text-lg px-10 py-4 rounded-sm transition-colors duration-300 uppercase tracking-widest shadow-lg">
            Contact Us Today
          </Link>
        </div>
      </section>
    </PageWrapper>
  );
}
