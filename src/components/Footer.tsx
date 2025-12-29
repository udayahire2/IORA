import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

interface FooterProps {
  isDarkMode: boolean;
}

export function Footer({ isDarkMode }: FooterProps) {
  return (
    <footer className={`relative px-4 md:px-8 lg:px-12 py-16 md:py-24 border-t transition-all duration-500 ${
      isDarkMode ? 'border-gray-800/50 bg-gradient-to-b from-transparent to-gray-900/30' : 'border-gray-200/50 bg-gradient-to-b from-transparent to-gray-50/50'
    }`}>
      {/* Decorative top accent */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px ${
        isDarkMode ? 'bg-gradient-to-r from-transparent via-[#C9A882] to-transparent' : 'bg-gradient-to-r from-transparent via-[#C9A882] to-transparent'
      }`}></div>

      <div className="max-w-[1400px] mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-16 md:mb-20">
          
          {/* Brand - Takes more space */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-4">
              <div className={`text-3xl tracking-[0.3em] transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>IORA</div>
              <div className={`h-px w-16 ${
                isDarkMode ? 'bg-[#C9A882]' : 'bg-[#C9A882]'
              }`}></div>
            </div>
            
            <p className={`text-sm md:text-base leading-relaxed max-w-sm transition-colors duration-300 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Natural skincare crafted with intention, powered by botanicals. Experience the art of pure beauty.
            </p>
            
            {/* Social Icons - Premium styling */}
            <div className="flex gap-3 pt-2">
              {[
                { icon: Instagram, label: 'Instagram' },
                { icon: Facebook, label: 'Facebook' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Youtube, label: 'YouTube' }
              ].map((social, index) => (
                <a 
                  key={index}
                  href="#" 
                  aria-label={social.label}
                  className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-[#C9A882] group ${
                    isDarkMode 
                      ? 'border-gray-700 text-gray-500 hover:bg-[#C9A882] hover:text-white' 
                      : 'border-gray-300 text-gray-600 hover:bg-[#C9A882] hover:text-white'
                  }`}
                >
                  <social.icon size={18} className="transition-transform duration-300 group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div className="lg:col-span-2">
            <h3 className={`text-xs tracking-[0.2em] uppercase mb-6 transition-colors duration-300 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>Shop</h3>
            <ul className="space-y-3.5">
              {['All Products', 'Bestsellers', 'New Arrivals', 'Gift Sets'].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className={`text-sm md:text-base inline-flex items-center gap-2 group transition-all duration-300 ${
                      isDarkMode ? 'text-gray-500 hover:text-[#C9A882]' : 'text-gray-600 hover:text-[#C9A882]'
                    }`}
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                    <svg 
                      className="w-3 h-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="lg:col-span-3">
            <h3 className={`text-xs tracking-[0.2em] uppercase mb-6 transition-colors duration-300 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>Support</h3>
            <ul className="space-y-3.5">
              {['Contact Us', 'FAQs', 'Shipping & Returns', 'Track Order'].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className={`text-sm md:text-base inline-flex items-center gap-2 group transition-all duration-300 ${
                      isDarkMode ? 'text-gray-500 hover:text-[#C9A882]' : 'text-gray-600 hover:text-[#C9A882]'
                    }`}
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                    <svg 
                      className="w-3 h-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-3">
            <h3 className={`text-xs tracking-[0.2em] uppercase mb-6 transition-colors duration-300 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>Company</h3>
            <ul className="space-y-3.5">
              {['About Us', 'Our Story', 'Sustainability', 'Careers'].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className={`text-sm md:text-base inline-flex items-center gap-2 group transition-all duration-300 ${
                      isDarkMode ? 'text-gray-500 hover:text-[#C9A882]' : 'text-gray-600 hover:text-[#C9A882]'
                    }`}
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                    <svg 
                      className="w-3 h-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section - Enhanced */}
        <div className={`pt-10 border-t transition-all duration-500 ${
          isDarkMode ? 'border-gray-800/50' : 'border-gray-200/50'
        }`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <p className={`text-xs md:text-sm transition-colors duration-300 ${
              isDarkMode ? 'text-gray-500' : 'text-gray-600'
            }`}>
              &copy; 2025 IORA Skincare. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center justify-center gap-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map((item, index) => (
                <a 
                  key={index}
                  href="#" 
                  className={`text-xs md:text-sm transition-all duration-300 hover:text-[#C9A882] ${
                    isDarkMode ? 'text-gray-500' : 'text-gray-600'
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Decorative element */}
          <div className="flex items-center justify-center mt-10">
            <div className={`flex items-center gap-3 ${
              isDarkMode ? 'text-gray-700' : 'text-gray-300'
            }`}>
              <div className="h-px w-8 bg-current"></div>
              <div className="w-1 h-1 rounded-full bg-[#C9A882]"></div>
              <div className="h-px w-8 bg-current"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}