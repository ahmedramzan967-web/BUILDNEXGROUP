'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import PageWrapper from '@/components/PageWrapper';
import { 
  PencilRuler, Calculator, FileEdit, ClipboardList, 
  Files, FileSignature, HardHat, Pickaxe, Building 
} from 'lucide-react';

const SERVICES = [
  {
    icon: PencilRuler,
    title: "Drawing & Design Services",
    description: "Complete architectural and structural drawing sets including permit drawings, shop drawings, as-builts, 3D modeling, and BIM/Revit documentation — all PE-stamped and permit-ready.",
    image: "/images/service_drawing_design.png"
  },
  {
    icon: Calculator,
    title: "Cost Estimating",
    description: "Detailed quantity takeoffs, bid estimates, conceptual budgets, change order pricing, and value engineering analysis for GCs, subcontractors, and owners.",
    image: "/images/service_cost_estimating.png"
  },
  {
    icon: FileSignature,
    title: "Permit Support Services",
    description: "Permit application preparation, zoning research, building code compliance reports, HOA submission packages, and variance application support.",
    image: "/images/service_permit_support.png"
  },
  {
    icon: ClipboardList,
    title: "Project Management & Administration",
    description: "Project scheduling, RFI preparation and tracking, submittal logs, meeting minutes, daily reports, and punch list preparation.",
    image: "/images/service_project_management.png"
  },
  {
    icon: Files,
    title: "Construction Documentation",
    description: "Specifications writing, construction contracts, subcontractor agreements, change order documentation, and AIA pay application preparation (G702/G703).",
    image: "/images/service_documentation.png"
  },
  {
    icon: FileEdit,
    title: "Bidding & Procurement Support",
    description: "Full bid package preparation, scope of work writing, RFP/RFQ documents, subcontractor bid leveling, and bid analysis reports.",
    image: "/images/service_bidding_procurement.png"
  },
  {
    icon: HardHat,
    title: "Engineering Support & Coordination",
    description: "Structural calculation coordination, MEP coordination drawings, energy compliance documentation (ComCheck), geotechnical report review, and LEED documentation support.",
    image: "/images/service_engineering_support.png"
  },
  {
    icon: Pickaxe,
    title: "Survey & Site Documentation",
    description: "Survey drawing interpretation, boundary and topographic drawing production, existing conditions plans from photos and measurements, and FEMA flood zone research.",
    image: "/images/service_survey_site.png"
  },
  {
    icon: Building,
    title: "Real Estate & Development Support",
    description: "Feasibility studies, site analysis reports, zoning and land use research, development pro forma preparation, and property due diligence reports.",
    image: "/images/service_real_estate.png"
  }
];

export default function ServicesPage() {
  return (
    <PageWrapper>
      {/* HERO BANNER */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center bg-navy-dark overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/services_hero_construction.png"
            alt="Services"
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
            Our <span className="text-gold">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed"
          >
            Comprehensive remote solutions for US construction professionals.
          </motion.p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
            {SERVICES.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 3) * 0.1 }}
                className="bg-navy border border-slate-700/50 rounded-sm overflow-hidden flex flex-col group hover:shadow-xl transition-shadow duration-300 relative h-full"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <Image 
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-navy/90 mix-blend-multiply group-hover:bg-navy/80 transition-colors duration-300"></div>
                </div>

                {/* Top heavy accent bar */}
                <div className="h-1.5 w-full bg-gold/50 group-hover:bg-gold transition-colors relative z-10"></div>
                
                <div className="p-8 flex flex-col flex-grow relative z-10 h-full">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm border border-white/20 text-gold rounded-sm flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                    <service.icon className="h-8 w-8" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 leading-tight">{service.title}</h3>
                  <p className="text-slate-300 leading-relaxed text-sm mb-8 flex-grow">
                    {service.description}
                  </p>
                  
                  <div className="mt-auto">
                    <Link 
                      href={`/contact?service=${encodeURIComponent(service.title)}`} 
                      className="block text-center w-full bg-white/10 hover:bg-gold text-white font-bold py-3 px-4 rounded-sm transition-colors duration-300 backdrop-blur-sm border border-white/20 hover:border-gold"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Bottom */}
      <section className="py-20 bg-navy text-center px-4">
         <h2 className="text-3xl font-bold text-white mb-6">Need a custom solution?</h2>
         <p className="text-slate-300 mb-8 max-w-2xl mx-auto">If your project requires specialized attention beyond our standard service offerings, our engineering and management team is ready to assist.</p>
         <Link href="/contact" className="inline-block border-2 border-gold text-gold hover:bg-gold hover:text-navy font-bold text-lg px-8 py-4 rounded-sm transition-colors duration-300">
            Discuss Your Custom Project
         </Link>
      </section>

    </PageWrapper>
  );
}
