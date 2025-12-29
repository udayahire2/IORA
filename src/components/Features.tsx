import { Droplet, Sparkles, Recycle } from 'lucide-react';

interface FeaturesProps { }

export function Features({ }: FeaturesProps) {
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
    <section className="px-4 md:px-8 py-20 md:py-32 relative overflow-hidden transition-colors bg-background">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl bg-primary"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl bg-primary"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block px-6 py-2 rounded-full mb-6 bg-muted/50 backdrop-blur-sm border border-border">
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Why Choose IORA</span>
          </div>
          <h2 className="text-4xl md:text-5xl tracking-tight mb-4 text-foreground">
            Luxury <span className="text-primary font-serif italic">Meets Nature</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
            Experience the perfect harmony of science and nature in every bottle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative p-8 md:p-10 rounded-2xl transition-all duration-500 hover:-translate-y-2 bg-card/60 backdrop-blur-xl border border-border hover:border-primary/30 shadow-sm hover:shadow-2xl hover:shadow-primary/10"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-500"></div>

                <div className="relative z-10 text-center space-y-6">
                  {/* Icon container with animated glow */}
                  <div className="relative inline-flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500 bg-primary"></div>
                    <div className="relative w-20 h-20 rounded-full flex items-center justify-center transition-all duration-500 bg-gradient-to-br from-muted to-muted/50 group-hover:from-primary/20 group-hover:to-primary/30 border border-border group-hover:border-primary/50">
                      <Icon className="text-primary transition-transform duration-500 group-hover:scale-110" size={32} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-2xl tracking-tight transition-colors text-foreground group-hover:text-primary">{feature.title}</h3>
                    <p className="leading-relaxed text-base text-muted-foreground">{feature.description}</p>
                  </div>

                  {/* Decorative line */}
                  <div className="pt-4">
                    <div className="h-[1px] w-0 mx-auto transition-all duration-500 group-hover:w-24 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
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