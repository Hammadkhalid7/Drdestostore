import { SKINCARE_TABS } from "../config";

// Curated order for the current catalog; new face-cream products added later
// (tagged with categories: ["face-creams"]) are appended automatically after these.
export const FACE_CREAMS_ORDERED_HREFS = [
  "/product/kojic-acid-face-cream",
  "/product/bepanthen-moisturizing-cream-price",
  "/product/glysolid-cream-for-face",
  "/product/k-secret-seoul-1988-products",
  "/product/medicube-collagen-cream-dried-hydrolyzed",
  "/product/medicube-cream-with-vitamin-c",
  "/product/cerave-moisturizing-cream-with-hyaluronic-acid",
  "/product/nivea-creme-for-soft-and-supple-skin",
  "/product/nivea-soft-moisturising-cream-for-face",
  "/product/face-cream-for-melasma-even-skin-tone-repair",
  "/product/akpi-seeds-face-beautifying-cream",
  "/product/gluta-white-cream-benefits",
  "/product/qv-cream-for-very-dry-skin",
];

export const FACE_CREAMS_PAGE_PROPS = {
  category: "face-creams",
  basePath: "/category/skincare/face-creams",
  eyebrow: "FACE CREAMS",
  heading: "Face Creams",
  subheading:
    "Discover face creams selected for your everyday care. Explore the collection and find the right addition to your routine.",
  heroImage: "/sections/about-hero.jpg",
  heroAlt: "Woman gently touching her face, showcasing smooth, glowing skin",
  breadcrumbLabel: "Face Creams",
  tabs: SKINCARE_TABS,
  activeTabHref: "/category/skincare/face-creams",
  exploreHref: "/category/haircare",
  exploreLabel: "DISCOVER HAIRCARE",
  orderedHrefs: FACE_CREAMS_ORDERED_HREFS,
} as const;
