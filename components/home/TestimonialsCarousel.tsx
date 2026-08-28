"use client";

import { useEffect, useState } from "react";

const testimonials = [
  {
    quote: "The Celeste ring photographs exactly as it looks in hand — rare for online jewellery.",
    name: "Ananya R.",
  },
  {
    quote: "Ordered the Sunwheel bangle for my mother. The detail on the carving is extraordinary.",
    name: "Devika M.",
  },
  {
    quote: "Customer care helped me resize a ring within a week, no questions asked.",
    name: "Priya S.",
  },
];

export function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  const active = testimonials[activeIndex];

  return (
    <section className="bg-ink py-16 text-ivory lg:py-24">
      <div className="container-edge text-center">
        <span className="eyebrow text-gold">In Their Words</span>
        <h2 className="mt-2 font-display text-h2">Customer Stories</h2>

        <blockquote className="mx-auto mt-10 max-w-3xl border border-ivory/15 p-8 sm:p-10">
          <p className="text-body-lg text-ivory/85">&ldquo;{active.quote}&rdquo;</p>
          <footer className="mt-4 text-caption uppercase tracking-widest text-gold">{active.name}</footer>
        </blockquote>

        <div className="mt-6 flex items-center justify-center gap-2">
          {testimonials.map((t, index) => (
            <button
              key={t.name}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 w-2.5 rounded-full transition ${activeIndex === index ? "bg-gold" : "bg-ivory/40 hover:bg-ivory/70"}`}
              aria-label={`Show testimonial ${index + 1}`}
              aria-pressed={activeIndex === index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
