export const SPECIAL_OFFERS_TABS = [
  { label: "Special Offers", href: "/offers" },
];

export const SPECIAL_OFFERS_ORDERED_HREFS = [
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
  "/product/anti-dandruff-cosmo-tea-tree-oil-shampoo",
  "/product/palmers-hair-cream",
];

export const SPECIAL_OFFERS_PAGE_PROPS = {
  category: "offers",
  basePath: "/offers",
  eyebrow: "SPECIAL OFFERS",
  heading: "Good finds, considered prices.",
  subheading:
    "Explore current offers across the collection. Original and selling prices are shown together for easy comparison.",
  heroImage: "/sections/our-story.png",
  heroAlt: "Dropper bottle, pump bottle and jar styled on stone",
  breadcrumbLabel: "Special Offers",
  tabs: SPECIAL_OFFERS_TABS,
  activeTabHref: "/offers",
  exploreHref: "/shop",
  exploreLabel: "SHOP ALL",
  orderedHrefs: SPECIAL_OFFERS_ORDERED_HREFS,
} as const;
