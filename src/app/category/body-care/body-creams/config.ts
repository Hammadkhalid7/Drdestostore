import { BODYCARE_TABS } from "../config";

export const BODY_CREAMS_ORDERED_HREFS = [
  "/product/sudocrem-healing-cream",
  "/product/kenta-moroccan-cream",
  "/product/bepanthen-moisturizing-cream-price",
  "/product/glysolid-cream-for-face",
  "/product/cerave-moisturizing-cream-with-hyaluronic-acid",
  "/product/nivea-creme-for-soft-and-supple-skin",
  "/product/nivea-soft-moisturising-cream-for-face",
  "/product/goree-body-cream-for-radiant-glowing-skin",
  "/product/akpi-seeds-100ml-breast-enlarging-cream",
  "/product/akpi-seeds-100ml-buttocks-cream",
  "/product/nuba-ethiopian-shea-butter",
  "/product/jamjoom-pharma-elica-m-cream",
  "/product/cocoa-butter-250ml-body-cream",
  "/product/cocoa-butter-body-cream-500ml",
  "/product/qv-cream-for-very-dry-skin",
  "/product/gluta-white-cream-benefits",
];

export const BODY_CREAMS_PAGE_PROPS = {
  category: "body-creams",
  basePath: "/category/body-care/body-creams",
  eyebrow: "BODY CREAMS",
  heading: "Body Creams",
  subheading:
    "Discover body creams selected for your everyday care. Explore the collection and find the right addition in your routine.",
  heroImage: "/sections/about-hero.jpg",
  heroAlt: "Dropper bottle, pump bottle and jar styled on stone",
  breadcrumbLabel: "Body Creams",
  tabs: BODYCARE_TABS,
  activeTabHref: "/category/body-care/body-creams",
  exploreHref: "/category/body-care/soaps-cleansers",
  exploreLabel: "SHOP SOAPS & CLEANSERS",
  orderedHrefs: BODY_CREAMS_ORDERED_HREFS,
} as const;
