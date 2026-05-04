import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Zap, Timer } from 'lucide-react';

const PromotionalPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Show after 3 seconds
    const timer = setTimeout(() => {
      if (!hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    }, 3000);

    // Or show when scrolling 30% down the page
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;
      
      if (scrollPosition / (documentHeight - windowHeight) > 0.3 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasShown]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="bg-gradient-to-br from-black via-slate-900 to-indigo-950 border border-white/20 rounded-[2rem] overflow-hidden max-w-4xl w-full flex flex-col md:flex-row relative shadow-[0_0_50px_rgba(57,255,20,0.15)]"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-20 p-2 bg-black/50 text-white rounded-full hover:bg-black/80 hover:text-neon-green transition-colors"
            >
              <X size={24} />
            </button>

            {/* Left side: Text & CTA */}
            <div className="md:w-[55%] p-8 md:p-12 flex flex-col justify-center order-2 md:order-1 relative z-10">
              <div className="flex items-center gap-2 text-neon-green font-bold uppercase tracking-widest mb-4">
                <Zap size={20} className="fill-neon-green" />
                ⚡ LIMITED TIME DEAL!
              </div>
              
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight mb-4">
                Get the Geek Bar Pulse X at an <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-pink-500">unbeatable price</span>
              </h2>
              
              <div className="flex flex-col mb-6 drop-shadow-[0_0_15px_rgba(57,255,20,0.4)]">
                <span className="text-2xl md:text-3xl font-extrabold text-white mb-1 uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
                  4 Pieces For
                </span>
                <div className="text-4xl md:text-5xl font-extrabold text-neon-green">
                  💨 Now Only $99 <span className="text-xl text-white/50 font-normal ml-2">+ Tax</span>
                </div>
              </div>
              
              <p className="text-white/70 text-lg mb-8 font-light leading-relaxed">
                Experience next-level vaping with premium flavor, sleek design, and long-lasting performance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <a 
                  href="#products"
                  onClick={() => setIsOpen(false)}
                  className="bg-neon-green text-black px-6 py-4 rounded-xl font-bold text-center hover:bg-white transition-all shadow-[0_0_20px_rgba(57,255,20,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                >
                  👉 Shop Now
                </a>
                <a 
                  href="https://maps.app.goo.gl/6cSLDUeDE8SJhHyz9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 text-white border border-white/20 px-6 py-4 rounded-xl font-bold text-center hover:bg-white/20 transition-colors"
                >
                  👉 Grab Yours Before It's Gone
                </a>
              </div>
              
              <div className="flex items-center gap-2 text-white/50 text-sm font-medium">
                <Timer size={18} className="text-orange-500" />
                ⏳ Hurry! Limited stock available
              </div>
            </div>

            {/* Right side: Product Image */}
            <div className="md:w-[45%] relative min-h-[300px] flex items-center justify-center p-8 bg-black/60 order-1 md:order-2 overflow-hidden">
              {/* Background glow behind image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-neon-purple/20 to-transparent"></div>
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10"
              >
                <img 
                  src="https://bigmosmokeshop.com/wp-content/uploads/2024/06/geek-bar-pulse-x-grp.webp" 
                  alt="Geek Bar Pulse X" 
                  className="w-full h-auto max-w-sm object-contain drop-shadow-[0_0_30px_rgba(157,78,221,0.5)] transform scale-110"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PromotionalPopup;
