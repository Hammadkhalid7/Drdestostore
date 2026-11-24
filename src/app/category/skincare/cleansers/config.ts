import { SKINCARE_TABS } from "../config";

// Curated order for the current catalog; new cleanser products added later
// (tagged with categories: ["cleansers"]) are appended automatically after these.
export const CLEANSERS_ORDERED_HREFS = [
  "/product/k-secret-seoul-1988-pine-cica",
  "/product/skin1004-centella-cleansing-oil",
  "/product/medicube-facial-cleanser-turmeric-cleansing-for-brightening",
  "/product/cerave-foaming-cleanser-with-hyaluronic-acid",
  "/product/dove-moisturising-soap-for-healthy-skin",
];

export const CLEANSERS_PAGE_PROPS = {
  category: "cleansers",
  basePath: "/category/skincare/cleansers",
  eyebrow: "CLEANSERS",
  heading: "Find Your Everyday Cleanser.",
  subheading:
    "Explore facial cleansing essentials from familiar skincare brands, with options for different routines and preferences.",
  heroImage: "/sections/our-story.png",
  heroAlt: "Woman gently touching her face, showcasing smooth, glowing skin",
  breadcrumbLabel: "Cleansers",
  tabs: SKINCARE_TABS,
  activeTabHref: "/category/skincare/cleansers",
  exploreHref: "/category/haircare",
  exploreLabel: "DISCOVER HAIRCARE",
  orderedHrefs: CLEANSERS_ORDERED_HREFS,
} as const;
