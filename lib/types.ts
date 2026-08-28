export interface ProductSummary {
  id: string;
  name: string;
  slug: string;
  price: number;
  compareAtPrice: number | null;
  images: { url: string; altText: string; isHover: boolean }[];
  ratingAvg: number;
  ratingCount: number;
  isFeatured: boolean;
  isBestseller: boolean;
  isNewArrival: boolean;
  stock: number;
}
