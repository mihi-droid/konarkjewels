"use client";

import { useEffect, useMemo, useState } from "react";
import { ProductCard } from "@/components/product/ProductCard";
import type { ProductSummary } from "@/lib/types";

const RECENTLY_VIEWED_KEY = "konark.recentlyViewed";

export function RecentlyViewedRail({ products }: { products: ProductSummary[] }) {
  const [recentIds, setRecentIds] = useState<string[]>([]);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(RECENTLY_VIEWED_KEY);
      if (!raw) return;

      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        setRecentIds(parsed.filter((id): id is string => typeof id === "string"));
      }
    } catch {
      setRecentIds([]);
    }
  }, []);

  const recent = useMemo(
    () =>
      recentIds
        .map((id) => products.find((product) => product.id === id))
        .filter((product): product is ProductSummary => Boolean(product)),
    [products, recentIds],
  );

  if (recent.length === 0) return null;

  return (
    <section className="py-16 lg:py-24">
      <div className="container-edge">
        <div className="mb-8">
          <span className="eyebrow">Picked For You</span>
          <h2 className="mt-2 font-display text-h2">Recently Viewed</h2>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
          {recent.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
