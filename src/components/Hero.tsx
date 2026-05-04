import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MapPin, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAF4FmZCRdv9OVm9W_-bCB5i_11bUUFSOWLwru6goIsT93Y3zV7mh2pAe3s-FIwMLAXrm53tsi_st0NshPzgIG6W9PK2wYlncGLL-XunwvO98YP1CjQDiJG9y__HClA7w418aOWLNbpI4gsK=s1360-w1360-h1020-rw" 
          alt="Smoke Guru Storefront" 
          className="w-full h-full object-cover transition-opacity duration-1000"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Animated Glows */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-neon-green/10 rounded-full blur-[120px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-neon-green uppercase bg-neon-green/10 border border-neon-green/20 rounded-full">
            Premium Smoke Shop in Sparks, NV
          </span>
          <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tighter mb-6 leading-[0.9]">
            YOUR ONE-STOP <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-purple">SMOKE SHOP</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 font-light">
            Experience the finest selection of glass, vapes, hookahs, and accessories. 
            Quality products, expert advice, and a premium atmosphere.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#products"
              className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-neon-green transition-all flex items-center justify-center gap-2 group"
            >
              VIEW PRODUCTS
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://maps.app.goo.gl/6cSLDUeDE8SJhHyz9"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white/5 backdrop-blur-md border border-white/10 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              <MapPin size={18} />
              VISIT STORE
            </a>
            <a
              href="tel:7756578297"
              className="w-full sm:w-auto bg-white/5 backdrop-blur-md border border-white/10 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              CALL NOW
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-neon-green rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
