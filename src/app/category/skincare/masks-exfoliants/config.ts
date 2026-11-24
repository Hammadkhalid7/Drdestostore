import { SKINCARE_TABS } from "../config";

// Curated order for the current catalog; new mask/exfoliant products added
// later (tagged with categories: ["masks-exfoliants"]) are appended
// automatically after these.
export const MASKS_EXFOLIANTS_ORDERED_HREFS = [
  "/product/kojic-acid-face-body-scrub",
  "/product/kojie-san-kojic-acid-soap",
  "/product/k-secret-seoul-1988-pine-cica",
  "/product/anua-pdrn-hyaluronic-acid-100-moisturizing-cream",
  "/product/medicube-salmon-glow-toner-for-skin-boosting",
  "/product/medicube-collagen-facial-mask-hydration-care",
  "/product/silka-papaya-soap-for-healthy-skin",
  "/product/orange-enzymes-gel",
];

export const MASKS_EXFOLIANTS_PAGE_PROPS = {
  category: "masks-exfoliants",
  basePath: "/category/skincare/masks-exfoliants",
  eyebrow: "MASKS & EXFOLIANTS",
  heading: "Masks & Exfoliants",
  subheading:
    "Discover masks & exfoliants selected for your everyday care. Explore the collection and find the right addition to your routine.",
  heroImage: "/sections/our-story.png",
  heroAlt: "Woman gently touching her face, showcasing smooth, glowing skin",
  breadcrumbLabel: "Masks & Exfoliants",
  tabs: SKINCARE_TABS,
  activeTabHref: "/category/skincare/masks-exfoliants",
  exploreHref: "/category/haircare",
  exploreLabel: "DISCOVER HAIRCARE",
  orderedHrefs: MASKS_EXFOLIANTS_ORDERED_HREFS,
} as const;
