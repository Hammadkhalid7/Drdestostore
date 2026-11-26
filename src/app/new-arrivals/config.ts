export const NEW_ARRIVALS_TABS = [
  { label: "New Arrivals", href: "/new-arrivals" },
];

export const NEW_ARRIVALS_ORDERED_HREFS = [
  "/product/tresemme-shampoo-pro-collection",
  "/product/now-solutions-castor-oil",
  "/product/now-vegetable-glycerin",
  "/product/now-solutions-almond-oil",
  "/product/amalico-pro-natural-shampoo",
  "/product/amalico-natural-hair-growth-serum",
  "/product/amalico-batana-oil",
  "/product/shiseido-fino-premium-beauty-conditioner",
  "/product/shiseido-fino-premium-beauty-shampoo",
  "/product/unlocking-queen-bee-apple-hair-colour",
  "/product/long-lasting-hair-dye",
  "/product/feg-hair-regrowth-spray",
  "/product/american-harvest-honey",
  "/product/cosmo-black-seed-anti-dandruff-shampoo",
  "/product/moisturizing-coconut-milk-shampoo",
  "/product/anti-dandruff-cosmo-tea-tree-oil-shampoo",
];

export const NEW_ARRIVALS_PAGE_PROPS = {
  category: "new-arrivals",
  basePath: "/new-arrivals",
  eyebrow: "NEW ARRIVALS",
  heading: "A fresh beauty perspective.",
  subheading:
    "Discover the latest additions featured by Dr Desta Store, from haircare essentials to everyday beauty finds.",
  heroImage: "/sections/about-hero.jpg",
  heroAlt: "Dropper bottle, pump bottle and jar styled on stone",
  breadcrumbLabel: "New Arrivals",
  tabs: NEW_ARRIVALS_TABS,
  activeTabHref: "/new-arrivals",
  exploreHref: "/category/haircare",
  exploreLabel: "SHOP HAIRCARE",
  orderedHrefs: NEW_ARRIVALS_ORDERED_HREFS,
} as const;
