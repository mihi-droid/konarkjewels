"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type HeroSlide = {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  description: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
};

const slides: HeroSlide[] = [
  {
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1600&q=80",
    alt: "Gold jewellery on dark stone, Konark heritage collection",
    eyebrow: "Where Heritage Becomes Jewellery",
    title: "Carved in Stone.\nCast in Gold.",
    description:
      "Fine jewellery inspired by the Sun Temple of Konark — hallmarked gold, certified stones, hand-finished detail.",
    ctaPrimary: { label: "Shop the Collection", href: "/shop" },
    ctaSecondary: { label: "Heritage Edit", href: "/shop?collection=heritage-edit" },
  },
  {
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1600&q=80",
    alt: "Layered gold necklaces on neutral fabric",
    eyebrow: "Festive Curation",
    title: "Moments Worth\nKeeping Forever.",
    description:
      "Discover statement necklaces, temple-inspired bangles, and handcrafted earrings designed for celebrations.",
    ctaPrimary: { label: "Explore Festive Picks", href: "/shop?collection=bridal-edit" },
    ctaSecondary: { label: "View New Arrivals", href: "/shop?collection=new-arrivals" },
  },
  {
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&w=1600&q=80",
    alt: "Jewellery artisan polishing a ring by hand",
    eyebrow: "Crafted by Masters",
    title: "Made by Hand.\nMade to Last.",
    description:
      "Each piece is hand-finished by a single artisan, blending century-old techniques with modern elegance.",
    ctaPrimary: { label: "Discover Our Craft", href: "/craftsmanship" },
    ctaSecondary: { label: "Shop Best Sellers", href: "/shop?collection=best-sellers" },
  },
];

export function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const activeSlide = slides[activeIndex];

  return (
    <section className="relative h-[88vh] min-h-[560px] w-full overflow-hidden bg-ink">
      <Image src={activeSlide.image} alt={activeSlide.alt} fill priority className="object-cover opacity-70 transition-opacity duration-700" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <span className="eyebrow text-gold">{activeSlide.eyebrow}</span>
        <h1 className="mt-4 max-w-3xl whitespace-pre-line font-display text-display text-ivory">{activeSlide.title}</h1>
        <p className="mt-5 max-w-md text-body-lg text-ivory/80">{activeSlide.description}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link href={activeSlide.ctaPrimary.href} className="btn-primary">
            {activeSlide.ctaPrimary.label}
          </Link>
          <Link href={activeSlide.ctaSecondary.href} className="btn-ghost-inverse">
            {activeSlide.ctaSecondary.label}
          </Link>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`h-2.5 w-2.5 rounded-full transition ${activeIndex === index ? "bg-gold" : "bg-ivory/45 hover:bg-ivory/75"}`}
            aria-label={`Show slide ${index + 1}`}
            aria-pressed={activeIndex === index}
          />
        ))}
      </div>
    </section>
  );
}
