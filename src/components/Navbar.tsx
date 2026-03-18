import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Featured', href: '#featured' },
    { name: 'Products', href: '#products' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-lg py-3 border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#home" className="flex items-center gap-3 group">
              <img 
                src="https://d14tal8bchn59o.cloudfront.net/nKECkCef2jjG7RaCJ_mbtjqGfhrw5kb8kKkecIDiYlg/plain/https%3A%2F%2F02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com%2Fsites%2F111439%2Fphotos%2F23107235%2FGemini_Generated_Image_hh3362hh3362hh33_%25281%2529_original.png" 
                alt="Smoke Guru Logo" 
                className="w-12 h-12 rounded-full border border-neon-green/30 group-hover:scale-110 transition-transform object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <span className="text-xl font-display font-bold tracking-tighter text-white leading-none">
                  SMOKE <span className="text-neon-green">GURU</span>
                </span>
                <span className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold">Nevada</span>
              </div>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-neon-green transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:7756578297"
              className="bg-neon-green text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-white transition-all flex items-center gap-2"
            >
              <Phone size={16} />
              CALL NOW
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-neon-green transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-lg font-medium text-white hover:text-neon-green transition-colors border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-4">
                <a
                  href="tel:7756578297"
                  className="w-full bg-neon-green text-black py-4 rounded-xl text-center font-bold flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  CALL NOW
                </a>
                <a
                  href="https://maps.app.goo.gl/6cSLDUeDE8SJhHyz9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white/10 text-white py-4 rounded-xl text-center font-bold flex items-center justify-center gap-2"
                >
                  <MapPin size={20} />
                  GET DIRECTIONS
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
