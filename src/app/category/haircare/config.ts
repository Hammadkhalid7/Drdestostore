export const HAIRCARE_TABS = [
  { label: "All Haircare", href: "/category/haircare" },
  { label: "Shampoos", href: "/category/haircare/shampoos" },
  { label: "Conditioners", href: "/category/haircare/conditioners" },
  { label: "Hair Oils", href: "/category/haircare/hair-oils" },
  { label: "Hair Masks & Treatments", href: "/category/haircare/masks-treatments" },
  { label: "Hair Growth Products", href: "/category/haircare/growth-products" },
];

// Curated order for the current catalog; new haircare products added later
// (tagged with categories: ["haircare"]) are appended automatically after these.
export const HAIRCARE_ORDERED_HREFS = [
  "/product/tresemme-shampoo-pro-collection",
  "/product/now-solutions-castor-oil",
  "/product/amalico-pro-natural-shampoo",
  "/product/amalico-natural-hair-growth-serum",
  "/product/amalico-batana-oil",
  "/product/shiseido-fino-premium-beauty-conditioner",
  "/product/shiseido-fino-premium-beauty-shampoo",
  "/product/unlocking-queen-bee-apple-hair-colour",
  "/product/long-lasting-hair-dye",
  "/product/feg-hair-regrowth-spray",
  "/product/cosmo-black-seed-anti-dandruff-shampoo",
  "/product/moisturizing-coconut-milk-shampoo",
  "/product/anti-dandruff-cosmo-tea-tree-oil-shampoo",
  "/product/palmers-hair-cream",
  "/product/hair-tonic-and-scalp-conditioner",
  "/product/ors-olive-oil-relaxer-kit",
];

export const HAIRCARE_PAGE_PROPS = {
  category: "haircare",
  basePath: "/category/haircare",
  eyebrow: "ALL HAIRCARE",
  heading: "Make time for your hair.",
  subheading:
    "Discover shampoos, conditioners, nourishing oils and treatments for your everyday haircare routine.",
  heroImage: "/sections/haircare-hero.png",
  heroAlt: "Woman with long wavy hair looking over her shoulder",
  breadcrumbLabel: "All Haircare",
  tabs: HAIRCARE_TABS,
  activeTabHref: "/category/haircare",
  exploreHref: "/category/skincare",
  exploreLabel: "SHOP SKINCARE",
  orderedHrefs: HAIRCARE_ORDERED_HREFS,
} as const;
