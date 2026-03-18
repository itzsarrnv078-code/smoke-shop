import React from 'react';
import { motion } from 'motion/react';
import { REVIEWS } from '../constants';
import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  return (
    <section id="reviews" className="py-24 bg-charcoal relative overflow-hidden">
      {/* Background Image with Blur */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/smokeguru_store/1920/1080" 
          alt="Smoke Guru Store" 
          className="w-full h-full object-cover opacity-10 blur-sm"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-[100px] -mr-48 -mt-48"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            WHAT OUR <span className="text-neon-green">CUSTOMERS</span> SAY
          </motion.h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={24} className="fill-neon-green text-neon-green" />
            ))}
            <span className="ml-2 text-xl font-bold">4.8/5</span>
          </div>
          <p className="text-white/40 text-sm uppercase tracking-widest">Based on 150+ Google Reviews</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 relative"
            >
              <Quote className="absolute top-6 right-8 text-white/5" size={60} />
              
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-neon-green text-neon-green" />
                ))}
              </div>
              
              <p className="text-white/70 italic mb-8 font-light leading-relaxed">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-green to-neon-purple flex items-center justify-center font-bold text-black">
                  {review.author[0]}
                </div>
                <div>
                  <h4 className="font-bold text-white">{review.author}</h4>
                  <p className="text-xs text-white/40 uppercase tracking-tighter">{review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://share.google/6cSLDUeDE8SJhHyz9" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-neon-green hover:text-white transition-colors font-bold border-b border-neon-green/30 pb-1"
          >
            READ ALL GOOGLE REVIEWS
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
