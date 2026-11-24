export const BODYCARE_TABS = [
  { label: "All Body Care", href: "/category/body-care" },
  { label: "Body Lotions", href: "/category/body-care/body-lotions" },
  { label: "Body Creams", href: "/category/body-care/body-creams" },
  { label: "Soaps & Cleansers", href: "/category/body-care/soaps-cleansers" },
];

// Curated order for the current catalog; new body care products added later
// (tagged with categories: ["body-care"]) are appended automatically after these.
export const BODYCARE_ORDERED_HREFS = [
  "/product/now-solutions-castor-oil",
  "/product/now-vegetable-glycerin",
  "/product/now-solutions-almond-oil",
  "/product/vaseline-intensive-care-deep-moisture-jelly-cream",
  "/product/eucerin-advanced-repair-body-lotion",
  "/product/vaseline-lotion-for-dry-skin-face",
  "/product/vaseline-gluta-hya-serum",
  "/product/sudocrem-healing-cream",
  "/product/kojic-acid-face-body-scrub",
  "/product/kojie-san-kojic-acid-soap",
  "/product/kenta-moroccan-cream",
  "/product/nivea-cocoa-butter-body-lotion",
  "/product/dove-antiperspirant-for-women",
  "/product/bebecom-glycerin-oil-reviews",
  "/product/dabur-herbolene-jelly",
  "/product/bepanthen-moisturizing-cream-price",
];

export const BODYCARE_PAGE_PROPS = {
  category: "body-care",
  basePath: "/category/body-care",
  eyebrow: "BODY CARE",
  heading: "Body Care",
  subheading:
    "Discover body care selected for your everyday care. Explore the collection and find the right addition in your routine.",
  heroImage: "/sections/our-story.png",
  heroAlt: "Dropper bottle, pump bottle and jar styled on stone",
  breadcrumbLabel: "Body Care",
  tabs: BODYCARE_TABS,
  activeTabHref: "/category/body-care",
  exploreHref: "/category/skincare",
  exploreLabel: "SHOP SKINCARE",
  orderedHrefs: BODYCARE_ORDERED_HREFS,
} as const;
