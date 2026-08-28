import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/product/ProductCard";
import { mockProducts, categoryShowcase } from "@/lib/data/mock-products";

const img = (seed: string) => `https://images.unsplash.com/${seed}?auto=format&fit=crop&w=1600&q=80`;

export default function HomePage() {
  const bestsellers = mockProducts.filter((p) => p.isBestseller);
  const newArrivals = mockProducts.filter((p) => p.isNewArrival);

  return (
    <>
      {/* HERO */}
      <section className="relative h-[88vh] min-h-[560px] w-full overflow-hidden bg-ink">
        <Image
          src={img("photo-1611591437281-460bfbe1220a")}
          alt="Gold jewellery on dark stone, Konark heritage collection"
          fill
          priority
          className="object-cover opacity-70"
        />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
          <span className="eyebrow text-gold">Where Heritage Becomes Jewellery</span>
          <h1 className="mt-4 font-display text-display text-ivory max-w-3xl">
            Carved in Stone.<br />Cast in Gold.
          </h1>
          <p className="mt-5 max-w-md text-body-lg text-ivory/80">
            Fine jewellery inspired by the Sun Temple of Konark — hallmarked gold, certified
            stones, hand-finished detail.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/shop" className="btn-primary">Shop the Collection</Link>
            <Link href="/shop?collection=heritage-edit" className="btn-ghost-inverse">
              Heritage Edit
            </Link>
          </div>
        </div>
      </section>

      {/* CATEGORY SHOWCASE */}
      <section className="container-edge py-16 lg:py-24">
        <div className="mb-10 text-center">
          <span className="eyebrow">Shop by Category</span>
          <h2 className="mt-2 font-display text-h2">Every Occasion, One House</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {categoryShowcase.map((c) => (
            <Link key={c.slug} href={`/shop/${c.slug}`} className="group relative block aspect-[3/4] overflow-hidden">
              <Image
                src={c.image}
                alt={c.name}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <span className="absolute bottom-5 left-5 font-display text-h3 text-ivory">{c.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* BESTSELLERS */}
      <section className="bg-parchment py-16 lg:py-24">
        <div className="container-edge">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <span className="eyebrow">Loved by Our Customers</span>
              <h2 className="mt-2 font-display text-h2">Best Sellers</h2>
            </div>
            <Link href="/shop?collection=best-sellers" className="hidden sm:inline text-body-sm underline underline-offset-4">
              View all
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
            {bestsellers.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* EDITORIAL / BRAND STORY */}
      <section className="container-edge py-16 lg:py-24 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={img("photo-1611652022419-a9419f74343d")}
            alt="Artisan hand-finishing a gold jewellery piece"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="max-w-lg">
          <span className="eyebrow">Our Craft</span>
          <h2 className="mt-2 font-display text-h2">Every Curve Has a Reason</h2>
          <p className="mt-5 text-body-lg text-text-muted">
            Named for the 13th-century Sun Temple, Konark Jewels translates the temple's carved
            wheels and radiating stone into wearable gold. Each piece passes through the hands of
            a single master artisan from wax model to final polish — nothing is cast at volume.
          </p>
          <Link href="/craftsmanship" className="btn-secondary mt-8 inline-flex">
            Discover Our Craftsmanship
          </Link>
        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section className="py-16 lg:py-24">
        <div className="container-edge">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <span className="eyebrow">Just In</span>
              <h2 className="mt-2 font-display text-h2">New Arrivals</h2>
            </div>
            <Link href="/shop?collection=new-arrivals" className="hidden sm:inline text-body-sm underline underline-offset-4">
              View all
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
            {newArrivals.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-ink py-16 lg:py-24 text-ivory">
        <div className="container-edge text-center">
          <span className="eyebrow text-gold">In Their Words</span>
          <h2 className="mt-2 font-display text-h2">Customer Stories</h2>
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              { quote: "The Celeste ring photographs exactly as it looks in hand — rare for online jewellery.", name: "Ananya R." },
              { quote: "Ordered the Sunwheel bangle for my mother. The detail on the carving is extraordinary.", name: "Devika M." },
              { quote: "Customer care helped me resize a ring within a week, no questions asked.", name: "Priya S." },
            ].map((t) => (
              <blockquote key={t.name} className="border border-ivory/15 p-8">
                <p className="text-body-lg text-ivory/85">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-4 text-caption uppercase tracking-widest text-gold">{t.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-16 lg:py-24">
        <div className="container-edge max-w-xl text-center">
          <h2 className="font-display text-h2">Join the House of Konark</h2>
          <p className="mt-3 text-body text-text-muted">
            New arrivals, heritage stories, and early access to limited pieces — straight to your inbox.
          </p>
          <form className="mt-6 flex mx-auto max-w-md border border-ink/20">
            <label htmlFor="home-newsletter" className="sr-only">Email address</label>
            <input
              id="home-newsletter"
              type="email"
              required
              placeholder="Your email"
              className="w-full bg-transparent px-4 py-3 text-body-sm focus:outline-none"
            />
            <button type="submit" className="btn-primary px-6">Subscribe</button>
          </form>
        </div>
      </section>
    </>
  );
}
