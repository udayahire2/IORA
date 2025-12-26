import { Droplet, Sparkles, Recycle } from 'lucide-react';

interface FeaturesProps {
  isDarkMode: boolean;
}

export function Features({ isDarkMode }: FeaturesProps) {
  const features = [
    {
      icon: Droplet,
      title: 'Natural Ingredients',
      description: 'Carefully selected botanicals and organic extracts to nourish your skin from within.',
    },
    {
      icon: Sparkles,
      title: 'Proven Results',
      description: 'Clinically tested formulas that deliver visible improvements in skin texture and tone.',
    },
    {
      icon: Recycle,
      title: 'Sustainable',
      description: 'Eco-friendly packaging and sustainable sourcing practices for a better tomorrow.',
    },
  ];

  return (
    <section className={`px-4 md:px-8 py-20 md:py-32 relative overflow-hidden transition-colors ${
      isDarkMode ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-b from-[#F5F2ED] via-white to-[#F5F2ED]'
    }`}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl ${
          isDarkMode ? 'bg-[#C9A882]' : 'bg-[#C9A882]'
        }`}></div>
        <div className={`absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl ${
          isDarkMode ? 'bg-[#C9A882]' : 'bg-[#C9A882]'
        }`}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className={`inline-block px-6 py-2 rounded-full mb-6 ${
            isDarkMode ? 'bg-gray-800/50 backdrop-blur-sm border border-gray-700' : 'bg-white/50 backdrop-blur-sm border border-gray-200'
          }`}>
            <span className={`text-xs tracking-[0.3em] uppercase ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>Why Choose IORA</span>
          </div>
          <h2 className={`text-4xl md:text-5xl tracking-tight mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Luxury <span className="text-[#C9A882] font-serif italic">Meets Nature</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Experience the perfect harmony of science and nature in every bottle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className={`group relative p-8 md:p-10 rounded-2xl transition-all duration-500 hover:-translate-y-2 ${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-gray-700/50 hover:border-[#C9A882]/30 hover:shadow-2xl hover:shadow-[#C9A882]/10' 
                    : 'bg-white/80 backdrop-blur-xl border border-gray-200/50 hover:border-[#C9A882]/30 shadow-lg hover:shadow-2xl hover:shadow-[#C9A882]/20'
                }`}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#C9A882]/0 to-[#C9A882]/0 group-hover:from-[#C9A882]/5 group-hover:to-[#C9A882]/10 transition-all duration-500"></div>
                
                <div className="relative z-10 text-center space-y-6">
                  {/* Icon container with animated glow */}
                  <div className="relative inline-flex items-center justify-center">
                    <div className={`absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500 ${
                      isDarkMode ? 'bg-[#C9A882]' : 'bg-[#C9A882]'
                    }`}></div>
                    <div className={`relative w-20 h-20 rounded-full flex items-center justify-center transition-all duration-500 ${
                      isDarkMode 
                        ? 'bg-gradient-to-br from-gray-700 to-gray-800 group-hover:from-[#C9A882]/20 group-hover:to-[#C9A882]/10 border border-gray-600 group-hover:border-[#C9A882]/50' 
                        : 'bg-gradient-to-br from-[#E8E4DD] to-[#D4CFC5] group-hover:from-[#C9A882]/20 group-hover:to-[#C9A882]/30 border border-gray-300/50 group-hover:border-[#C9A882]/50'
                    }`}>
                      <Icon className="text-[#C9A882] transition-transform duration-500 group-hover:scale-110" size={32} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className={`text-2xl tracking-tight transition-colors ${
                      isDarkMode ? 'text-white group-hover:text-[#C9A882]' : 'text-gray-900 group-hover:text-[#C9A882]'
                    }`}>{feature.title}</h3>
                    <p className={`leading-relaxed text-base ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>{feature.description}</p>
                  </div>

                  {/* Decorative line */}
                  <div className="pt-4">
                    <div className={`h-[1px] w-0 mx-auto transition-all duration-500 group-hover:w-24 ${
                      isDarkMode ? 'bg-gradient-to-r from-transparent via-[#C9A882] to-transparent' : 'bg-gradient-to-r from-transparent via-[#C9A882] to-transparent'
                    }`}></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}