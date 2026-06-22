'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, HardHat, Phone, MapPin, MousePointer2, Facebook, Linkedin, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setIsSearchOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Drawings & Permits', path: '/services/drawings-and-permits' },
    { name: '3D Rendering & Walkthroughs', path: '/services/3d-rendering' },
    { name: 'Shop Drawings & As Built Drawings', path: '/services/shop-drawings-as-builts' },
    { name: 'BIM Modeling', path: '/services/bim-modeling' },
    { name: 'Estimating & Bidding', path: '/services/estimating-and-bidding' },
    { name: 'Project Scheduling', path: '/services/project-scheduling' },
    { name: 'All Services', path: '/services' },
  ];

  return (
    <header className="fixed w-full z-50 transition-all duration-300 shadow-sm bg-white border-b border-slate-200">
      {/* Top Bar */}
      <div className="bg-navy border-b border-navy-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-2 lg:gap-0 text-[12px] lg:text-[13px] text-slate-300">
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-x-4 lg:gap-x-8 gap-y-2">
              <div className="flex items-center space-x-2 whitespace-nowrap">
                <Phone className="h-4 w-4 text-gold" />
                <span className="text-slate-300">Call Us: <span className="font-semibold text-white">+1 (346) 440 6862</span></span>
              </div>
              <div className="flex items-center space-x-2 whitespace-nowrap">
                <MapPin className="h-4 w-4 text-gold" />
                <span className="text-slate-300"><span className="hidden sm:inline">Service Area: </span><span className="font-semibold text-white">All 50 US States</span></span>
              </div>
              <div className="flex items-center space-x-2 whitespace-nowrap">
                <MousePointer2 className="h-4 w-4 text-gold" />
                <span className="text-slate-300">Follow Us:</span>
                <div className="flex items-center space-x-2.5 ml-1">
                  <a href="https://www.facebook.com/profile.php?id=61590961409680" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold transition-colors"><Facebook className="h-3.5 w-3.5" /></a>
                  <a href="https://www.linkedin.com/company/buildimize-group/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold transition-colors"><Linkedin className="h-3.5 w-3.5" /></a>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-6 mt-1 lg:mt-0">
              <Link href="/contact" className="border border-slate-600 text-slate-300 hover:border-gold hover:text-gold px-4 py-1 rounded-full font-medium transition-colors hidden sm:block">
                Request Custom Quote
              </Link>
              <button 
                aria-label="Search" 
                className="text-white hover:text-gold transition-colors"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <nav className="w-full bg-white">
      <div className="w-full max-w-full mx-auto px-2 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex justify-between items-center h-24 gap-4 xl:gap-8">
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center gap-2 group w-[160px] lg:w-[180px] xl:w-[200px]">
              <Image src="https://lh3.googleusercontent.com/d/1Cabu_ikPTTeJd7HfUnLjepaaADh7puaz" alt="Buildimize Group" width={200} height={60} className="w-full h-auto object-contain" unoptimized priority referrerPolicy="no-referrer" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center justify-end flex-1 space-x-1">
            {navLinks.map((link) => {
              const isServices = link.name === 'All Services';
              return (
              <Link
                key={link.path}
                href={link.path}
                className={`font-sans font-bold text-[9px] xl:text-[10px] 2xl:text-[11px] uppercase tracking-wider transition-all duration-200 px-1 xl:px-1.5 py-1.5 rounded-sm whitespace-nowrap ${
                  isServices 
                    ? 'text-navy border border-navy hover:bg-navy hover:text-white ml-2 px-2 xl:px-3'
                    : pathname === link.path
                    ? 'bg-gold text-navy'
                    : 'text-slate-600 hover:text-navy hover:bg-slate-100'
                }`}
              >
                {link.name}
              </Link>
            )})}
            <Link
              href="/contact"
              className="bg-[#111111] hover:bg-black text-white px-6 py-2.5 rounded-md font-bold font-sans transition-colors duration-300 shadow-sm text-[12px] xl:text-[13px] whitespace-nowrap ml-4 border border-black"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-navy hover:text-gold p-2 transition-colors"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden shadow-lg"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => {
                const isServices = link.name === 'All Services';
                return (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-4 text-base font-sans font-bold uppercase ${
                    isServices
                      ? 'text-navy border border-navy rounded-sm mt-2 mb-2 text-center hover:bg-navy hover:text-white'
                      : pathname === link.path
                      ? 'bg-gold text-navy'
                      : 'text-slate-600 hover:text-navy hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              )})}
              <div className="px-3 pt-4">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-[#111111] hover:bg-black text-white px-6 py-4 rounded-md font-bold font-sans transition-colors duration-300 border border-black"
                >
                  Contact Us
                </Link>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </nav>

      {/* Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-lg border-b border-slate-200 z-50 p-4"
          >
            <div className="max-w-3xl mx-auto flex items-center justify-between gap-4">
              <form onSubmit={handleSearch} className="flex-1 flex items-center">
                <Search className="h-5 w-5 text-slate-400 mr-3" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-lg text-slate-800 focus:outline-none font-sans"
                  autoFocus
                />
              </form>
              <button 
                onClick={() => setIsSearchOpen(false)}
                className="text-slate-400 hover:text-navy transition-colors p-2"
                aria-label="Close search"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
