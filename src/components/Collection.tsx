
import image_5a9d37f47cfb87f577f89022cb6b468d533ee5b3 from '../assets/image7.png';
import image_4a5c71acb212e258ae9ecbad0be7b3cd33ffebae from '../assets/image8.png';
import image_79d631a57c517027dc42f5919050e971eda4aff2 from '../assets/image6.png';
import { useState } from 'react';
import { ProductCard } from './ProductCard';

const products = [
  {
    id: 1,
    name: 'Body Lotion',
    price: 1199.00,
    category: 'Serums',
    image: image_79d631a57c517027dc42f5919050e971eda4aff2,
  },
  {
    id: 2,
    name: 'Calming Facial Mist',
    price: 7120.00,
    category: 'Moisturizers',
    image: image_4a5c71acb212e258ae9ecbad0be7b3cd33ffebae,
  },
  {
    id: 3,
    name: 'Facial Cream',
    price: 3490.00,
    category: 'Cleansers',
    image: image_5a9d37f47cfb87f577f89022cb6b468d533ee5b3,
  },
 

];

const categories = ['All Products', 'Cleansers', 'Serums', 'Moisturizers', 'Masks'];

interface CollectionProps {
  isDarkMode: boolean;
}

export function Collection({ isDarkMode }: CollectionProps) {
  const [selectedCategory, setSelectedCategory] = useState('All Products');

  const filteredProducts = selectedCategory === 'All Products' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <section className="px-4 md:px-8 py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className={`inline-block px-6 py-2 rounded-full mb-6 ${
            isDarkMode ? 'bg-gray-800/50 backdrop-blur-sm border border-gray-700' : 'bg-white/50 backdrop-blur-sm border border-gray-200'
          }`}>
            <span className={`text-xs tracking-[0.3em] uppercase ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>Our Products</span>
          </div>
          
          <h2 className={`text-4xl md:text-5xl mb-4 tracking-tight ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            The IORA <span className="text-[#C9A882] font-serif italic">Collection</span>
          </h2>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className={`h-[1px] w-16 ${
              isDarkMode ? 'bg-gradient-to-r from-transparent to-gray-600' : 'bg-gradient-to-r from-transparent to-gray-400'
            }`}></div>
            <div className={`w-1.5 h-1.5 rounded-full ${isDarkMode ? 'bg-[#C9A882]' : 'bg-[#C9A882]'}`}></div>
            <div className={`h-[1px] w-16 ${
              isDarkMode ? 'bg-gradient-to-l from-transparent to-gray-600' : 'bg-gradient-to-l from-transparent to-gray-400'
            }`}></div>
          </div>

          <p className={`text-lg max-w-2xl mx-auto mb-10 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Discover our curated selection of premium skincare essentials
          </p>

          {/* Category filters */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm tracking-wide transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#C9A882] text-white shadow-lg shadow-[#C9A882]/30'
                    : isDarkMode
                      ? 'bg-gray-800/50 text-gray-400 border border-gray-700 hover:border-[#C9A882]/50 hover:text-[#C9A882]'
                      : 'bg-white/50 text-gray-600 border border-gray-200 hover:border-[#C9A882]/50 hover:text-[#C9A882]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Product count and transition */}
        <div className="text-center mb-8">
          <p className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
            Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} isDarkMode={isDarkMode} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-16">
          <button className={`px-10 py-4 rounded-full border-2 tracking-wider uppercase transition-all duration-300 group ${
            isDarkMode 
              ? 'border-gray-600 text-gray-300 hover:border-[#C9A882] hover:bg-[#C9A882] hover:text-white' 
              : 'border-gray-300 text-gray-700 hover:border-[#C9A882] hover:bg-[#C9A882] hover:text-white'
          }`}>
            <span className="inline-flex items-center gap-2">
              Explore Full Collection
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}