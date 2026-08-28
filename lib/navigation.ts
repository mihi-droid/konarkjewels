// Single source of truth for primary nav + mega-menu + footer links.
// Data-driven so category pages don't need to be hardcoded per-category.

export const primaryNav = [
  { label: "New Arrivals", href: "/shop?collection=new-arrivals" },
  {
    label: "Jewellery",
    href: "/shop",
    megaMenu: [
      { label: "Rings", href: "/shop/rings" },
      { label: "Necklaces", href: "/shop/necklaces" },
      { label: "Earrings", href: "/shop/earrings" },
      { label: "Bracelets", href: "/shop/bracelets" },
      { label: "Bangles", href: "/shop/bangles" },
      { label: "Men's Jewellery", href: "/shop/mens-jewellery" },
    ],
  },
  {
    label: "Collections",
    href: "/shop",
    megaMenu: [
      { label: "Heritage Edit", href: "/shop?collection=heritage-edit" },
      { label: "Best Sellers", href: "/shop?collection=best-sellers" },
      { label: "New Arrivals", href: "/shop?collection=new-arrivals" },
    ],
  },
  { label: "Bridal", href: "/shop/bridal" },
  { label: "About", href: "/about" },
] as const;

export const footerLinks = {
  Shop: [
    { label: "Rings", href: "/shop/rings" },
    { label: "Necklaces", href: "/shop/necklaces" },
    { label: "Earrings", href: "/shop/earrings" },
    { label: "Bracelets", href: "/shop/bracelets" },
    { label: "New Arrivals", href: "/shop?collection=new-arrivals" },
  ],
  "Customer Care": [
    { label: "Contact", href: "/contact" },
    { label: "Shipping", href: "/shipping" },
    { label: "Returns", href: "/returns" },
    { label: "Size Guide", href: "/size-guide" },
    { label: "Care Guide", href: "/care-guide" },
    { label: "FAQ", href: "/faq" },
  ],
  About: [
    { label: "Our Story", href: "/about" },
    { label: "Craftsmanship", href: "/craftsmanship" },
    { label: "Sustainability", href: "/sustainability" },
    { label: "Journal", href: "/journal" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Terms", href: "/legal/terms" },
    { label: "Refund Policy", href: "/legal/refunds" },
  ],
} as const;
