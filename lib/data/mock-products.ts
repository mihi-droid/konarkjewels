// Client/dev-time mock of the seeded catalog, shaped exactly like the
// Prisma query result used on the real Home/Shop pages. Swap any usage
// of this file for `prisma.product.findMany(...)` once the DB is running —
// the shape matches so components don't change.
import type { ProductSummary } from "@/lib/types";

const img = (seed: string) => `https://images.unsplash.com/${seed}?auto=format&fit=crop&w=1200&q=80`;

export const mockProducts: ProductSummary[] = [
  {
    id: "1", name: "Celeste Solitaire Ring", slug: "celeste-solitaire-ring",
    price: 48500, compareAtPrice: 54000, stock: 14,
    images: [
      { url: img("photo-1605100804763-247f67b3557e"), altText: "Celeste Solitaire Ring", isHover: false },
      { url: img("photo-1603561591411-07134e71a2a9"), altText: "Celeste Solitaire Ring worn", isHover: true },
    ],
    ratingAvg: 4.8, ratingCount: 62, isFeatured: true, isBestseller: true, isNewArrival: false,
  },
  {
    id: "2", name: "Aurelia Gold Ring", slug: "aurelia-gold-ring",
    price: 62000, compareAtPrice: null, stock: 9,
    images: [
      { url: img("photo-1611591437281-460bfbe1220a"), altText: "Aurelia Gold Ring", isHover: false },
      { url: img("photo-1611652022419-a9419f74343d"), altText: "Aurelia Gold Ring detail", isHover: true },
    ],
    ratingAvg: 4.6, ratingCount: 34, isFeatured: true, isBestseller: false, isNewArrival: false,
  },
  {
    id: "4", name: "Élan Pendant Necklace", slug: "elan-pendant-necklace",
    price: 21500, compareAtPrice: 25000, stock: 22,
    images: [
      { url: img("photo-1599643478518-a784e5dc4c8f"), altText: "Élan Pendant Necklace", isHover: false },
      { url: img("photo-1599643477877-530eb83abc8e"), altText: "Élan Pendant Necklace worn", isHover: true },
    ],
    ratingAvg: 4.7, ratingCount: 88, isFeatured: true, isBestseller: false, isNewArrival: true,
  },
  {
    id: "7", name: "Lumière Stud Earrings", slug: "lumiere-stud-earrings",
    price: 18500, compareAtPrice: 21000, stock: 30,
    images: [
      { url: img("photo-1535632066927-ab7c9ab60908"), altText: "Lumière Stud Earrings", isHover: false },
      { url: img("photo-1602751584547-4038e3339e0c"), altText: "Lumière Stud Earrings worn", isHover: true },
    ],
    ratingAvg: 4.9, ratingCount: 145, isFeatured: true, isBestseller: true, isNewArrival: false,
  },
  {
    id: "10", name: "Élan Tennis Bracelet", slug: "elan-tennis-bracelet",
    price: 112000, compareAtPrice: 125000, stock: 5,
    images: [
      { url: img("photo-1611591437281-460bfbe1220a"), altText: "Élan Tennis Bracelet", isHover: false },
      { url: img("photo-1611652022419-a9419f74343d"), altText: "Élan Tennis Bracelet worn", isHover: true },
    ],
    ratingAvg: 4.8, ratingCount: 41, isFeatured: true, isBestseller: false, isNewArrival: false,
  },
  {
    id: "12", name: "Konark Sunwheel Bangle", slug: "konark-sunwheel-bangle",
    price: 145000, compareAtPrice: null, stock: 4,
    images: [
      { url: img("photo-1611591437281-460bfbe1220a"), altText: "Konark Sunwheel Bangle", isHover: false },
      { url: img("photo-1573408301185-9146fe634ad0"), altText: "Konark Sunwheel Bangle detail", isHover: true },
    ],
    ratingAvg: 4.9, ratingCount: 19, isFeatured: true, isBestseller: false, isNewArrival: false,
  },
];

export const categoryShowcase = [
  { name: "Rings", slug: "rings", image: img("photo-1605100804763-247f67b3557e") },
  { name: "Necklaces", slug: "necklaces", image: img("photo-1599643478518-a784e5dc4c8f") },
  { name: "Earrings", slug: "earrings", image: img("photo-1535632066927-ab7c9ab60908") },
  { name: "Bangles", slug: "bangles", image: img("photo-1611591437281-460bfbe1220a") },
] as const;
