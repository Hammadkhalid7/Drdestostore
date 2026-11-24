export const SKINCARE_TABS = [
  { label: "All Skincare", href: "/category/skincare" },
  { label: "Cleansers", href: "/category/skincare/cleansers" },
  { label: "Face Creams", href: "/category/skincare/face-creams" },
  { label: "Serums & Treatments", href: "/category/skincare/serums-treatments" },
  { label: "Sunscreens", href: "/category/sunscreen" },
  { label: "Facial Oils", href: "/category/skincare/facial-oils" },
  { label: "Masks & Exfoliants", href: "/category/skincare/masks-exfoliants" },
];

// Curated order for the current catalog; new skincare products added later
// (tagged with categories: ["skincare"]) are appended automatically after these.
export const SKINCARE_ORDERED_HREFS = [
  "/product/now-solutions-castor-oil",
  "/product/now-vegetable-glycerin",
  "/product/now-solutions-almond-oil",
  "/product/vaseline-intensive-care-deep-moisture-jelly-cream",
  "/product/eucerin-advanced-repair-body-lotion",
  "/product/anua-heartleaf-77-soothing-mask",
  "/product/best-kojic-acid-serum-for-hyperpigmentation",
  "/product/vaseline-lotion-for-dry-skin-face",
  "/product/vaseline-gluta-hya-serum",
  "/product/sudocrem-healing-cream",
  "/product/kojic-acid-face-cream",
  "/product/kojic-acid-face-body-scrub",
  "/product/kojie-san-kojic-acid-soap",
  "/product/kenta-moroccan-cream",
  "/product/nivea-cocoa-butter-body-lotion",
  "/product/bebecom-glycerin-oil-reviews",
];

export const SKINCARE_PAGE_PROPS = {
  category: "skincare",
  basePath: "/category/skincare",
  eyebrow: "ALL SKINCARE",
  heading: "Good skin starts with care.",
  subheading:
    "From the first cleanse to the finishing layer, explore essentials for a routine that feels like yours.",
  heroImage: "/sections/our-story.png",
  heroAlt: "Woman gently touching her face, showcasing smooth, glowing skin",
  breadcrumbLabel: "All Skincare",
  tabs: SKINCARE_TABS,
  activeTabHref: "/category/skincare",
  exploreHref: "/category/haircare",
  exploreLabel: "DISCOVER HAIRCARE",
  orderedHrefs: SKINCARE_ORDERED_HREFS,
} as const;
