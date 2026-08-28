import { PrismaClient, MetalType } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const categories = [
  { name: "Rings", slug: "rings", description: "Solitaires, cocktail rings, and everyday bands." },
  { name: "Necklaces", slug: "necklaces", description: "Pendants and chains for every neckline." },
  { name: "Earrings", slug: "earrings", description: "Studs, hoops, and drops." },
  { name: "Bracelets", slug: "bracelets", description: "Tennis bracelets and charm pieces." },
  { name: "Bangles", slug: "bangles", description: "Single and stacked bangles." },
  { name: "Bridal", slug: "bridal", description: "Pieces for the aisle and beyond." },
  { name: "Men's Jewellery", slug: "mens-jewellery", description: "Chains, rings, and cufflinks for him." },
];

const collections = [
  { name: "New Arrivals", slug: "new-arrivals" },
  { name: "Best Sellers", slug: "best-sellers" },
  { name: "Konark Heritage Edit", slug: "heritage-edit", description: "Pieces inspired by the Sun Temple's stone carvings." },
];

// Unsplash-hosted placeholder imagery — swap for real product photography before launch.
const img = (seed: string, w = 1200) => `https://images.unsplash.com/${seed}?auto=format&fit=crop&w=${w}&q=80`;

const products = [
  {
    name: "Celeste Solitaire Ring",
    slug: "celeste-solitaire-ring",
    sku: "KJ-RG-001",
    description:
      "A single round-brilliant stone set in a knife-edge band, cut to catch light from every angle. Celeste is built for daily wear — low profile, high polish, quietly confident.",
    care: "Store flat in the pouch provided. Avoid contact with perfume and chlorine. Polish with a soft cloth only.",
    material: MetalType.GOLD_18K,
    weightGrams: 2.4,
    dimensions: "Band width: 1.8mm · Stone: 5mm",
    price: 48500,
    compareAtPrice: 54000,
    stock: 14,
    isFeatured: true,
    isBestseller: true,
    category: "rings",
    collectionSlugs: ["best-sellers"],
    images: [img("photo-1605100804763-247f67b3557e"), img("photo-1603561591411-07134e71a2a9")],
    variants: [
      { label: "Size 5", type: "size", sku: "KJ-RG-001-5", stock: 3 },
      { label: "Size 6", type: "size", sku: "KJ-RG-001-6", stock: 5 },
      { label: "Size 7", type: "size", sku: "KJ-RG-001-7", stock: 4 },
      { label: "Size 8", type: "size", sku: "KJ-RG-001-8", stock: 2 },
    ],
  },
  {
    name: "Aurelia Gold Ring",
    slug: "aurelia-gold-ring",
    sku: "KJ-RG-002",
    description:
      "A sculpted, undulating band inspired by the sun-wheel carvings at Konark — cast in warm 22K gold with a hand-finished matte channel running through the polish.",
    care: "Remove before swimming or exercising. Clean with a lint-free cloth; avoid ultrasonic cleaners.",
    material: MetalType.GOLD_22K,
    weightGrams: 6.1,
    dimensions: "Band width: 6mm",
    price: 62000,
    compareAtPrice: null,
    stock: 9,
    isFeatured: true,
    isBestseller: false,
    category: "rings",
    collectionSlugs: ["heritage-edit"],
    images: [img("photo-1611591437281-460bfbe1220a"), img("photo-1611652022419-a9419f74343d")],
    variants: [
      { label: "Size 6", type: "size", sku: "KJ-RG-002-6", stock: 3 },
      { label: "Size 7", type: "size", sku: "KJ-RG-002-7", stock: 4 },
      { label: "Size 8", type: "size", sku: "KJ-RG-002-8", stock: 2 },
    ],
  },
  {
    name: "Luna Diamond Ring",
    slug: "luna-diamond-ring",
    sku: "KJ-RG-003",
    description:
      "Three pavé bands twist around a central bezel-set diamond — a modern take on the trilogy ring, designed to sit close and stack well with plain bands.",
    care: "Avoid harsh chemicals. Have prongs checked annually by a jeweller.",
    material: MetalType.PLATINUM,
    weightGrams: 3.2,
    dimensions: "Band width: 2.2mm · Stone: 4mm",
    price: 89000,
    compareAtPrice: 97500,
    stock: 6,
    isFeatured: false,
    isBestseller: true,
    isNewArrival: false,
    category: "rings",
    collectionSlugs: ["best-sellers"],
    images: [img("photo-1596944924616-7b38e7cfac36"), img("photo-1587467512961-120760940315")],
    variants: [
      { label: "Size 5", type: "size", sku: "KJ-RG-003-5", stock: 2 },
      { label: "Size 6", type: "size", sku: "KJ-RG-003-6", stock: 2 },
      { label: "Size 7", type: "size", sku: "KJ-RG-003-7", stock: 2 },
    ],
  },
  {
    name: "Élan Pendant Necklace",
    slug: "elan-pendant-necklace",
    sku: "KJ-NK-001",
    description:
      "A teardrop pendant on a fine cable chain, weighted to sit just below the collarbone. Designed to layer without competing.",
    care: "Store separately to avoid tangling and scratching. Remove before sleeping.",
    material: MetalType.GOLD_VERMEIL,
    weightGrams: 4.8,
    dimensions: "Chain: 18in + 2in extender · Pendant: 14mm",
    price: 21500,
    compareAtPrice: 25000,
    stock: 22,
    isFeatured: true,
    isNewArrival: true,
    category: "necklaces",
    collectionSlugs: ["new-arrivals"],
    images: [img("photo-1599643478518-a784e5dc4c8f"), img("photo-1599643477877-530eb83abc8e")],
    variants: [
      { label: "16in", type: "size", sku: "KJ-NK-001-16", stock: 8 },
      { label: "18in", type: "size", sku: "KJ-NK-001-18", stock: 14 },
    ],
  },
  {
    name: "Aurelia Chain Necklace",
    slug: "aurelia-chain-necklace",
    sku: "KJ-NK-002",
    description:
      "A substantial curb chain in brushed 22K gold — the kind of piece that anchors an outfit on its own or layers underneath the Élan pendant.",
    care: "Wipe after wear with a soft cloth. Avoid tangling with other pieces in storage.",
    material: MetalType.GOLD_22K,
    weightGrams: 11.4,
    dimensions: "Length: 20in · Link width: 5mm",
    price: 74000,
    compareAtPrice: null,
    stock: 11,
    category: "necklaces",
    collectionSlugs: ["heritage-edit"],
    images: [img("photo-1611591437281-460bfbe1220a", 1200), img("photo-1573408301185-9146fe634ad0")],
    variants: [{ label: "20in", type: "size", sku: "KJ-NK-002-20", stock: 11 }],
  },
  {
    name: "Celeste Pearl Necklace",
    slug: "celeste-pearl-necklace",
    sku: "KJ-NK-003",
    description:
      "Freshwater pearls hand-knotted on silk, finished with an 18K gold clasp shaped like a crescent moon — a quiet nod to the monogram at the heart of the house.",
    care: "Wipe pearls with a damp cloth after wear. Restring every two years with regular use.",
    material: MetalType.GOLD_18K,
    weightGrams: 9.6,
    dimensions: "Length: 17in",
    price: 38500,
    compareAtPrice: null,
    stock: 15,
    isBestseller: true,
    category: "necklaces",
    collectionSlugs: ["best-sellers"],
    images: [img("photo-1611652022419-a9419f74343d"), img("photo-1611591437281-460bfbe1220a")],
    variants: [{ label: "17in", type: "size", sku: "KJ-NK-003-17", stock: 15 }],
  },
  {
    name: "Lumière Stud Earrings",
    slug: "lumiere-stud-earrings",
    sku: "KJ-ER-001",
    description:
      "Bezel-set round stones in a low, close-to-the-lobe setting. The everyday stud, done properly — secure friction backs, hypoallergenic posts.",
    care: "Insert and remove by the post, not the stone. Clean posts with rubbing alcohol periodically.",
    material: MetalType.GOLD_18K,
    weightGrams: 1.6,
    dimensions: "Stone: 4mm",
    price: 18500,
    compareAtPrice: 21000,
    stock: 30,
    isFeatured: true,
    isBestseller: true,
    category: "earrings",
    collectionSlugs: ["best-sellers"],
    images: [img("photo-1535632066927-ab7c9ab60908"), img("photo-1602751584547-4038e3339e0c")],
    variants: [{ label: "One Size", type: "size", sku: "KJ-ER-001-OS", stock: 30 }],
  },
  {
    name: "Celeste Drop Earrings",
    slug: "celeste-drop-earrings",
    sku: "KJ-ER-002",
    description:
      "A single articulated drop beneath a stud top, moving with you rather than fighting your hair. Dressy enough for evening, light enough for daily wear.",
    care: "Store flat to protect the articulated joint. Avoid pulling from the drop.",
    material: MetalType.ROSE_GOLD,
    weightGrams: 2.9,
    dimensions: "Drop length: 22mm",
    price: 26500,
    compareAtPrice: null,
    stock: 17,
    isNewArrival: true,
    category: "earrings",
    collectionSlugs: ["new-arrivals"],
    images: [img("photo-1596944924616-7b38e7cfac36"), img("photo-1620656798579-1284aeba00f4")],
    variants: [{ label: "One Size", type: "size", sku: "KJ-ER-002-OS", stock: 17 }],
  },
  {
    name: "Aurelia Hoops",
    slug: "aurelia-hoops",
    sku: "KJ-ER-003",
    description:
      "Medium-weight hoops with a hammered, sun-ray texture radiating from the hinge — a direct nod to the temple's carved wheel motif.",
    care: "Avoid bending the hoop out of shape when removing. Store in individual pouches.",
    material: MetalType.GOLD_22K,
    weightGrams: 5.2,
    dimensions: "Diameter: 28mm",
    price: 33000,
    compareAtPrice: null,
    stock: 13,
    category: "earrings",
    collectionSlugs: ["heritage-edit"],
    images: [img("photo-1630019852942-f89202989a59"), img("photo-1599643478518-a784e5dc4c8f")],
    variants: [{ label: "One Size", type: "size", sku: "KJ-ER-003-OS", stock: 13 }],
  },
  {
    name: "Élan Tennis Bracelet",
    slug: "elan-tennis-bracelet",
    sku: "KJ-BR-001",
    description:
      "A continuous line of round stones in a four-prong setting, on a box-clasp with a secondary safety catch. The bracelet that goes with everything.",
    care: "Have the clasp and prongs inspected once a year. Avoid impact against hard surfaces.",
    material: MetalType.PLATINUM,
    weightGrams: 7.8,
    dimensions: "Length: 7in",
    price: 112000,
    compareAtPrice: 125000,
    stock: 5,
    isFeatured: true,
    category: "bracelets",
    collectionSlugs: ["best-sellers"],
    images: [img("photo-1611591437281-460bfbe1220a"), img("photo-1611652022419-a9419f74343d")],
    variants: [
      { label: "6.5in", type: "size", sku: "KJ-BR-001-65", stock: 2 },
      { label: "7in", type: "size", sku: "KJ-BR-001-7", stock: 3 },
    ],
  },
  {
    name: "Luna Charm Bracelet",
    slug: "luna-charm-bracelet",
    sku: "KJ-BR-002",
    description:
      "A fine curb chain bracelet with three starter charms — a crescent, a sunburst, and a single pearl — built to grow with new charms over time.",
    care: "Remove before washing hands. Charms tarnish with prolonged water exposure.",
    material: MetalType.GOLD_VERMEIL,
    weightGrams: 3.4,
    dimensions: "Length: 6.5in + 1in extender",
    price: 19500,
    compareAtPrice: null,
    stock: 20,
    isNewArrival: true,
    category: "bracelets",
    collectionSlugs: ["new-arrivals"],
    images: [img("photo-1602751584547-4038e3339e0c"), img("photo-1535632066927-ab7c9ab60908")],
    variants: [{ label: "One Size", type: "size", sku: "KJ-BR-002-OS", stock: 20 }],
  },
  {
    name: "Konark Sunwheel Bangle",
    slug: "konark-sunwheel-bangle",
    sku: "KJ-BG-001",
    description:
      "The house signature — a solid bangle with the sun-wheel spokes carved in low relief around the full circumference, in polished 22K gold.",
    care: "Store in the box provided; avoid stacking directly against other hard metal pieces.",
    material: MetalType.GOLD_22K,
    weightGrams: 18.2,
    dimensions: "Inner diameter: 2.4in",
    price: 145000,
    compareAtPrice: null,
    stock: 4,
    isFeatured: true,
    category: "bangles",
    collectionSlugs: ["heritage-edit"],
    images: [img("photo-1611591437281-460bfbe1220a"), img("photo-1573408301185-9146fe634ad0")],
    variants: [
      { label: "2.4in", type: "size", sku: "KJ-BG-001-24", stock: 2 },
      { label: "2.6in", type: "size", sku: "KJ-BG-001-26", stock: 2 },
    ],
  },
];

