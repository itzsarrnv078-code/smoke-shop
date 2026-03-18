import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Users, Star } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <ShieldCheck className="text-neon-green" size={32} />,
      title: "Quality Guaranteed",
      description: "We source only the highest quality glass and authentic vape brands for our customers."
    },
    {
      icon: <Users className="text-neon-purple" size={32} />,
      title: "Expert Staff",
      description: "Our team is knowledgeable and ready to help you find the perfect product for your needs."
    },
    {
      icon: <Star className="text-neon-green" size={32} />,
      title: "Local Favorite",
      description: "Proudly serving the Sparks and Reno community with premium smoke shop essentials."
    }
  ];

  return (
    <section id="about" className="py-24 bg-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-[4/5]">
              <img 
                src="https://lh3.googleusercontent.com/geougc-cs/ABOP9pvMB2_AeFoy8Ww-DXPA1kCySjnj7uljtR_cOzhvFt0JKDJycD3-ZmFiTg3hJkur-OhUC-7SOIM1ye_bR9tqsgVJgKYEskBtKSohTCIK27rm7oQWhwDAMzkykAMhXrf0KTurtMTRqff8Xr20=s3024-w3024-h1722-rw" 
                alt="Smoke Guru Storefront" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-neon-green text-black px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  Sparks, NV
                </span>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-[4/5] mt-8">
              <img 
                src="https://d14tal8bchn59o.cloudfront.net/vhRmnV12OhdBtZCvYmDXBqugW1LO61bhiqsoEBBmoDc/w:1920/plain/https%3A%2F%2F02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com%2Fsites%2F111439%2Fphotos%2F23128127%2Fpano_zoom_%25282%2529_original.jpg" 
                alt="Smoke Guru Interior" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-neon-purple text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  Premium Selection
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
              THE PREMIER <br />
              <span className="text-neon-green">SMOKE EXPERIENCE</span> <br />
              IN NEVADA
            </h2>
            <p className="text-white/60 text-lg mb-8 font-light leading-relaxed">
              Smoke Guru is more than just a smoke shop; it's a destination for enthusiasts 
              who appreciate quality and variety. Located in the heart of Sparks, we've 
              curated a selection that ranges from artistic hand-blown glass to the 
              latest in vaping technology.
            </p>
            
            <div className="grid gap-6 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="shrink-0">{feature.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{feature.title}</h3>
                    <p className="text-white/50 text-sm font-light">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="grid sm:grid-cols-3 gap-8 pt-8 border-t border-white/10">
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-white mb-1">500+</div>
                <div className="text-xs text-white/40 uppercase tracking-widest">Products</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-white mb-1">4.8</div>
                <div className="text-xs text-white/40 uppercase tracking-widest">Rating</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-white mb-1">100%</div>
                <div className="text-xs text-white/40 uppercase tracking-widest">Local</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
