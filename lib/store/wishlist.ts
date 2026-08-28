"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface WishlistLine {
  productId: string;
  slug: string;
  name: string;
  image: string;
  price: number;
}

interface WishlistState {
  items: WishlistLine[];
  toggle: (item: WishlistLine) => void;
  remove: (productId: string) => void;
  clear: () => void;
  has: (productId: string) => boolean;
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: [],
      toggle: (item) => {
        const exists = get().items.some((i) => i.productId === item.productId);
        set({
          items: exists
            ? get().items.filter((i) => i.productId !== item.productId)
            : [...get().items, item],
        });
      },
      remove: (productId) => set({ items: get().items.filter((i) => i.productId !== productId) }),
      clear: () => set({ items: [] }),
      has: (productId) => get().items.some((i) => i.productId === productId),
    }),
    { name: "konark-wishlist" }
  )
);
