import { SKINCARE_TABS } from "../config";

// Curated order for the current catalog; new serum/treatment products added
// later (tagged with categories: ["serums-treatments"]) are appended
// automatically after these.
export const SERUMS_TREATMENTS_ORDERED_HREFS = [
  "/product/anua-heartleaf-77-soothing-mask",
  "/product/best-kojic-acid-serum-for-hyperpigmentation",
  "/product/love-jojo-aloe-vera-gel",
  "/product/skin1004-centella-cream",
  "/product/anua-pdrn-hyaluronic-acid-100-moisturizing-cream",
  "/product/anua-azelaic-10-hyaluron-toner-pads",
  "/product/anua-7-rice-ceramide-barrier-serum",
  "/product/anua-niacinamide-5-txa-toner-pads",
  "/product/medicube-txa-niacinamide-korean-skincare",
  "/product/medicube-salmon-glow-toner-for-skin-boosting",
  "/product/medicube-cream-with-vitamin-c",
  "/product/the-ordinary-hyaluronic-acid-for-face",
  "/product/face-cream-for-melasma-even-skin-tone-repair",
  "/product/carotone-30ml-natural-black-spot-serum",
  "/product/gluta-white-cream-benefits",
  "/product/eqqualberry-30ml-vitamin-illuminating-serum",
];

export const SERUMS_TREATMENTS_PAGE_PROPS = {
  category: "serums-treatments",
  basePath: "/category/skincare/serums-treatments",
  eyebrow: "SERUMS & TREATMENTS",
  heading: "Serums & Treatments",
  subheading:
    "Discover serums & treatments selected for your everyday care. Explore the collection and find the right addition to your routine.",
  heroImage: "/sections/our-story.png",
  heroAlt: "Woman gently touching her face, showcasing smooth, glowing skin",
  breadcrumbLabel: "Serums & Treatments",
  tabs: SKINCARE_TABS,
  activeTabHref: "/category/skincare/serums-treatments",
  exploreHref: "/category/haircare",
  exploreLabel: "DISCOVER HAIRCARE",
  orderedHrefs: SERUMS_TREATMENTS_ORDERED_HREFS,
} as const;