async function main() {
  console.log("Seeding KONARK JEWELS…");

  // Categories & collections
  for (const c of categories) {
    await prisma.category.upsert({ where: { slug: c.slug }, update: {}, create: c });
  }
  for (const c of collections) {
    await prisma.collection.upsert({ where: { slug: c.slug }, update: {}, create: c });
  }

  // Products
  for (const p of products) {
    const category = await prisma.category.findUnique({ where: { slug: p.category } });
    if (!category) continue;

    const product = await prisma.product.upsert({
      where: { slug: p.slug },
      update: {},
      create: {
        name: p.name,
        slug: p.slug,
        sku: p.sku,
        description: p.description,
        careInstructions: p.care,
        material: p.material,
        weightGrams: p.weightGrams,
        dimensions: p.dimensions,
        price: p.price,
        compareAtPrice: p.compareAtPrice ?? null,
        stock: p.stock,
        isFeatured: !!p.isFeatured,
        isBestseller: !!p.isBestseller,
        isNewArrival: !!p.isNewArrival,
        ratingAvg: 4.2 + Math.random() * 0.7,
        ratingCount: Math.floor(20 + Math.random() * 180),
        categories: { create: [{ categoryId: category.id }] },
      },
    });

    for (const [i, url] of p.images.entries()) {
      await prisma.productImage.create({
        data: { productId: product.id, url, altText: `${p.name} — view ${i + 1}`, sortOrder: i, isHover: i === 1 },
      });
    }

    for (const v of p.variants) {
      await prisma.productVariant.upsert({
        where: { sku: v.sku },
        update: {},
        create: { productId: product.id, label: v.label, type: v.type, sku: v.sku, stock: v.stock },
      });
    }

    for (const slug of p.collectionSlugs ?? []) {
      const collection = await prisma.collection.findUnique({ where: { slug } });
      if (collection) {
        await prisma.productCollection.upsert({
          where: { productId_collectionId: { productId: product.id, collectionId: collection.id } },
          update: {},
          create: { productId: product.id, collectionId: collection.id },
        });
      }
    }
  }

  // Admin user
  const adminEmail = process.env.ADMIN_SEED_EMAIL || "admin@konarkjewels.com";
  const adminPassword = process.env.ADMIN_SEED_PASSWORD || "change-me-immediately";
  await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      name: "Konark Admin",
      email: adminEmail,
      passwordHash: await bcrypt.hash(adminPassword, 12),
      role: "ADMIN",
    },
  });

  // Sample coupon
  await prisma.coupon.upsert({
    where: { code: "WELCOME10" },
    update: {},
    create: {
      code: "WELCOME10",
      type: "PERCENTAGE",
      value: 10,
      minOrderAmount: 5000,
      usageLimit: 500,
      isActive: true,
    },
  });

  console.log("Seed complete.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
