"use client";

import { useEffect, useMemo, useState } from "react";

interface Testimonial {
  quote: string;
  name: string;
}

export function TestimonialSlider({ items }: { items: Testimonial[] }) {
  const slides = useMemo(() => items, [items]);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || slides.length <= 1) return;

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 4000);

    return () => window.clearInterval(id);
  }, [paused, slides.length]);

  return (
    <div
      className="relative mx-auto mt-10 max-w-3xl border border-ivory/20 bg-surface/80 p-8 sm:p-10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((item, i) => (
        <blockquote
          key={item.name}
          className={`absolute inset-0 flex flex-col items-center justify-center gap-4 px-8 text-center transition-opacity duration-700 ${
            i === index ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          aria-hidden={i !== index}
        >
          <p className="max-w-2xl text-body-lg text-ivory/90">&ldquo;{item.quote}&rdquo;</p>
          <footer className="text-caption uppercase tracking-widest text-gold">{item.name}</footer>
        </blockquote>
      ))}

      <div className="pointer-events-none min-h-44" />

      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2">
        {slides.map((item, i) => (
          <button
            key={`${item.name}-dot`}
            type="button"
            aria-label={`Show testimonial ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`pointer-events-auto h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-8 bg-gold" : "w-3 bg-ivory/40 hover:bg-ivory/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
