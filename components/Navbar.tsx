'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, HardHat, Phone, MapPin, MousePointer2, Facebook, Linkedin, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact Us', path: '/contact' },
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
                <span className="text-slate-300">Call Us: <span className="font-semibold text-white">+1 3464406862</span></span>
              </div>
              <div className="flex items-center space-x-2 whitespace-nowrap">
                <MapPin className="h-4 w-4 text-gold" />
                <span className="text-slate-300"><span className="hidden sm:inline">Service Area: </span><span className="font-semibold text-white">All 50 US States</span></span>
              </div>
              <div className="flex items-center space-x-2 whitespace-nowrap">
                <MousePointer2 className="h-4 w-4 text-gold" />
                <span className="text-slate-300">Follow Us:</span>
                <div className="flex items-center space-x-2.5 ml-1">
                  <a href="#" className="text-white hover:text-gold transition-colors"><Facebook className="h-3.5 w-3.5" /></a>
                  <a href="#" className="text-white hover:text-gold transition-colors"><Linkedin className="h-3.5 w-3.5" /></a>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-6 mt-1 lg:mt-0">
              <Link href="/contact" className="border border-slate-600 text-slate-300 hover:border-gold hover:text-gold px-4 py-1 rounded-full font-medium transition-colors hidden sm:block">
                Request Custom Quote
              </Link>
              <button aria-label="Search" className="text-white hover:text-gold transition-colors">
                <Search className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <nav className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <Image src="https://lh3.googleusercontent.com/d/11vFZb80wOjXeoqw_uArqu43sRk1yToQo" alt="Buildimize Group" width={280} height={80} className="object-contain max-h-20" priority referrerPolicy="no-referrer" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`font-sans font-bold text-[13px] uppercase tracking-wider transition-all duration-200 px-3 py-1.5 rounded-sm ${
                  pathname === link.path
                    ? 'bg-gold text-navy'
                    : 'text-slate-600 hover:text-navy hover:bg-slate-100'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-navy text-white px-6 py-2.5 rounded-sm font-bold font-sans hover:bg-gold hover:text-navy transition-colors duration-300 shadow-sm"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
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
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden shadow-lg"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-4 text-base font-sans font-bold uppercase ${
                    pathname === link.path
                      ? 'bg-gold text-navy'
                      : 'text-slate-600 hover:text-navy hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-3 pt-4">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-navy text-white px-6 py-3 rounded-sm font-bold font-sans hover:bg-gold hover:text-navy transition-colors duration-300"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </nav>
    </header>
  );
}
