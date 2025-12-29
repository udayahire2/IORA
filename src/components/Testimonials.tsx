import { Star } from 'lucide-react';
import image1 from '../assets/jitesh.png';
import image2 from '../assets/harshal.png';
import image3 from '../assets/hitesh.png';

interface TestimonialsProps {
  isDarkMode: boolean;
}

export function Testimonials({ isDarkMode }: TestimonialsProps) {
  const testimonials = [
    {
      name: 'Jitesh Pardhi',
      role: 'Beauty Enthusiast',
      content: 'The Radiance Serum has completely transformed my skin. I\'ve never felt more confident about my natural glow.',
      rating: 5,
      image: image1,
    },
    {
      name: 'Harshal Dhangar',
      role: 'Skincare Blogger',
      content: 'Aurora\'s commitment to natural ingredients is unmatched. These products are worth every penny.',
      rating: 5,
      image: image2,
    },
    {
      name: 'Hitesh Mayche',
      role: 'Wellness Coach',
      content: 'Finally, a brand that delivers on its promises. My skin has never looked or felt better.',
      rating: 5,
      image: image3,
    },
  ];

  return (
    <section className={`px-4 md:px-8 py-20 md:py-32 relative overflow-hidden transition-colors ${
      isDarkMode ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-b from-white via-[#F5F2ED] to-white'
    }`}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className={`absolute top-1/3 right-20 w-80 h-80 rounded-full blur-3xl ${
          isDarkMode ? 'bg-[#C9A882]' : 'bg-[#C9A882]'
        }`}></div>
        <div className={`absolute bottom-1/3 left-20 w-80 h-80 rounded-full blur-3xl ${
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
            }`}>Testimonials</span>
          </div>
          
          <h2 className={`text-4xl md:text-5xl mb-4 tracking-tight ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Loved By <span className="text-[#C9A882] font-serif italic">Thousands</span>
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

          <p className={`text-lg max-w-2xl mx-auto ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Real stories from our community of beauty enthusiasts
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
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
              
              {/* Quote mark decoration */}
              <div className={`absolute top-6 right-6 text-6xl opacity-10 font-serif ${
                isDarkMode ? 'text-[#C9A882]' : 'text-[#C9A882]'
              }`}>"</div>

              <div className="relative z-10">
                {/* Star Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      className="fill-[#C9A882] text-[#C9A882] transition-transform duration-300 group-hover:scale-110" 
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>

                {/* Testimonial Content */}
                <p className={`mb-8 leading-relaxed text-base italic ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  "{testimonial.content}"
                </p>

                {/* Decorative divider */}
                <div className={`h-[1px] w-full mb-6 ${
                  isDarkMode ? 'bg-gradient-to-r from-gray-700 via-[#C9A882]/30 to-gray-700' : 'bg-gradient-to-r from-gray-300 via-[#C9A882]/30 to-gray-300'
                }`}></div>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  {/* Avatar with profile image */}
                  <div className={`w-12 h-12 rounded-full overflow-hidden transition-all ring-2 group-hover:ring-4 ${
                    isDarkMode 
                      ? 'ring-gray-600 group-hover:ring-[#C9A882]/50' 
                      : 'ring-gray-300 group-hover:ring-[#C9A882]/50'
                  }`}>
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  
                  <div>
                    <div className={`tracking-tight transition-colors ${
                      isDarkMode ? 'text-white group-hover:text-[#C9A882]' : 'text-gray-900 group-hover:text-[#C9A882]'
                    }`}>{testimonial.name}</div>
                    <div className={`text-sm ${
                      isDarkMode ? 'text-gray-500' : 'text-gray-500'
                    }`}>{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA or stats */}
        <div className={`mt-16 text-center p-8 rounded-2xl ${
          isDarkMode ? 'bg-gray-800/30 backdrop-blur-sm border border-gray-700/30' : 'bg-white/30 backdrop-blur-sm border border-gray-200/30'
        }`}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div>
              <div className={`text-3xl md:text-4xl mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>4.9/5.0</div>
              <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Average Rating</div>
            </div>
            <div className={`hidden md:block w-[1px] h-12 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
            <div>
              <div className={`text-3xl md:text-4xl mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>10K+</div>
              <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Happy Customers</div>
            </div>
            <div className={`hidden md:block w-[1px] h-12 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
            <div>
              <div className={`text-3xl md:text-4xl mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>98%</div>
              <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Would Recommend</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}