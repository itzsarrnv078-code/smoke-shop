import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCTS } from '../constants';
import { ShoppingBag, Info, X, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '../types';

const Products = () => {
  const categories = [
    'All',
    'New Arrivals',
    'Glass Pipes & Bongs',
    'Vapes & E-Cigarettes',
    'Nicotine Pouches',
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
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [selectedProduct]);

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : activeCategory === 'New Arrivals'
      ? PRODUCTS.filter(p => p.isNew)
      : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="py-24 bg-black relative">
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
                onClick={() => setSelectedProduct(product)}
                className={`glass-card overflow-hidden group transition-all duration-500 cursor-pointer ${
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
                    src={Array.isArray(product.image) ? product.image[0] : product.image}
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

      {/* Product Modal Popup */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-charcoal border border-white/10 rounded-3xl overflow-hidden max-w-3xl w-full max-h-[90vh] flex flex-col md:flex-row shadow-2xl"
            >
              <div className="md:w-1/2 relative bg-black/50 group/gallery">
                <img 
                  src={Array.isArray(selectedProduct.image) ? selectedProduct.image[currentImageIndex] : selectedProduct.image} 
                  alt={selectedProduct.name} 
                  className="w-full h-full object-cover absolute inset-0 transition-opacity duration-300"
                  referrerPolicy="no-referrer"
                />
                
                {Array.isArray(selectedProduct.image) && selectedProduct.image.length > 1 && (
                  <>
                    <button 
                      onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(prev => prev === 0 ? (selectedProduct.image as string[]).length - 1 : prev - 1); }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full opacity-0 group-hover/gallery:opacity-100 transition-opacity hover:bg-black/80"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button 
                      onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(prev => prev === (selectedProduct.image as string[]).length - 1 ? 0 : prev + 1); }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full opacity-0 group-hover/gallery:opacity-100 transition-opacity hover:bg-black/80"
                    >
                      <ChevronRight size={20} />
                    </button>
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                      {(selectedProduct.image as string[]).map((_, i) => (
                        <button 
                          key={i} 
                          onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(i); }}
                          className={`w-2 h-2 rounded-full transition-all ${i === currentImageIndex ? 'bg-neon-green w-4' : 'bg-white/50'}`}
                        />
                      ))}
                    </div>
                  </>
                )}

                <div className="absolute top-4 left-4">
                  {selectedProduct.isNew && (
                    <span className="bg-neon-green text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                      New Arrival
                    </span>
                  )}
                </div>
                {/* Mobile close button */}
                <button 
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full md:hidden hover:bg-black/80 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="md:w-1/2 p-6 md:p-8 flex flex-col overflow-y-auto max-h-[50vh] md:max-h-[90vh]">
                <div className="flex justify-between items-start mb-4 hidden md:flex">
                  <div className="text-[10px] text-neon-green font-bold uppercase tracking-widest">
                    {selectedProduct.category}
                  </div>
                  <button 
                    onClick={() => setSelectedProduct(null)}
                    className="text-white/50 hover:text-white transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
                
                <div className="text-[10px] text-neon-green font-bold uppercase tracking-widest mb-2 md:hidden">
                  {selectedProduct.category}
                </div>

                <h2 className="text-2xl md:text-3xl font-display font-bold mb-2 text-white">
                  {selectedProduct.name}
                </h2>
                
                <p className="text-white/70 font-light mb-6 text-sm md:text-base">
                  {selectedProduct.description}
                </p>

                {selectedProduct.flavors && selectedProduct.flavors.length > 0 && (
                  <div className="mb-6 flex-1">
                    <h4 className="text-neon-purple font-bold uppercase tracking-widest text-xs mb-3 flex items-center gap-2">
                      Available Flavors
                      <span className="bg-neon-purple/20 text-neon-purple px-2 py-0.5 rounded-full text-[10px]">
                        {selectedProduct.flavors.length}
                      </span>
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedProduct.flavors.map((flavor, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-white/80 bg-white/5 px-3 py-2 rounded-lg border border-white/5">
                          <span className="text-neon-green font-mono text-xs opacity-70 w-5">
                            {index + 1}.
                          </span>
                          {flavor}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-white/50 uppercase tracking-widest mb-1">Price</div>
                    <div className="text-2xl font-bold text-white">
                      {selectedProduct.price || 'Contact for Price'}
                    </div>
                  </div>
                  <div className="bg-neon-purple/20 text-neon-purple px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                    <MapPin size={16} />
                    In-Store Only
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Products;
