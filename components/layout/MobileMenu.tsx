"use client";

import Link from "next/link";
import { primaryNav } from "@/lib/navigation";
import { useEffect } from "react";

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] lg:hidden" role="dialog" aria-modal="true" aria-label="Menu">
      <div className="absolute inset-0 bg-ink/60" onClick={onClose} />
      <div className="absolute inset-y-0 left-0 w-[85%] max-w-sm bg-ivory shadow-panel overflow-y-auto">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <span className="font-display text-xl tracking-wide">Menu</span>
          <button onClick={onClose} aria-label="Close menu" className="p-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
        <nav className="px-5 py-4">
          {primaryNav.map((item) => (
            <div key={item.label} className="border-b border-border py-3">
              <Link href={item.href} onClick={onClose} className="block text-body-lg font-medium">
                {item.label}
              </Link>
              {"megaMenu" in item && item.megaMenu && (
                <div className="mt-2 flex flex-col gap-2 pl-3">
                  {item.megaMenu.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      onClick={onClose}
                      className="text-body-sm text-text-muted"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="px-5 py-4 flex flex-col gap-3">
          <Link href="/login" onClick={onClose} className="text-body-sm">
            Login / Account
          </Link>
          <Link href="/wishlist" onClick={onClose} className="text-body-sm">
            Wishlist
          </Link>
        </div>
      </div>
    </div>
  );
}
