import { BODYCARE_TABS } from "../config";

export const SOAPS_CLEANSERS_ORDERED_HREFS = [
  "/product/kojie-san-kojic-acid-soap",
  "/product/johnsons-baby-gentle-cleansing-bath",
  "/product/goree-body-soap-for-healthy-glowing-skin",
  "/product/pyary-turmeric-ayurvedic-soap",
  "/product/silka-papaya-soap-for-healthy-skin",
  "/product/carotone-brightening-cream-and-soap",
  "/product/glutathione-whitening-soap-for-skin-tone",
  "/product/dove-moisturising-soap-for-healthy-skin",
];

export const SOAPS_CLEANSERS_PAGE_PROPS = {
  category: "soaps-cleansers",
  basePath: "/category/body-care/soaps-cleansers",
  eyebrow: "SOAPS & CLEANSERS",
  heading: "Soaps & Cleansers",
  subheading:
    "Discover soaps & cleansers selected for your everyday care. Explore the collection and find the right addition in your routine.",
  heroImage: "/sections/about-hero.jpg",
  heroAlt: "Dropper bottle, pump bottle and jar styled on stone",
  breadcrumbLabel: "Soaps & Cleansers",
  tabs: BODYCARE_TABS,
  activeTabHref: "/category/body-care/soaps-cleansers",
  exploreHref: "/category/body-care",
  exploreLabel: "SHOP ALL BODY CARE",
  orderedHrefs: SOAPS_CLEANSERS_ORDERED_HREFS,
} as const;
