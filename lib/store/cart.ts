"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartLine {
  productId: string;
  slug: string;
  name: string;
  image: string;
  price: number; // unit price at time of adding — server always re-validates at checkout
  variantLabel?: string;
  variantId?: string;
  quantity: number;
}

interface CartState {
  lines: CartLine[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (line: Omit<CartLine, "quantity">, qty?: number) => void;
  removeItem: (productId: string, variantId?: string) => void;
  updateQuantity: (productId: string, variantId: string | undefined, qty: number) => void;
  clear: () => void;
}

// Persisted to localStorage so the cart survives refreshes for guests;
// on login, this same store is reconciled against the user's server-side Cart.
export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      lines: [],
      isOpen: false,
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      addItem: (line, qty = 1) => {
        const existing = get().lines.find(
          (l) => l.productId === line.productId && l.variantId === line.variantId
        );
        if (existing) {
          set({
            lines: get().lines.map((l) =>
              l === existing ? { ...l, quantity: l.quantity + qty } : l
            ),
          });
        } else {
          set({ lines: [...get().lines, { ...line, quantity: qty }] });
        }
        set({ isOpen: true });
      },
      removeItem: (productId, variantId) =>
        set({
          lines: get().lines.filter(
            (l) => !(l.productId === productId && l.variantId === variantId)
          ),
        }),
      updateQuantity: (productId, variantId, qty) =>
        set({
          lines: get()
            .lines.map((l) =>
              l.productId === productId && l.variantId === variantId
                ? { ...l, quantity: Math.max(1, qty) }
                : l
            ),
        }),
      clear: () => set({ lines: [] }),
    }),
    { name: "konark-cart" }
  )
);

export const cartSubtotal = (lines: CartLine[]) =>
  lines.reduce((sum, l) => sum + l.price * l.quantity, 0);

export const cartCount = (lines: CartLine[]) =>
  lines.reduce((sum, l) => sum + l.quantity, 0);
