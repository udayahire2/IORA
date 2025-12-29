import { Star } from 'lucide-react';
import image1 from '../assets/jitesh.png';
import image2 from '../assets/harshal.png';
import image3 from '../assets/hitesh.png';

interface TestimonialsProps { }

export function Testimonials({ }: TestimonialsProps) {
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
    <section className="px-4 md:px-8 py-20 md:py-32 relative overflow-hidden transition-colors bg-background">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 right-20 w-80 h-80 rounded-full blur-3xl bg-primary"></div>
        <div className="absolute bottom-1/3 left-20 w-80 h-80 rounded-full blur-3xl bg-primary"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block px-6 py-2 rounded-full mb-6 bg-muted/50 backdrop-blur-sm border border-border">
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Testimonials</span>
          </div>

          <h2 className="text-4xl md:text-5xl mb-4 tracking-tight text-foreground">
            Loved By <span className="text-primary font-serif italic">Thousands</span>
          </h2>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-muted-foreground/50"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-muted-foreground/50"></div>
          </div>

          <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
            Real stories from our community of beauty enthusiasts
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative p-8 md:p-10 rounded-2xl transition-all duration-500 hover:-translate-y-2 bg-card/50 backdrop-blur-xl border border-border hover:border-primary/30 shadow-sm hover:shadow-2xl hover:shadow-primary/10"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-500"></div>

              {/* Quote mark decoration */}
              <div className="absolute top-6 right-6 text-6xl opacity-10 font-serif text-primary">"</div>

              <div className="relative z-10">
                {/* Star Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-primary text-primary transition-transform duration-300 group-hover:scale-110"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>

                {/* Testimonial Content */}
                <p className="mb-8 leading-relaxed text-base italic text-foreground/90">
                  "{testimonial.content}"
                </p>

                {/* Decorative divider */}
                <div className="h-[1px] w-full mb-6 bg-gradient-to-r from-border via-primary/30 to-border"></div>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  {/* Avatar with profile image */}
                  <div className="w-12 h-12 rounded-full overflow-hidden transition-all ring-2 ring-border group-hover:ring-primary/50 group-hover:ring-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div>
                    <div className="tracking-tight transition-colors text-foreground group-hover:text-primary">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA or stats */}
        <div className="mt-16 text-center p-8 rounded-2xl bg-muted/30 backdrop-blur-sm border border-border">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div>
              <div className="text-3xl md:text-4xl mb-2 text-foreground">4.9/5.0</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="hidden md:block w-[1px] h-12 bg-border"></div>
            <div>
              <div className="text-3xl md:text-4xl mb-2 text-foreground">10K+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div className="hidden md:block w-[1px] h-12 bg-border"></div>
            <div>
              <div className="text-3xl md:text-4xl mb-2 text-foreground">98%</div>
              <div className="text-sm text-muted-foreground">Would Recommend</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}