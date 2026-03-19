import { Product, Review, BusinessHours } from './types';

export const PRODUCTS: Product[] = [
  // Premium Glass Water Pipes
  {
    id: 'g1',
    name: 'Spiral Water Pipe',
    description: 'Exquisite teal glass with a unique spiral percolator for ultra-smooth hits. 14 inches tall.',
    category: 'Glass Pipes & Bongs',
    image: 'https://avernicsmokeshop.com/cdn/shop/files/bougie-glass-9-full-color-water-pipe-avernic-smoke-shop-2292112_1024x1024.jpg?v=1757740902',
    price: 'visit in store'
  },
  {
    id: 'g2',
    name: 'Purple Artistic Bong',
    description: 'Hand-blown artistic piece with deep purple accents and thick base for stability.',
    category: 'Glass Pipes & Bongs',
    image: 'https://substackcdn.com/image/fetch/$s_!TY14!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F1fdb7df7-25ef-4ed7-85ad-405f13f9f600_828x1059.jpeg',
    price: '$visit in store'
  },
  {
    id: 'g3',
    name: 'Clear Classic Beaker',
    description: 'The gold standard of glass. 9mm thick borosilicate glass beaker with ice pinch.',
    category: 'Glass Pipes & Bongs',
    image: 'https://www.smokecartel.com/cdn/shop/products/5c0961e2b933d-grav-labs-12-quot-beaker-water-pipe-1_dc9507b1-ed5d-49b8-b34d-23e4990c62c4.jpg?v=1571438735&width=1365',
    price: '$visit in store'
  },
  {
    id: 'g4',
    name: 'Iridescent Recycler',
    description: 'Advanced recycling function for the smoothest possible experience. Stunning finish.',
    category: 'Glass Pipes & Bongs',
    image: 'https://picsum.photos/seed/glasspipe4/600/600',
    price: '$visit in store'
  },
  // Vapes & E-Cigarettes
  {
    id: 'v1',
    name: 'Geek Bar Pulse X',
    description: 'The latest innovation from Geek Bar with dual mesh coil and pulse mode for intense flavor.',
    category: 'Vapes & E-Cigarettes',
    image: 'https://bigmosmokeshop.com/wp-content/uploads/2024/06/geek-bar-pulse-x-grp.webp',
    price: '$29.99',
    isNew: true
  },
  {
    id: 'v2',
    name: 'Geek Bar CLIO & CLR',
    description: 'Incredible 50,000 hits capacity. Long-lasting flavor and consistent performance.',
    category: 'Vapes & E-Cigarettes',
    image: 'https://bigmosmokeshop.com/wp-content/uploads/2025/10/geek-bar-clio-platinum.jpg',
    price: '$34.99',
    isNew: true
  },
  {
    id: 'v3',
    name: 'Lost Mary MT 35k',
    description: '35,000 puffs of pure satisfaction with advanced display screen and adjustable airflow.',
    category: 'Vapes & E-Cigarettes',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKtoaItMq7kmnH4ZrBYBsRodxRHTYQzXd34A&s',
    price: '$29.99',
    isNew: true
  },
  {
    id: 'v4',
    name: 'Off Stamps Pods & Kits',
    description: 'Modular vape system with interchangeable pods and battery kits. Sustainable and sleek.',
    category: 'Vapes & E-Cigarettes',
    image: 'https://cdn11.bigcommerce.com/s-nlylv/images/stencil/1280x1280/products/2760/9968/CRYSTAL-CUBE-POD-KIT_MAIN-01-800x800__63949.1757948160.jpg?c=2',
    price: '$34.99',
    isNew: true
  },
  {
    id: 'v5',
    name: 'Foger Pods & Kits',
    description: 'Premium pod system known for intense flavor and reliability. Perfect for daily use.',
    category: 'Vapes & E-Cigarettes',
    image: 'https://cdn.shoplightspeed.com/shops/608288/files/70848500/1652x1652x2/foger-foger-switch-pro-30k-5-disposable-kit.jpg',
    price: '$34.99',
    isNew: true
  },
  {
    id: 'v6',
    name: 'Flum UT Bar 50k',
    description: 'Ultra-high capacity 50,000 puff disposable with sleek design and premium coils.',
    category: 'Vapes & E-Cigarettes',
    image: 'https://cdn11.bigcommerce.com/s-8tn3otes3v/images/stencil/960x960/products/9550/62128/Flum_UT_Bar_50K_Puff_Disposable_Banner__79626.1764350655.jpg?c=2',
    price: '$34.99',
    isNew: true
  },
  {
    id: 'v7',
    name: 'Flum Pebbles 6k',
    description: 'Compact and powerful. The fan-favorite Flum experience in a pocket-sized device.',
    category: 'Vapes & E-Cigarettes',
    image: 'https://smokeabsolute.com/cdn/shop/files/IMG-0005_1445x.webp?v=1695641848',
    price: '$19.99',
    isNew: true
  },
  {
    id: 'v8',
    name: 'Flum Mello 20k',
    description: 'Smooth and mellow flavor profile with 20,000 puff capacity. Elegant design.',
    category: 'Vapes & E-Cigarettes',
    image: 'https://smokesmartvegas.com/wp-content/uploads/2024/06/Flum_Mello_1024x_a376a7fb-54bd-49b6-babc-e3ccec6d40cc.webp',
    price: '$27.99',
    isNew: true
  },
  {
    id: 'v9',
    name: 'Foger Bit 35k',
    description: 'Compact 35,000 puff device with a satisfying draw and rich flavor production.',
    category: 'Vapes & E-Cigarettes',
    image: 'https://img1.wsimg.com/isteam/ip/b5a6b90e-f801-4158-ab79-d3bb6996dcc6/WhatsApp%20Image%202025-07-12%20at%2016.08.08.jpeg/:/rs=w:1280',
    price: '$34.99',
    isNew: true
  },
  {
    id: 'v10',
    name: 'Geek Bar Rai 30k',
    description: 'Premium 30,000 puff disposable from the makers of Geek Bar. Superior build quality.',
    category: 'Vapes & E-Cigarettes',
    image: 'https://sigdistro.com/wp-content/uploads/2025/05/1-2.jpg',
    price: '$29.99',
    isNew: true
  },
  {
    id: 'v11',
    name: 'Geek Bar 0% Nicotine',
    description: 'All the flavor and performance of Geek Bar, with 0% nicotine. Perfect for flavor chasers.',
    category: 'Vapes & E-Cigarettes',
    image: 'https://provape.com/media/catalog/product/cache/896a704700b43f8a3d5d98936b485a9e/g/e/geek_bar_pulse_15k_puffs_zero_nicotine_disposable_1.png',
    price: '$29.99',
    isNew: true
  },
  {
    id: 'v12',
    name: 'Geek Bar Pulse 15K',
    description: 'The legendary 15,000 puff device with dual power modes and a full-screen display.',
    category: 'Vapes & E-Cigarettes',
    image: 'https://cdn11.bigcommerce.com/s-m0kor0s1f1/images/stencil/original/products/587/1092/10_12_2023_Geek_Bar_Pulse_Disposable_Vape_10__51081.1697154596.jpg?c=1',
    price: '$24.99',
    isNew: true
  },
  // Hookahs
  {
    id: 'h1',
    name: 'Modern Stainless Hookah',
    description: 'Industrial design with 4-hose capability and premium glass base for smooth sessions.',
    category: 'Hookahs & Accessories',
    image: 'https://m.media-amazon.com/images/I/51qMZ0lrF3L._AC_UF1000,1000_QL80_.jpg',
    price: '$79.99'
  },
  // CBD
  {
    id: 'c1',
    name: 'Full Spectrum CBD Oil',
    description: '1500mg organic hemp extract for wellness and relaxation. Lab tested quality.',
    category: 'CBD Products',
    image: 'https://cdn.shopify.com/s/files/1/0268/3650/0655/files/Supreme-CBD-Full-Spectrum-Oil-1500mg-Bottle-Box_fc44e47f-e021-41ad-ae31-0f3767dbe73b_540x.jpg?v=1687513742',
    price: '$35.00'
  },
  // Tools
  {
    id: 't1',
    name: 'Precision Zinc Grinder',
    description: '4-piece diamond cut teeth for perfect consistency every time. Durable zinc alloy.',
    category: 'Grinders & Tools',
    image: 'https://cannabmall.com/cdn/shop/products/marijuana_grinders_for_weed_manual_spice_grinder_1000x.jpg?v=1720695474',
    price: '$19.99'
  },
  // Kratom & 7-Hydroxy
  {
    id: 'k1',
    name: 'Kratom Powder, Capsules & Tablets',
    description: 'Premium kratom available in powder, capsules, and tablets for your preferred method.',
    category: 'Kratom & 7-Hydroxy',
    image: 'https://wpcdn.web.wsu.edu/wp-nursing/uploads/sites/3014/2021/07/kratom-792x491.jpg',
    price: 'visit in store'
  },
  {
    id: 'k2',
    name: '7-Hydroxy Products',
    description: 'High-quality 7-hydroxy products including Krave and Perks Dozo.',
    category: 'Kratom & 7-Hydroxy',
    image: 'https://cbdwholesaleus.com/image/cache/catalog/767203576007-800x800_0.jpg',
    price: 'visit in store'
  },
  // THC Products
  {
    id: 'thc1',
    name: 'THC Pre-Rolls',
    description: 'Ready-to-enjoy premium THC pre-rolls.',
    category: 'THC Products',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScthBDvggkyoczOGO_IzCTXONOe77DAx6ecA&s',
    price: 'visit in store'
  },
  {
    id: 'thc2',
    name: 'THC Carts & Gummies',
    description: 'Wide selection of THC cartridges and delicious gummies.',
    category: 'THC Products',
    image: 'https://cdn.shopify.com/s/files/1/2426/0015/files/Pink_Purple_Business_Solution_Pitch_Deck_Presentation.jpg?v=1721427187',
    price: 'visit in store'
  },
  // Cigars & Cigarettes
  {
    id: 'cig1',
    name: 'Premium Cigars',
    description: 'A curated selection of premium cigars for any occasion.',
    category: 'Cigars & Cigarettes',
    image: 'https://www.cratejoy.com/cdn/shop/products/fRl8lIGjRUS4vKDsSkSu.jpg?v=1698111615',
    price: 'visit in store'
  },
  {
    id: 'cig2',
    name: 'Cigarettes',
    description: 'All major brands of cigarettes available.',
    category: 'Cigars & Cigarettes',
    image: 'https://tobaccoinsider.com/wp-content/uploads/2024/08/image-38-1024x683.png',
    price: 'visit in store'
  },
  // Detox Solutions
  {
    id: 'dtx1',
    name: 'Detox Drinks',
    description: 'Reliable detox solutions including Stinger and High Voltage brands.',
    category: 'Detox Solutions',
    image: 'https://cdn11.bigcommerce.com/s-y156s/images/stencil/1500x1500/products/3614/81645/1749b456-40a7-4f1a-b450-16094ef8aa04_DT105__33500.1755216945.JPG?c=2',
    price: 'visit in store'
  },
  // Accessories & Refills
  {
    id: 'acc1',
    name: 'Butane & Torches',
    description: 'High-quality butane refills and powerful torches for all your needs.',
    category: 'Accessories & Refills',
    image: 'https://cdn11.bigcommerce.com/s-1n8r405nxd/images/stencil/1280w/products/13498/28511/Special-Blue-Monster-Pro-Butane-Torch-next-to-its-metal-toolbox__63187.1734030018.jpg?c=2',
    price: 'visit in store'
  },
  {
    id: 'acc2',
    name: '510 Thread Batteries',
    description: 'Reliable 510 thread batteries for your cartridges.',
    category: 'Accessories & Refills',
    image: 'https://ik.imagekit.io/egreensvape/wp-content/uploads/510-threaded-batteries.jpg',
    price: 'visit in store'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Alex Johnson',
    rating: 5,
    text: 'Best selection in Sparks! The staff is super knowledgeable and helped me find exactly what I needed.',
    date: '2 weeks ago'
  },
  {
    id: 'r2',
    author: 'Sarah M.',
    rating: 5,
    text: 'Love the vibe here. Very clean and professional. Their glass collection is insane!',
    date: '1 month ago'
  },
  {
    id: 'r3',
    author: 'Mike R.',
    rating: 4,
    text: 'Great prices on vapes. Definitely my new go-to spot.',
    date: '3 days ago'
  }
];

export const HOURS: BusinessHours[] = [
  { day: 'Monday', hours: '9:00 AM - 10:00 PM' },
  { day: 'Tuesday', hours: '9:00 AM - 10:00 PM' },
  { day: 'Wednesday', hours: '9:00 AM - 10:00 PM' },
  { day: 'Thursday', hours: '9:00 AM - 10:00 PM' },
  { day: 'Friday', hours: '9:00 AM - 10:00 PM' },
  { day: 'Saturday', hours: '9:00 AM - 10:00 PM' },
  { day: 'Sunday', hours: '9:00 AM - 10:00 PM' }
];
