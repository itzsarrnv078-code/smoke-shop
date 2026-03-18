import React from 'react';
import { motion } from 'motion/react';

const Gallery = () => {
  const images = [
    {
      url: "https://d14tal8bchn59o.cloudfront.net/nKECkCef2jjG7RaCJ_mbtjqGfhrw5kb8kKkecIDiYlg/plain/https%3A%2F%2F02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com%2Fsites%2F111439%2Fphotos%2F23107235%2FGemini_Generated_Image_hh3362hh3362hh33_%25281%2529_original.png",
      alt: "Smoke Guru Collection 1"
    },
    {
      url: "https://lh3.googleusercontent.com/p/AF1QipM3zOYqfBDnONOx3_inK1MffMMB5QEOrUbvr5cl=s1360-w1360-h1020-rw",
      alt: "Smoke Guru Collection 2"
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
            OUR <span className="text-neon-purple">GALLERY</span>
          </h2>
          <p className="text-white/60 font-light max-w-2xl mx-auto">
            A glimpse into the premium selection and artistic pieces available at Smoke Guru.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group rounded-[32px] overflow-hidden border border-white/10 aspect-video"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <p className="text-white font-display text-xl font-bold tracking-tight">
                  {image.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
