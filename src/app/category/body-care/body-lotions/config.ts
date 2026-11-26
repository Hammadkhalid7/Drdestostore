import { BODYCARE_TABS } from "../config";

export const BODY_LOTIONS_ORDERED_HREFS = [
  "/product/eucerin-advanced-repair-body-lotion",
  "/product/vaseline-gluta-hya-serum",
  "/product/nivea-cocoa-butter-body-lotion",
  "/product/nivea-72-hour-moisture-rich-nourishing",
  "/product/vaseline-intensive-care-non-greasy-lotion",
  "/product/vaseline-radiant-glow-lotion",
  "/product/cerave-moisturizing-lotion-with-hyaluronic-acid",
  "/product/rdl-body-lotion-papaya-hand-body",
  "/product/vaseline-intensive-cocoa-radiant-body-lotion",
  "/product/kojic-acid-skin-body-lotion-for-glowing-skin",
  "/product/carotone-cream-lotion",
  "/product/vaseline-cocoa-butter-lotion",
  "/product/nivea-48-hours-hydration-cocoa-nourish",
];

export const BODY_LOTIONS_PAGE_PROPS = {
  category: "body-lotions",
  basePath: "/category/body-care/body-lotions",
  eyebrow: "BODY LOTIONS",
  heading: "Body Lotions",
  subheading:
    "Discover body lotions selected for your everyday care. Explore the collection and find the right addition in your routine.",
  heroImage: "/sections/about-hero.jpg",
  heroAlt: "Dropper bottle, pump bottle and jar styled on stone",
  breadcrumbLabel: "Body Lotions",
  tabs: BODYCARE_TABS,
  activeTabHref: "/category/body-care/body-lotions",
  exploreHref: "/category/body-care/body-creams",
  exploreLabel: "SHOP BODY CREAMS",
  orderedHrefs: BODY_LOTIONS_ORDERED_HREFS,
} as const;
