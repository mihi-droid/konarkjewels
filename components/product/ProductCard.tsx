"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { WishlistButton } from "@/components/product/WishlistButton";
import { useCartStore } from "@/lib/store/cart";
import { discountPercent, formatINR } from "@/lib/utils";
import type { ProductSummary } from "@/lib/types";

// The single reusable product card used across Home, Shop, Category,
// Search, and related-products sections. Keep this the only place
// product-card markup lives — never hardcode card JSX elsewhere.
export function ProductCard({ product }: { product: ProductSummary }) {
  const [hovering, setHovering] = useState(false);
  const addItem = useCartStore((s) => s.addItem);

  const primary = product.images[0];
  const hover = product.images.find((i) => i.isHover) ?? product.images[1];
  const discount = discountPercent(product.price, product.compareAtPrice);
  const outOfStock = product.stock <= 0;

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-parchment">
          {primary && (
            <Image
              src={hovering && hover ? hover.url : primary.url}
              alt={primary.altText}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
            />
          )}

          <div className="absolute left-3 top-3 flex flex-col gap-1.5">
            {product.isNewArrival && <Badge kind="new" />}
            {product.isBestseller && <Badge kind="bestseller" />}
            {discount && <Badge kind="sale" />}
          </div>

          <WishlistButton
            className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity"
            product={{
              productId: product.id,
              slug: product.slug,
              name: product.name,
              image: primary?.url ?? "",
              price: product.price,
            }}
          />

          {outOfStock && (
            <div className="absolute inset-0 flex items-center justify-center bg-ink/50">
              <span className="bg-ivory px-4 py-1.5 text-caption uppercase tracking-widest">
                Sold Out
              </span>
            </div>
          )}

          <button
            type="button"
            disabled={outOfStock}
            onClick={(e) => {
              e.preventDefault();
              addItem({
                productId: product.id,
                slug: product.slug,
                name: product.name,
                image: primary?.url ?? "",
                price: product.price,
              });
            }}
            className="absolute inset-x-0 bottom-0 translate-y-full bg-ink py-3 text-button uppercase tracking-wider text-ivory
              transition-transform duration-300 ease-premium group-hover:translate-y-0 hover:bg-gold hover:text-ink
              disabled:pointer-events-none disabled:opacity-60"
          >
            {outOfStock ? "Sold Out" : "Add to Bag"}
          </button>
        </div>

        <div className="mt-3.5 space-y-1">
          <h3 className="text-body font-medium text-ink">{product.name}</h3>
          <div className="flex items-center gap-2">
            <span className="text-body-sm text-ink">{formatINR(product.price)}</span>
            {product.compareAtPrice && (
              <span className="text-body-sm text-text-muted line-through">
                {formatINR(product.compareAtPrice)}
              </span>
            )}
            {discount && <span className="text-caption text-error">-{discount}%</span>}
          </div>
          {product.ratingCount > 0 && (
            <div className="flex items-center gap-1 text-caption text-text-muted">
              <span aria-hidden>★</span>
              <span>
                {product.ratingAvg.toFixed(1)} ({product.ratingCount})
              </span>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}
