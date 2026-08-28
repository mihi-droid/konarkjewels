"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { primaryNav } from "@/lib/navigation";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { useCartStore, cartCount } from "@/lib/store/cart";
import { useWishlistStore } from "@/lib/store/wishlist";
import { KONARK_LOGO_ALT, KONARK_LOGO_URL } from "@/lib/branding";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const lines = useCartStore((s) => s.lines);
  const openCart = useCartStore((s) => s.openCart);
  const wishlistCount = useWishlistStore((s) => s.items.length);
  const count = cartCount(lines);

  return (
    <header className="sticky top-0 z-50 bg-ivory/95 backdrop-blur border-b border-border">
      <div className="container-edge flex h-18 items-center justify-between">
        <button
          className="lg:hidden p-2 -ml-2"
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>

        <Link href="/" className="group inline-flex items-center gap-2.5 text-ink">
          <span className="relative h-10 w-10 overflow-hidden rounded-full border border-gold/40 bg-ink sm:h-11 sm:w-11">
            <Image
              src={KONARK_LOGO_URL}
              alt={KONARK_LOGO_ALT}
              fill
              sizes="44px"
              className="object-cover transition-transform duration-500 ease-premium group-hover:scale-105"
            />
          </span>
          <span className="leading-none">
            <span className="block font-display text-xl tracking-[0.2em] sm:text-2xl">KONARK</span>
            <span className="hidden text-[10px] uppercase tracking-[0.22em] text-gold-dark sm:block">
              Heritage Jewels
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
          {primaryNav.map((item) => (
            <div key={item.label} className="group relative">
              <Link
                href={item.href}
                className="text-body-sm uppercase tracking-wider py-2 inline-block text-ink hover:text-gold-dark transition-colors"
              >
                {item.label}
              </Link>
              {"megaMenu" in item && item.megaMenu && (
                <div
                  className="invisible absolute left-1/2 top-full -translate-x-1/2 min-w-[220px] -translate-y-1 border border-border
                    bg-ivory p-5 opacity-0 shadow-panel transition-all duration-200 ease-premium
                    group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <ul className="flex flex-col gap-3">
                    {item.megaMenu.map((sub) => (
                      <li key={sub.label}>
                        <Link href={sub.href} className="text-body-sm text-text hover:text-gold-dark whitespace-nowrap">
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <Link href="/search" aria-label="Search" className="p-2 hidden sm:inline-flex">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </Link>
          <Link href="/account" aria-label="Account" className="p-2 hidden sm:inline-flex">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7" />
            </svg>
          </Link>
          <Link href="/wishlist" aria-label={`Wishlist, ${wishlistCount} items`} className="relative p-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M12.1 21s-7.6-4.6-10-9.2C.5 8.1 2 4.5 5.6 3.6c2-.5 4 .3 5 2 1-1.7 3-2.5 5-2 3.6.9 5.1 4.5 3.5 8.2-2.4 4.6-10 9.2-10 9.2z" />
            </svg>
            {wishlistCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[10px] text-ink">
                {wishlistCount}
              </span>
            )}
          </Link>
          <button aria-label={`Cart, ${count} items`} className="relative p-2" onClick={openCart}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M6 7h12l-1 13H7L6 7z" />
              <path d="M9 7a3 3 0 0 1 6 0" />
            </svg>
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[10px] text-ink">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
