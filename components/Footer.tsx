import Link from 'next/link';
import Image from 'next/image';
import { HardHat, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-white border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="bg-white p-1 px-2 rounded inline-flex items-center shadow-sm">
                <Image src="https://lh3.googleusercontent.com/d/11vFZb80wOjXeoqw_uArqu43sRk1yToQo" alt="Buildimize Group" width={180} height={40} className="object-contain max-h-10" unoptimized={true} referrerPolicy="no-referrer" />
              </div>
            </Link>
            <p className="text-slate-400 font-sans text-sm leading-relaxed max-w-sm">
              Professional firm offering complete construction documentation and design support to US clients nationwide.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a href="https://www.linkedin.com/company/buildimize-group/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-gold transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-gold transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="https://www.facebook.com/profile.php?id=61590961409680" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-gold transition-colors"><Facebook className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4 text-white uppercase tracking-wider relative inline-block">
              Quick Links
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-1 bg-gold"></span>
            </h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-slate-400 font-sans hover:text-gold transition-colors text-sm uppercase tracking-wide">Home</Link></li>
              <li><Link href="/about" className="text-slate-400 font-sans hover:text-gold transition-colors text-sm uppercase tracking-wide">About Us</Link></li>
              <li><Link href="/services" className="text-slate-400 font-sans hover:text-gold transition-colors text-sm uppercase tracking-wide">Our Services</Link></li>
              <li><Link href="/contact" className="text-slate-400 font-sans hover:text-gold transition-colors text-sm uppercase tracking-wide">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4 text-white uppercase tracking-wider relative inline-block">
              Top Services
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-1 bg-gold"></span>
            </h3>
            <ul className="space-y-3">
              <li><Link href="/services/drawings-and-permits" className="text-slate-400 font-sans hover:text-gold transition-colors text-sm uppercase tracking-wide">Drawings & Permits</Link></li>
              <li><Link href="/services/3d-rendering" className="text-slate-400 font-sans hover:text-gold transition-colors text-sm uppercase tracking-wide">3D Rendering</Link></li>
              <li><Link href="/services/shop-drawings-as-builts" className="text-slate-400 font-sans hover:text-gold transition-colors text-sm uppercase tracking-wide">Shop Drawings</Link></li>
              <li><Link href="/services/bim-modeling" className="text-slate-400 font-sans hover:text-gold transition-colors text-sm uppercase tracking-wide">BIM Modeling</Link></li>
              <li><Link href="/services/estimating-and-bidding" className="text-slate-400 font-sans hover:text-gold transition-colors text-sm uppercase tracking-wide">Estimating & Bidding</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4 text-white uppercase tracking-wider relative inline-block">
              Contact Us
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-1 bg-gold"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <span className="text-slate-400 font-sans text-sm">Serving all 50 US States Nationwide</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gold shrink-0" />
                <span className="text-slate-400 font-sans text-sm">+1 (346) 440 6862</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gold shrink-0" />
                <span className="text-slate-400 font-sans text-sm">info@buildimizegroup.com</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-slate-800 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans text-slate-500">
          <p>© {currentYear} Buildimize Group. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
