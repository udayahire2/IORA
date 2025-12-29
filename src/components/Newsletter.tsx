import { useState } from 'react';
import { Send } from 'lucide-react';

interface NewsletterProps { }

export function Newsletter({ }: NewsletterProps) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section className="px-4 md:px-8 py-20 md:py-32 relative overflow-hidden transition-colors bg-background">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl bg-primary"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl bg-primary"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="rounded-3xl p-8 md:p-16 relative overflow-hidden transition-all bg-card/60 backdrop-blur-2xl border border-border shadow-2xl">
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-primary/20 to-transparent"></div>

          <div className="relative z-10 text-center">
            {/* Badge */}
            <div className="inline-block px-6 py-2 rounded-full mb-6 bg-muted/50 backdrop-blur-sm border border-border">
              <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Stay Connected</span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl mb-4 tracking-tight text-foreground">
              Join The <span className="text-primary font-serif italic">IORA</span> Family
            </h2>

            {/* Decorative line */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-muted-foreground/50"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-muted-foreground/50"></div>
            </div>

            <p className="text-lg mb-10 max-w-2xl mx-auto leading-relaxed text-muted-foreground">
              Receive exclusive skincare insights, early access to new collections, and special member-only offers delivered to your inbox.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-3 p-2 rounded-2xl transition-all bg-muted/30 border border-border">
                <div className="flex-1 relative group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full px-6 py-4 rounded-xl outline-none transition-all bg-background text-foreground placeholder-muted-foreground focus:bg-background/80 border border-border focus:border-primary/50"
                  />
                </div>
                <button
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-primary to-[#B89872] text-primary-foreground rounded-xl hover:from-[#B89872] hover:to-[#A88762] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:shadow-primary/30 group"
                >
                  <span className="tracking-wide">Subscribe</span>
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Privacy note */}
              <p className="text-xs mt-6 text-muted-foreground">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-10 border-t border-border/50">
              <div className="space-y-2">
                <div className="text-2xl text-foreground">10%</div>
                <div className="text-sm text-muted-foreground">Welcome Discount</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl text-foreground">50K+</div>
                <div className="text-sm text-muted-foreground">Happy Members</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl text-foreground">Weekly</div>
                <div className="text-sm text-muted-foreground">Beauty Tips</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}