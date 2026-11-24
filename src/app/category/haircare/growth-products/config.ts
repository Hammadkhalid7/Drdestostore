import { HAIRCARE_TABS } from "../config";

export const HAIR_GROWTH_PRODUCTS_ORDERED_HREFS = [
  "/product/amalico-pro-natural-shampoo",
  "/product/amalico-natural-hair-growth-serum",
  "/product/amalico-batana-oil",
  "/product/feg-hair-regrowth-spray",
  "/product/mielle-organics-rosemary-mint-scalp-hair-oil",
  "/product/hairgrow-5-minoxidil-50ml",
  "/product/clear-men-shampoo",
  "/product/clear-for-men-anti-dandruff-shampoo",
  "/product/amalico-shampoo-chebe-powder-shea-butter",
  "/product/amalico-african-chebe-powder-conditioner",
  "/product/amalico-hair-mask-with-chebe-powder",
  "/product/amalico-hair-growth-oil-with-chebe-powder",
  "/product/afghani-hair-growth-oil",
  "/product/hairgrow-minoxidil-5-for-thicker-hair",
  "/product/dabur-amla-hair-oil",
  "/product/zalash-cocos-cream-hair-food",
];

export const HAIR_GROWTH_PRODUCTS_PAGE_PROPS = {
  category: "growth-products",
  basePath: "/category/haircare/growth-products",
  eyebrow: "HAIR GROWTH PRODUCTS",
  heading: "Discover hair growth products selected for your everyday care.",
  subheading:
    "Explore the collection and find the right addition in your routine.",
  heroImage: "/sections/haircare-hero.png",
  heroAlt: "Woman with long healthy hair",
  breadcrumbLabel: "Hair Growth Products",
  tabs: HAIRCARE_TABS,
  activeTabHref: "/category/haircare/growth-products",
  exploreHref: "/category/body-care",
  exploreLabel: "SHOP BODY CARE",
  orderedHrefs: HAIR_GROWTH_PRODUCTS_ORDERED_HREFS,
} as const;
