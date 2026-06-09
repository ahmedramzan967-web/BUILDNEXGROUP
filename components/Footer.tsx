import Link from 'next/link';
import { HardHat, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <HardHat className="h-7 w-7 text-gold" />
              <span className="font-bold text-2xl tracking-tight text-white uppercase">
                Archivus
              </span>
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              Professional firm offering complete construction documentation and design support to US clients nationwide.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a href="#" className="text-slate-400 hover:text-gold transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-gold transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-gold transition-colors"><Facebook className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white uppercase tracking-wider relative inline-block">
              Quick Links
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-0.5 bg-gold"></span>
            </h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-slate-300 hover:text-gold transition-colors text-sm">Home</Link></li>
              <li><Link href="/about" className="text-slate-300 hover:text-gold transition-colors text-sm">About Us</Link></li>
              <li><Link href="/services" className="text-slate-300 hover:text-gold transition-colors text-sm">Our Services</Link></li>
              <li><Link href="/contact" className="text-slate-300 hover:text-gold transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white uppercase tracking-wider relative inline-block">
              Top Services
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-0.5 bg-gold"></span>
            </h3>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-slate-300 hover:text-gold transition-colors text-sm">Drawing & Design</Link></li>
              <li><Link href="/services" className="text-slate-300 hover:text-gold transition-colors text-sm">Cost Estimating</Link></li>
              <li><Link href="/services" className="text-slate-300 hover:text-gold transition-colors text-sm">Permit Support</Link></li>
              <li><Link href="/services" className="text-slate-300 hover:text-gold transition-colors text-sm">Project Management</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white uppercase tracking-wider relative inline-block">
              Contact Us
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-0.5 bg-gold"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <span className="text-slate-300 text-sm">Serving all 50 US States Nationwide</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gold shrink-0" />
                <span className="text-slate-300 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gold shrink-0" />
                <span className="text-slate-300 text-sm">hello@archivus.com</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-slate-700/50 bg-navy-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© {currentYear} Archivus. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
