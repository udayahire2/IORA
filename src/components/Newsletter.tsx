import { useState } from 'react';
import { Send } from 'lucide-react';

interface NewsletterProps {
  isDarkMode: boolean;
}

export function Newsletter({ isDarkMode }: NewsletterProps) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section className={`px-4 md:px-8 py-20 md:py-32 relative overflow-hidden transition-colors ${
      isDarkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-[#E8E4DD] via-[#F5F2ED] to-[#E8E4DD]'
    }`}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl ${
          isDarkMode ? 'bg-[#C9A882]' : 'bg-[#C9A882]'
        }`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl ${
          isDarkMode ? 'bg-[#C9A882]' : 'bg-[#C9A882]'
        }`}></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className={`rounded-3xl p-8 md:p-16 relative overflow-hidden transition-all ${
          isDarkMode 
            ? 'bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-2xl border border-gray-700/50 shadow-2xl' 
            : 'bg-white/60 backdrop-blur-2xl border border-white/80 shadow-2xl'
        }`}>
          {/* Decorative corner accents */}
          <div className={`absolute top-0 left-0 w-32 h-32 ${
            isDarkMode ? 'bg-gradient-to-br from-[#C9A882]/10 to-transparent' : 'bg-gradient-to-br from-[#C9A882]/20 to-transparent'
          }`}></div>
          <div className={`absolute bottom-0 right-0 w-32 h-32 ${
            isDarkMode ? 'bg-gradient-to-tl from-[#C9A882]/10 to-transparent' : 'bg-gradient-to-tl from-[#C9A882]/20 to-transparent'
          }`}></div>

          <div className="relative z-10 text-center">
            {/* Badge */}
            <div className={`inline-block px-6 py-2 rounded-full mb-6 ${
              isDarkMode ? 'bg-gray-700/50 backdrop-blur-sm border border-gray-600' : 'bg-white/80 backdrop-blur-sm border border-gray-200'
            }`}>
              <span className={`text-xs tracking-[0.3em] uppercase ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>Stay Connected</span>
            </div>

            {/* Heading */}
            <h2 className={`text-4xl md:text-5xl mb-4 tracking-tight ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Join The <span className="text-[#C9A882] font-serif italic">IORA</span> Family
            </h2>
            
            {/* Decorative line */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className={`h-[1px] w-12 ${
                isDarkMode ? 'bg-gradient-to-r from-transparent to-gray-600' : 'bg-gradient-to-r from-transparent to-gray-400'
              }`}></div>
              <div className={`w-1.5 h-1.5 rounded-full ${isDarkMode ? 'bg-[#C9A882]' : 'bg-[#C9A882]'}`}></div>
              <div className={`h-[1px] w-12 ${
                isDarkMode ? 'bg-gradient-to-l from-transparent to-gray-600' : 'bg-gradient-to-l from-transparent to-gray-400'
              }`}></div>
            </div>

            <p className={`text-lg mb-10 max-w-2xl mx-auto leading-relaxed ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Receive exclusive skincare insights, early access to new collections, and special member-only offers delivered to your inbox.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
              <div className={`flex flex-col sm:flex-row gap-3 p-2 rounded-2xl transition-all ${
                isDarkMode 
                  ? 'bg-gray-900/50 border border-gray-700/50' 
                  : 'bg-white/80 border border-gray-200/50 shadow-lg'
              }`}>
                <div className="flex-1 relative group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className={`w-full px-6 py-4 rounded-xl outline-none transition-all ${
                      isDarkMode 
                        ? 'bg-gray-800 text-white placeholder-gray-500 focus:bg-gray-700 border border-gray-700 focus:border-[#C9A882]/50' 
                        : 'bg-gray-50 text-gray-900 placeholder-gray-400 focus:bg-white border border-gray-200 focus:border-[#C9A882]/50 focus:shadow-md'
                    }`}
                  />
                </div>
                <button
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-[#C9A882] to-[#B89872] text-white rounded-xl hover:from-[#B89872] hover:to-[#A88762] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:shadow-[#C9A882]/30 group"
                >
                  <span className="tracking-wide">Subscribe</span>
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Privacy note */}
              <p className={`text-xs mt-6 ${
                isDarkMode ? 'text-gray-500' : 'text-gray-500'
              }`}>
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-10 border-t border-gray-400/20">
              <div className="space-y-2">
                <div className={`text-2xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>10%</div>
                <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Welcome Discount</div>
              </div>
              <div className="space-y-2">
                <div className={`text-2xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>50K+</div>
                <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Happy Members</div>
              </div>
              <div className="space-y-2">
                <div className={`text-2xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Weekly</div>
                <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Beauty Tips</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}