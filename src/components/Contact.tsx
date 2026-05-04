import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Navigation, ExternalLink, Send } from 'lucide-react';
import { HOURS } from '../constants';

const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/itzsarrnv078@gmail.com', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });
      
      if (response.ok) {
        setFormStatus('success');
        form.reset();
        setTimeout(() => setFormStatus('idle'), 5000); // Reset status after 5s
      } else {
        setFormStatus('idle');
      }
    } catch (error) {
      console.error('Error submitting form', error);
      setFormStatus('idle');
    }
  };

  return (
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            VISIT & <span className="text-neon-green">CONTACT US</span>
          </motion.h2>
          <p className="text-white/60 max-w-2xl mx-auto font-light text-lg">
            Stop by our Sparks location to explore our full collection, or send us an inquiry below. 
            Our experts are ready to assist you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-charcoal p-8 md:p-10 rounded-3xl border border-white/10"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center justify-between">
              Send an Inquiry
              <span className="text-xs font-light text-white/40 uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full">Email Us</span>
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_subject" value="New Inquiry from Smoke Guru Website!" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-white/60">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                    placeholder="John Doe"
                    className="w-full bg-black/50 border border-white/10 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-neon-green/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-white/60">Contact Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    required
                    placeholder="(555) 123-4567"
                    className="w-full bg-black/50 border border-white/10 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-neon-green/50 transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-white/60">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                  placeholder="john@example.com"
                  className="w-full bg-black/50 border border-white/10 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-neon-green/50 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-white/60">Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full bg-black/50 border border-white/10 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-neon-green/50 transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={formStatus === 'submitting' || formStatus === 'success'}
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                  formStatus === 'success' 
                    ? 'bg-neon-purple text-white cursor-default' 
                    : formStatus === 'submitting'
                      ? 'bg-white/20 text-white cursor-not-allowed'
                      : 'bg-neon-green text-black hover:bg-white'
                }`}
              >
                {formStatus === 'submitting' && 'SENDING...'}
                {formStatus === 'success' && 'MESSAGE SENT!'}
                {formStatus === 'idle' && (
                  <>
                    <Send size={20} />
                    SEND INQUIRY
                  </>
                )}
              </button>
              
              {formStatus === 'success' && (
                <p className="text-neon-green text-sm text-center">
                  Thank you! We've received your inquiry and will get back to you shortly.
                </p>
              )}
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col h-full"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/5 border border-white/10 p-6 rounded-3xl">
                <div className="w-12 h-12 rounded-xl bg-neon-green/10 text-neon-green flex items-center justify-center mb-4">
                  <MapPin size={24} />
                </div>
                <h4 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-2">Location</h4>
                <p className="font-medium text-white/90">2975 El Rancho Dr #109<br/>Sparks, NV 89431</p>
              </div>
              
              <div className="bg-white/5 border border-white/10 p-6 rounded-3xl">
                <div className="w-12 h-12 rounded-xl bg-neon-purple/10 text-neon-purple flex items-center justify-center mb-4">
                  <Phone size={24} />
                </div>
                <h4 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-2">Call Us</h4>
                <a href="tel:7756578297" className="font-medium text-white/90 hover:text-neon-purple transition-colors">(775) 657-8297</a>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-3xl mb-8 flex-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center">
                  <Clock size={24} />
                </div>
                <h4 className="text-sm font-bold text-white/40 uppercase tracking-widest">Business Hours</h4>
              </div>
              <div className="grid gap-3">
                {HOURS.map((item) => (
                  <div key={item.day} className="flex justify-between items-center pb-2 border-b border-white/5 last:border-0 last:pb-0">
                    <span className="text-white/70">{item.day}</span>
                    <span className="font-bold text-white/90">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              <a
                href="https://maps.app.goo.gl/6cSLDUeDE8SJhHyz9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white/5 border border-white/10 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
              >
                <Navigation size={20} />
                OPEN IN GOOGLE MAPS
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
