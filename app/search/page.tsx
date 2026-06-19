'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'motion/react';
import PageWrapper from '@/components/PageWrapper';
import { Search, ArrowRight } from 'lucide-react';

const SEARCH_DATA = [
  {
    title: "Drawing & Design Services",
    path: "/services",
    content: "Professional drawing and design services for construction projects.",
    keywords: ["drawings", "design", "blueprints", "drafting", "cad", "architecture"]
  },
  {
    title: "Engineering Support",
    path: "/services",
    content: "Expert engineering support for structural and civil requirements.",
    keywords: ["engineering", "structural", "civil", "support", "engineers"]
  },
  {
    title: "Cost Estimating",
    path: "/services",
    content: "Accurate construction cost estimating and budgeting services.",
    keywords: ["cost", "estimating", "estimates", "budget", "pricing", "financial"]
  },
  {
    title: "Bidding & Procurement",
    path: "/services",
    content: "Assistance with bidding and procurement processes.",
    keywords: ["bidding", "procurement", "vendors", "contracts"]
  },
  {
    title: "Project Management",
    path: "/services",
    content: "Comprehensive project management services to keep your project on track.",
    keywords: ["management", "project", "schedule", "oversight"]
  },
  {
    title: "Real Estate Development",
    path: "/services",
    content: "Real estate development consulting and planning.",
    keywords: ["real estate", "development", "property", "planning"]
  },
  {
    title: "Permit Support",
    path: "/services",
    content: "Assistance with navigating local permit requirements and submittals.",
    keywords: ["permit", "compliance", "zoning", "codes", "authority"]
  },
  {
    title: "Survey & Site Assessment",
    path: "/services",
    content: "Detailed site surveys and land assessment services.",
    keywords: ["survey", "site", "assessment", "land", "topography"]
  },
  {
    title: "Construction Documentation",
    path: "/services",
    content: "Comprehensive documentation for construction phases.",
    keywords: ["documents", "documentation", "specifications", "manuals"]
  },
  {
    title: "About Us",
    path: "/about",
    content: "Learn more about Buildimize Group and our commitment to excellence.",
    keywords: ["about", "company", "who we are", "team", "history", "mission"]
  },
  {
    title: "Contact Us",
    path: "/contact",
    content: "Get in touch with us for your next construction project.",
    keywords: ["contact", "phone", "email", "address", "location", "message", "support"]
  },
  {
    title: "Home",
    path: "/",
    content: "Welcome to Buildimize Group, offering complete construction documentation and design support.",
    keywords: ["home", "welcome", "buildimize", "construction"]
  }
];

function SearchResultsContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const lowercaseQuery = query.toLowerCase();

  const results = SEARCH_DATA.filter(item => {
    if (!lowercaseQuery) return false;
    return (
      item.title.toLowerCase().includes(lowercaseQuery) ||
      item.content.toLowerCase().includes(lowercaseQuery) ||
      item.keywords.some(kw => kw.includes(lowercaseQuery))
    );
  });

  return (
    <div className="py-20 md:py-32 bg-white min-h-[60vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl font-sans font-bold text-navy mb-4">
            Search Results
          </h1>
          <p className="text-lg text-slate-600 font-sans flex items-center gap-2">
            <Search className="h-5 w-5 text-gold" />
            Showing results for <span className="font-semibold text-navy">&quot;{query}&quot;</span>
          </p>
        </div>

        {results.length > 0 ? (
          <div className="space-y-6">
            {results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 border border-slate-200 p-6 sm:p-8 rounded-sm hover:border-gold transition-colors block"
              >
                <Link href={result.path} className="group block">
                  <h2 className="text-2xl font-sans font-bold text-navy mb-3 group-hover:text-gold transition-colors flex items-center justify-between">
                    {result.title}
                    <ArrowRight className="h-5 w-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-gold" />
                  </h2>
                  <p className="text-slate-600 font-sans leading-relaxed">
                    {result.content}
                  </p>
                  <span className="inline-block mt-4 text-sm font-semibold text-gold uppercase tracking-wider">
                    {result.path === '/' ? 'Home' : result.path.replace('/', '')}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 bg-slate-50 border border-slate-200 rounded-sm"
          >
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm border border-slate-100">
              <Search className="h-8 w-8 text-slate-300" />
            </div>
            <h3 className="text-xl font-sans font-bold text-navy mb-2">No results found</h3>
            <p className="text-slate-500 font-sans max-w-md mx-auto">
              We couldn&apos;t find anything matching &quot;{query}&quot;. Try adjusting your search term or refining your keywords.
            </p>
            <div className="mt-8">
              <Link href="/" className="inline-flex items-center gap-2 text-white bg-navy hover:bg-slate-800 px-6 py-3 font-medium transition-colors rounded-sm shadow-sm font-sans">
                Return to Home
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <PageWrapper>
      <Suspense fallback={
        <div className="py-32 flex justify-center bg-white min-h-[60vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold"></div>
        </div>
      }>
        <SearchResultsContent />
      </Suspense>
    </PageWrapper>
  );
}
