import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCTS } from '../constants';
import { ShoppingBag, Info } from 'lucide-react';

const Products = () => {
  const categories = [
    'All',
    'New Arrivals',
    'Glass Pipes & Bongs',
    'Vapes & E-Cigarettes',
    'Hookahs & Accessories',
    'Rolling Papers & Wraps',
    'Grinders & Tools',
    'CBD Products',
    'Kratom & 7-Hydroxy',
    'THC Products',
    'Cigars & Cigarettes',
    'Detox Solutions',
    'Accessories & Refills'
  ];

  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : activeCategory === 'New Arrivals'
      ? PRODUCTS.filter(p => p.isNew)
      : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            OUR <span className="text-neon-purple">COLLECTION</span>
          </motion.h2>
          <p className="text-white/60 max-w-2xl mx-auto font-light">
            Browse our premium selection of smoking essentials. Please note that all products 
            are available for in-store purchase only.
          </p>
        </div>

        {/* Featured Section: Premium Glass Water Pipes */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 relative rounded-[40px] overflow-hidden border border-white/10 aspect-[21/9] md:aspect-[3/1]"
        >
          <img 
            src="/input_file_1.png" 
            alt="Premium Selection" 
            className="w-full h-full object-cover opacity-70"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
          <div className="absolute inset-0 flex items-end p-8 md:p-16">
            <div className="max-w-2xl">
              <div className="inline-block px-4 py-1 rounded-full bg-neon-purple text-white text-[10px] font-bold uppercase tracking-widest mb-4">
                Featured Collection
              </div>
              <h3 className="text-3xl md:text-5xl font-display font-bold mb-4">
                PREMIUM <span className="text-neon-purple">GLASS</span> <br />
                WATER PIPES
              </h3>
              <p className="text-white/70 font-light hidden md:block">
                Discover our hand-picked selection of artistic and functional glass pieces. 
                From classic beakers to intricate recyclers, we have the perfect piece for your collection.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat 
                  ? 'bg-neon-green text-black font-bold' 
                  : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={`glass-card overflow-hidden group transition-all duration-500 ${
                  product.isNew 
                    ? 'border-neon-green/20 hover:border-neon-green/50 shadow-[0_0_20px_rgba(57,255,20,0.05)]' 
                    : 'hover:border-neon-purple/30'
                }`}
              >
                <div className="relative aspect-square overflow-hidden bg-charcoal">
                  {product.isNew && (
                    <div className="absolute top-0 left-0 z-10">
                      <div className="bg-neon-green text-black text-[10px] font-bold px-4 py-1.5 rounded-br-xl uppercase tracking-widest shadow-[0_0_20px_rgba(57,255,20,0.4)] border-b border-r border-black/10 animate-pulse">
                        New Arrival
                      </div>
                    </div>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
                    <span className="bg-neon-purple/90 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
                      In-Store Only
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="text-[10px] text-neon-green font-bold uppercase tracking-widest mb-2">
                    {product.category}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-neon-purple transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-white/50 text-sm font-light mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <span className="text-lg font-bold text-white">
                      {product.price || 'Contact for Price'}
                    </span>
                    <div className="flex gap-2">
                      <button className="p-2 bg-white/5 rounded-lg hover:bg-white/10 text-white/70 transition-colors">
                        <Info size={18} />
                      </button>
                      <button className="p-2 bg-neon-purple/20 text-neon-purple rounded-lg hover:bg-neon-purple hover:text-white transition-all">
                        <ShoppingBag size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20 text-white/40">
            No products found in this category.
          </div>
        )}

        <div className="mt-20 text-center">
          <p className="text-white/40 text-sm italic">
            * Inventory changes daily. Visit us in-store to see our full current selection.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products;
