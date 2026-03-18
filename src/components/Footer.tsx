import React from 'react';
import { Instagram, Facebook, Twitter, Phone, MapPin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <a href="#home" className="flex items-center gap-3 mb-6 group">
              <img 
                src="https://picsum.photos/seed/smokeguru_logo/100/100" 
                alt="Smoke Guru Logo" 
                className="w-10 h-10 rounded-full border border-neon-green/30"
                referrerPolicy="no-referrer"
              />
              <span className="text-xl font-display font-bold tracking-tighter text-white">
                SMOKE <span className="text-neon-green">GURU</span>
              </span>
            </a>
            <p className="text-white/40 text-sm font-light leading-relaxed mb-8">
              Sparks' premier destination for high-quality glass, vapes, and smoking accessories. 
              We pride ourselves on our selection and customer service.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-neon-green hover:text-black transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-neon-purple hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-neon-green hover:text-black transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-white/50 hover:text-neon-green transition-colors text-sm">Home</a></li>
              <li><a href="#about" className="text-white/50 hover:text-neon-green transition-colors text-sm">About Us</a></li>
              <li><a href="#products" className="text-white/50 hover:text-neon-green transition-colors text-sm">Products</a></li>
              <li><a href="#reviews" className="text-white/50 hover:text-neon-green transition-colors text-sm">Reviews</a></li>
              <li><a href="#contact" className="text-white/50 hover:text-neon-green transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Categories</h4>
            <ul className="space-y-4">
              <li><a href="#products" className="text-white/50 hover:text-neon-purple transition-colors text-sm">Glass Pipes</a></li>
              <li><a href="#products" className="text-white/50 hover:text-neon-purple transition-colors text-sm">Vapes & Mods</a></li>
              <li><a href="#products" className="text-white/50 hover:text-neon-purple transition-colors text-sm">Hookahs</a></li>
              <li><a href="#products" className="text-white/50 hover:text-neon-purple transition-colors text-sm">CBD Products</a></li>
              <li><a href="#products" className="text-white/50 hover:text-neon-purple transition-colors text-sm">Rolling Papers</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-neon-green shrink-0" />
                <span className="text-white/50 text-sm">2975 El Rancho Dr #109, Sparks, NV 89431</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-neon-green shrink-0" />
                <a href="tel:7756578297" className="text-white/50 hover:text-white transition-colors text-sm">(775) 657-8297</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-neon-green shrink-0" />
                <span className="text-white/50 text-sm">info@smokeguru.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Smoke Guru. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-white/20 hover:text-white transition-colors text-[10px] uppercase tracking-widest">Privacy Policy</a>
            <a href="#" className="text-white/20 hover:text-white transition-colors text-[10px] uppercase tracking-widest">Terms of Service</a>
            <a href="#" className="text-white/20 hover:text-white transition-colors text-[10px] uppercase tracking-widest">Age Verification</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
