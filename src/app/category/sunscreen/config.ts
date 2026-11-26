import { SKINCARE_TABS } from "../skincare/config";

// Curated order for the current catalog; new sunscreen products added later
// (tagged with categories: ["sunscreens"]) are appended automatically after these.
export const SUNSCREEN_ORDERED_HREFS = [
  "/product/kojic-acid-face-cream",
  "/product/la-roche-posay-anthelios-uvmune",
  "/product/anua-zero-cast-moisturizing-sunscreen-protection",
  "/product/eucerin-face-sunscreen",
];

export const SUNSCREEN_PAGE_PROPS = {
  category: "sunscreens",
  basePath: "/category/sunscreen",
  eyebrow: "SUNSCREENS",
  heading: "A daily essential.",
  subheading:
    "Explore sun protection from familiar skincare names. Choose the product that suits your routine.",
  heroImage: "/sections/about-hero.jpg",
  heroAlt: "Woman gently touching her face, showcasing smooth, glowing skin",
  breadcrumbLabel: "Sunscreens",
  tabs: SKINCARE_TABS,
  activeTabHref: "/category/sunscreen",
  exploreHref: "/category/haircare",
  exploreLabel: "DISCOVER HAIRCARE",
  orderedHrefs: SUNSCREEN_ORDERED_HREFS,
} as const;
