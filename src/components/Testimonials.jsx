import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rohit P Sharma",
      brand: "IronFit",
      type: "Freelance",
      rating: "★★★★☆ (4.5/5)",
      review: "Smit delivered high-energy edits that perfectly matched my fitness brand. The pacing, transitions, and impact were top-notch. Definitely boosted my content quality."
    },
    {
      id: 2,
      name: "Sharad Patel",
      brand: "HiveOS",
      type: "SaaS Client",
      rating: "★★★★☆ (4/5)",
      review: "Great understanding of SaaS visuals and clean animation style. Professional work and smooth delivery. Would recommend for tech-focused content."
    },
    {
      id: 3,
      name: "Het Patel",
      brand: "",
      type: "YouTube Creator (Freelance)",
      rating: "★★★★★ (5/5)",
      review: "Amazing editing skills. My videos became more engaging and visually appealing. Highly recommended for YouTube content creators."
    }
  ];

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-primary-text)] mb-4">
            Clients & <span className="text-[var(--color-highlight)]">Testimonials</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div 
              key={item.id} 
              className="group relative bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-[var(--color-highlight)]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(76,201,240,0.15)] flex flex-col h-full overflow-hidden"
            >
              {/* Subtle glow effect behind card on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-highlight)]/10 to-[var(--color-accent)]/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 pointer-events-none"></div>
              
              <div className="mb-6 flex-grow relative z-10">
                <div className="text-[var(--color-highlight)] text-4xl mb-2 opacity-50 font-serif leading-none">"</div>
                <p className="text-[var(--color-secondary-text)] italic leading-relaxed text-base">
                  {item.review}
                </p>
              </div>
              
              <div className="mt-auto border-t border-white/10 pt-6 relative z-10">
                <h4 className="text-[var(--color-primary-text)] font-bold text-xl">{item.name}</h4>
                {item.brand && (
                  <p className="text-[var(--color-highlight)] font-medium text-sm mt-1">{item.brand}</p>
                )}
                <p className="text-[var(--color-secondary-text)] text-sm mt-1">{item.type}</p>
                <div className="text-yellow-400 mt-3 text-sm">
                  {item.rating}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
