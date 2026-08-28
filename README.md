# Konark Jewels — Online Jewellery Store

Premium e-commerce build for **Konark Jewels** ("Where Heritage Becomes Jewellery"),
inspired structurally by zerakijewels.com and visually by the KONARK sun-temple monogram.

> **Status: Phase 1–5 of 17 delivered.** Project scaffold, design system, database schema,
> seed data, global layout (announcement bar, mega-menu navbar, mobile drawer, footer), and
> the Home page are complete and functional. Shop/filtering, Product detail, Cart/Wishlist
> API routes, Auth, Checkout, Orders, and Admin are the next phases — see "Roadmap" below.

## Tech stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS with a centralized design-token theme (`tailwind.config.ts`)
- Prisma ORM — schema covers User, Product, Category, Collection, ProductVariant,
  ProductImage, Cart, CartItem, Wishlist, WishlistItem, Order, OrderItem, Address,
  Review, Coupon, CouponUsage, Payment
- NextAuth (credentials provider, bcrypt password hashing) — wiring in Phase 11
- Stripe (test mode) — payment abstraction in Phase 12
- Zustand for client cart/wishlist state (persisted to localStorage for guests,
  reconciled server-side once auth lands)
- Zod for input validation (added alongside each form/API route)

## Getting started
```bash
npm install
cp .env.example .env        # fill in NEXTAUTH_SECRET at minimum
npm run db:push             # creates local SQLite dev.db from the schema
npm run db:seed             # seeds categories, collections, products, admin user, a coupon
npm run dev                 # http://localhost:3000
```

Default seeded admin login: `admin@konarkjewels.com` / whatever you set as
`ADMIN_SEED_PASSWORD` in `.env` (change it before seeding — it's hashed with bcrypt at seed time).

## Switching to Postgres for production
1. In `prisma/schema.prisma`, change `provider = "sqlite"` to `provider = "postgresql"`.
2. Set `DATABASE_URL` in your environment to a real Postgres connection string.
3. Run `npx prisma migrate dev` locally once, then `npx prisma migrate deploy` in CI/production.

## Environment variables
See `.env.example`. Never commit a filled-in `.env` — it's already in `.gitignore`.

## Project structure
```
app/                  Next.js App Router pages (route groups: (shop), (auth), (account), admin)
components/           layout / navigation / product / cart / checkout / auth / account / admin / ui / forms
lib/                  prisma client, utils, navigation data, zustand stores, types
prisma/               schema.prisma, seed.ts
```

## Roadmap (remaining phases)
6. Shop listing — filters (category/price/material/collection/availability), sort, pagination, mobile filter drawer
7. Product detail — gallery, variant selection, reviews, related/recently-viewed
8. Search — suggestions, recent/popular searches, empty states
9. Cart page + `/api/cart` routes backing the store for logged-in users
10. Wishlist page + `/api/wishlist` routes
11. Auth (NextAuth credentials, register/login/forgot-password, protected `/account`)
12. Multi-step checkout + Stripe test-mode PaymentIntent flow (server computes final total — never trusts client price)
13. Order history + order detail with status timeline
14. Admin dashboard — overview metrics, product/order/customer/coupon CRUD, protected by role check
15. SEO (structured data, canonical URLs, breadcrumbs), accessibility pass, performance pass
16–17. Testing and full responsive QA (320px–1920px)

## Development principles enforced throughout
- Server always recalculates order totals — client-submitted prices are never trusted.
- Passwords hashed with bcrypt; admin routes will be protected by server-side role checks, not client-side hiding.
- No hardcoded product cards — everything renders from the `ProductCard` component off real data.
- `prefers-reduced-motion` is respected globally (see `app/globals.css`).
