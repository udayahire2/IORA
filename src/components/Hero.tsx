import image_4a5c71acb212e258ae9ecbad0be7b3cd33ffebae from '../assets/hero.png';
import { Leaf, Award, Heart, ArrowRight } from 'lucide-react';
interface HeroProps {
  isDarkMode: boolean;
}

export function Hero({ isDarkMode }: HeroProps) {
  return (
    <section className="relative min-h-screen lg:h-screen w-full overflow-x-hidden lg:overflow-hidden hero">
      {/* Premium background */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 transition-colors duration-700 ${isDarkMode
          ? 'bg-[#0A0A0A]'
          : 'bg-[#FAFAF8]'
          }`}></div>

        {/* Animated gradient orbs */}

      </div>

      {/* Content wrapper */}
      <div className="relative h-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">

        {/* Centered product-first layout */}
        <div className="relative h-full flex flex-col justify-center items-center">

          {/* Top content bar */}
          <div className="absolute top-12 left-0 right-0 z-30 flex items-center justify-between px-6 md:px-12">
            <div className={`inline-flex items-center gap-3 px-5 py-2 rounded-full border backdrop-blur-xl transition-all duration-300 ${isDarkMode
              ? 'bg-[#1A1612]/60 border-[#C9A882]/20 text-[#E5D5C3]'
              : 'bg-black/5 border-black/10 text-gray-600'
              }`}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C9A882] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C9A882]"></span>
              </span>
              <span className="text-xs tracking-[0.2em] uppercase">New Launch</span>
            </div>

            <div className={`flex items-baseline gap-2 md:gap-3 px-4 py-2 md:px-6 md:py-3 rounded-full border backdrop-blur-xl ${isDarkMode
              ? 'bg-[#1A1612]/60 border-[#C9A882]/20'
              : 'bg-white/60 border-gray-200/60'
              }`}>
              <span className={`text-xs tracking-[0.2em] uppercase ${isDarkMode ? 'text-[#A89178]' : 'text-gray-600'
                }`}>From</span>
              <span className={`text-2xl tracking-tight ${isDarkMode ? 'text-[#F5EDE3]' : 'text-gray-900'
                }`}>₹1,299</span>
            </div>
          </div>

          {/* Main content grid - Three column layout */}
          <div className="relative w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-32 pb-20 lg:py-0">

            {/* Left sidebar - Features */}
            <div className="lg:col-span-3 order-3 lg:order-1 space-y-8">
              <div className="space-y-6">
                <div className={`h-px w-16 ${isDarkMode ? 'bg-[#C9A882]/30' : 'bg-gray-300'
                  }`}></div>
                <h3 className={`text-sm tracking-[0.2em] uppercase ${isDarkMode ? 'text-[#A89178]' : 'text-gray-600'
                  }`}>Key Benefits</h3>
              </div>

              <div className="space-y-6">
                {[
                  { icon: Leaf, title: 'Natural', desc: '100% botanical ingredients' },
                  { icon: Award, title: 'Certified', desc: 'Dermatologist approved' },
                  { icon: Heart, title: 'Vegan', desc: 'Cruelty-free formula' }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group flex items-start gap-4 cursor-pointer"
                  >
                    <div className={`mt-1 p-3 rounded-xl border transition-all duration-300 group-hover:scale-110 group-hover:border-[#C9A882]/50 ${isDarkMode
                      ? 'bg-[#1A1612]/60 border-[#C9A882]/20'
                      : 'bg-white/60 border-gray-200/60'
                      }`}>
                      <item.icon
                        size={20}
                        className="text-[#C9A882] transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1">
                      <div className={`text-sm mb-1 transition-colors duration-300 ${isDarkMode ? 'text-[#F5EDE3] group-hover:text-[#C9A882]' : 'text-gray-900 group-hover:text-[#C9A882]'
                        }`}>
                        {item.title}
                      </div>
                      <div className={`text-xs leading-relaxed ${isDarkMode ? 'text-[#A89178]' : 'text-gray-600'
                        }`}>
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Center - Product hero */}
            <div className="lg:col-span-6 order-1 lg:order-2 relative">

              {/* Headline above product */}
              <div className="text-center mb-8 lg:mb-12">
                <h1 className="space-y-2">
                  <div className={`text-7xl md:text-8xl xl:text-9xl tracking-[-0.04em] leading-[0.85] ${isDarkMode ? 'text-[#F5EDE3]' : 'text-[#1A1A1A]'
                    }`}>
                    IORA
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <span className={`text-4xl md:text-5xl xl:text-6xl tracking-wide ${isDarkMode ? 'text-[#4A4137]' : 'text-gray-400'
                      }`}>—</span>
                    <span className="text-4xl md:text-5xl xl:text-6xl text-[#C9A882] font-serif italic tracking-wide">
                      Radiance Cleanser
                    </span>
                    <span className={`text-4xl md:text-5xl xl:text-6xl tracking-wide ${isDarkMode ? 'text-[#4A4137]' : 'text-gray-400'
                      }`}>—</span>
                  </div>
                </h1>
              </div>

              {/* Product showcase */}
              <div className="relative w-full max-w-lg mx-auto">

                {/* Animated rings */}
                <div className="absolute inset-0 flex items-center justify-center -z-10">

                </div>

                {/* Glow */}
                <div className="absolute inset-0 flex items-center justify-center -z-10">
                  <div className={`w-3/4 h-3/4 rounded-full blur-[140px] ${isDarkMode ? 'bg-[#C9A882]/35' : 'bg-[#C9A882]/25'
                    }`}></div>
                </div>

                {/* Product */}
                <div className="relative group p-8 md:p-12">
                  <div className="relative transform group-hover:scale-105 transition-all duration-700 group-hover:-rotate-1">
                    <img
                      src={image_4a5c71acb212e258ae9ecbad0be7b3cd33ffebae}
                      alt="IORA Radiance Cleanser - Botanical Face Wash"
                      className="w-full h-auto drop-shadow-2xl"
                    />
                  </div>

                  {/* Floating badge */}
                  <div className={`absolute top-0 right-0 w-24 h-24 rounded-full flex flex-col items-center justify-center backdrop-blur-xl border shadow-2xl transition-all duration-300 group-hover:scale-110 ${isDarkMode
                    ? 'bg-[#1A1612]/95 border-[#C9A882]/30 text-[#F5EDE3]'
                    : 'bg-white/90 border-white text-gray-900'
                    }`}>
                    <div className="text-[9px] tracking-widest uppercase opacity-60">Best</div>
                    <div className="text-lg mt-0.5">⭐</div>
                  </div>
                </div>
              </div>

              {/* Description below product */}
              <div className="text-center mt-8 max-w-xl mx-auto">
                <p className={`text-base md:text-lg leading-[1.8] ${isDarkMode ? 'text-[#D4C4B0]' : 'text-gray-600'
                  }`}>
                  A luxurious botanical cleanser infused with natural extracts to gently purify and illuminate your complexion while preserving essential moisture.
                </p>
              </div>
            </div>

            {/* Right sidebar - CTA & Info */}
            <div className="lg:col-span-3 order-2 lg:order-3 space-y-8">

              {/* CTA buttons stacked */}
              <div className="space-y-3">
                <button
                  className="w-full group relative px-8 py-5 bg-[#C9A882] text-white overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#C9A882]/50 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-[#C9A882]/40"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3 text-xs tracking-[0.15em] uppercase">
                    Shop Now
                    <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#A88762] to-[#8B6F4F] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                </button>

                <button
                  className={`w-full group px-8 py-5 border-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-4 ${isDarkMode
                    ? 'border-[#C9A882]/30 text-[#F5EDE3] hover:bg-[#C9A882]/10 hover:border-[#C9A882] focus:ring-[#C9A882]/20'
                    : 'border-gray-300 text-gray-900 hover:bg-gray-900 hover:text-white hover:border-gray-900 focus:ring-gray-300'
                    }`}
                >
                  <span className="text-xs tracking-[0.15em] uppercase flex items-center justify-center gap-2">
                    Learn More
                  </span>
                </button>
              </div>

              {/* Info cards */}
              <div className="space-y-4">
                <div className={`p-5 rounded-2xl border backdrop-blur-md transition-all duration-300 ${isDarkMode
                  ? 'bg-[#1A1612]/60 border-[#C9A882]/20'
                  : 'bg-white/60 border-gray-200/60'
                  }`}>
                  <div className={`text-xs tracking-wider uppercase mb-2 ${isDarkMode ? 'text-[#A89178]' : 'text-gray-600'
                    }`}>Size</div>
                  <div className={`text-lg ${isDarkMode ? 'text-[#F5EDE3]' : 'text-gray-900'
                    }`}>150ml / 5.07 fl oz</div>
                </div>

                <div className={`p-5 rounded-2xl border backdrop-blur-md transition-all duration-300 ${isDarkMode
                  ? 'bg-[#1A1612]/60 border-[#C9A882]/20'
                  : 'bg-white/60 border-gray-200/60'
                  }`}>
                  <div className={`text-xs tracking-wider uppercase mb-2 ${isDarkMode ? 'text-[#A89178]' : 'text-gray-600'
                    }`}>Skin Type</div>
                  <div className={`text-lg ${isDarkMode ? 'text-[#F5EDE3]' : 'text-gray-900'
                    }`}>All Skin Types</div>
                </div>

                <div className={`p-5 rounded-2xl border backdrop-blur-md transition-all duration-300 ${isDarkMode
                  ? 'bg-[#1A1612]/60 border-[#C9A882]/20'
                  : 'bg-white/60 border-gray-200/60'
                  }`}>
                  <div className={`text-xs tracking-wider uppercase mb-2 ${isDarkMode ? 'text-[#A89178]' : 'text-gray-600'
                    }`}>Free Shipping</div>
                  <div className={`text-sm ${isDarkMode ? 'text-[#D4C4B0]' : 'text-gray-700'
                    }`}>On orders over ₹999</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-3 animate-bounce">
        <span className={`text-xs tracking-[0.2em] uppercase ${isDarkMode ? 'text-gray-600' : 'text-gray-500'
          }`}>Scroll</span>
        <div className={`w-px h-12 ${isDarkMode ? 'bg-gradient-to-b from-gray-600 to-transparent' : 'bg-gradient-to-b from-gray-400 to-transparent'
          }`}></div>
      </div>
    </section>
  );
}