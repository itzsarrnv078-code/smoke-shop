import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const FeaturedCollection = () => {
  return (
    <section id="featured" className="py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative group rounded-[40px] overflow-hidden border border-white/10 aspect-[16/9] md:aspect-[21/9]">
          {/* Background Image */}
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB4glzw2VgI0WOJRDYl8E3pf-i6yDVQCV5HQ&s" 
            alt="Premium Glass Water Pipes" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center px-8 md:px-20">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-xl"
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-bold tracking-[0.3em] text-neon-green uppercase bg-neon-green/10 border border-neon-green/20 rounded-full">
                Featured Collection
              </span>
              <h2 className="text-4xl md:text-7xl font-display font-bold mb-6 leading-[0.9] text-white">
                PREMIUM <span className="text-neon-purple">GLASS</span> <br />
                WATER PIPES
              </h2>
              <p className="text-white/60 text-lg mb-10 font-light max-w-md">
                Discover our curated selection of hand-blown artistic pieces and high-performance 
                scientific glass. Only the best for the true guru.
              </p>
              
              <a 
                href="#products" 
                className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-neon-green transition-all group/btn"
              >
                SHOP COLLECTION
                <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-10 right-10 hidden lg:block">
            <div className="w-32 h-32 border border-white/10 rounded-full flex items-center justify-center animate-spin-slow">
              <div className="w-24 h-24 border border-neon-green/20 rounded-full flex items-center justify-center">
                <div className="w-16 h-16 border border-neon-purple/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
