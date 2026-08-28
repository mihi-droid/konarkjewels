"use client";

import { useWishlistStore } from "@/lib/store/wishlist";
import { cn } from "@/lib/utils";

export function WishlistButton({
  product,
  className,
}: {
  product: { productId: string; slug: string; name: string; image: string; price: number };
  className?: string;
}) {
  const { toggle, has } = useWishlistStore();
  const active = has(product.productId);

  return (
    <button
      type="button"
      aria-pressed={active}
      aria-label={active ? `Remove ${product.name} from wishlist` : `Save ${product.name} to wishlist`}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggle(product);
      }}
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded-full bg-ivory/90 text-ink transition-colors duration-200 hover:bg-gold",
        className
      )}
    >
      <svg
        width="17"
        height="17"
        viewBox="0 0 24 24"
        fill={active ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path d="M12.1 21s-7.6-4.6-10-9.2C.5 8.1 2 4.5 5.6 3.6c2-.5 4 .3 5 2 1-1.7 3-2.5 5-2 3.6.9 5.1 4.5 3.5 8.2-2.4 4.6-10 9.2-10 9.2z" />
      </svg>
    </button>
  );
}
