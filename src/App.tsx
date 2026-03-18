import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedCollection from './components/FeaturedCollection';
import Products from './components/Products';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'motion/react';
import { Phone } from 'lucide-react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-black selection:bg-neon-green selection:text-black">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-neon-green z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <FeaturedCollection />
        <Products />
        <Gallery />
        <Reviews />
        
        {/* Interior Banner */}
        <section className="py-20 bg-black overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-[40px] overflow-hidden border border-white/10 aspect-[21/9] md:aspect-[3/1]">
              <img 
                src="https://d14tal8bchn59o.cloudfront.net/vhRmnV12OhdBtZCvYmDXBqugW1LO61bhiqsoEBBmoDc/w:1920/plain/https%3A%2F%2F02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com%2Fsites%2F111439%2Fphotos%2F23128127%2Fpano_zoom_%25282%2529_original.jpg" 
                alt="Smoke Guru Interior" 
                className="w-full h-full object-cover opacity-60"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
              <div className="absolute inset-0 flex items-center px-8 md:px-20">
                <div className="max-w-lg">
                  <h3 className="text-3xl md:text-5xl font-display font-bold mb-4">
                    STEP INTO THE <br />
                    <span className="text-neon-green">GURU'S DEN</span>
                  </h3>
                  <p className="text-white/60 mb-8 font-light hidden md:block">
                    Explore our massive selection of premium vapes and accessories in a high-end, 
                    welcoming atmosphere.
                  </p>
                  <a 
                    href="https://maps.app.goo.gl/6cSLDUeDE8SJhHyz9" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-neon-green text-black px-6 py-3 rounded-full font-bold hover:bg-white transition-all"
                  >
                    GET DIRECTIONS
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />

      {/* Mobile Floating Call Button */}
      <a
        href="tel:7756578297"
        className="md:hidden fixed bottom-6 right-6 z-40 w-14 h-14 bg-neon-green text-black rounded-full shadow-2xl shadow-neon-green/20 flex items-center justify-center animate-bounce"
      >
        <Phone size={24} />
      </a>
    </div>
  );
}

