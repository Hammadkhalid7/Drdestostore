import { SKINCARE_TABS } from "../config";

// Curated order for the current catalog; new facial-oil products added later
// (tagged with categories: ["facial-oils"]) are appended automatically after these.
export const FACIAL_OILS_ORDERED_HREFS = [
  "/product/now-solutions-castor-oil",
  "/product/now-solutions-almond-oil",
  "/product/sunny-isle-castor-oil",
];

export const FACIAL_OILS_PAGE_PROPS = {
  category: "facial-oils",
  basePath: "/category/skincare/facial-oils",
  eyebrow: "FACIAL OILS",
  heading: "Facial Oils",
  subheading:
    "Discover facial oils selected for your everyday care. Explore the collection and find the right addition to your routine.",
  heroImage: "/sections/our-story.png",
  heroAlt: "Woman gently touching her face, showcasing smooth, glowing skin",
  breadcrumbLabel: "Facial Oils",
  tabs: SKINCARE_TABS,
  activeTabHref: "/category/skincare/facial-oils",
  exploreHref: "/category/haircare",
  exploreLabel: "DISCOVER HAIRCARE",
  orderedHrefs: FACIAL_OILS_ORDERED_HREFS,
} as const;
