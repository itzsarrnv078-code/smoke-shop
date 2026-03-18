import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Navigation, ExternalLink } from 'lucide-react';
import { HOURS } from '../constants';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
              VISIT <span className="text-neon-green">US</span>
            </h2>
            <p className="text-white/60 text-lg mb-12 font-light">
              Stop by our Sparks location to explore our full collection. 
              Our experts are ready to assist you.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neon-green group-hover:bg-neon-green group-hover:text-black transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-1">Address</h4>
                  <p className="text-xl font-medium">2975 El Rancho Dr #109, Sparks, NV 89431</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neon-purple group-hover:bg-neon-purple group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-1">Phone</h4>
                  <a href="tel:7756578297" className="text-xl font-medium hover:text-neon-purple transition-colors">(775) 657-8297</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neon-green">
                  <Clock size={24} />
                </div>
                <div className="w-full">
                  <h4 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-4">Business Hours</h4>
                  <div className="grid gap-2">
                    {HOURS.map((item) => (
                      <div key={item.day} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                        <span className="text-white/70">{item.day}</span>
                        <span className="font-bold">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://maps.app.goo.gl/6cSLDUeDE8SJhHyz9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-neon-green text-black py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white transition-all"
              >
                <Navigation size={20} />
                GET DIRECTIONS
              </a>
              <a
                href="https://share.google/6cSLDUeDE8SJhHyz9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-white/5 border border-white/10 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
              >
                <ExternalLink size={20} />
                GOOGLE PROFILE
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-[500px] lg:h-auto min-h-[400px] rounded-3xl overflow-hidden border border-white/10 relative bg-charcoal"
          >
            <iframe
              title="Smoke Guru Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3076.657814981734!2d-119.7828!3d39.5445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80993f3f3f3f3f3f%3A0x3f3f3f3f3f3f3f3f!2sSmoke%20Guru!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.2)' }}
              allowFullScreen
              loading="lazy"
            ></iframe>
            <div className="absolute inset-0 pointer-events-none border-[12px] border-black/20 rounded-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
