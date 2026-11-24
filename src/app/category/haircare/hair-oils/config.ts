import { HAIRCARE_TABS } from "../config";

export const HAIR_OILS_ORDERED_HREFS = [
  "/product/now-solutions-castor-oil",
  "/product/amalico-natural-hair-growth-serum",
  "/product/amalico-batana-oil",
  "/product/hair-tonic-and-scalp-conditioner",
  "/product/mielle-organics-rosemary-mint-scalp-hair-oil",
  "/product/amalico-hair-growth-oil-with-chebe-powder",
  "/product/afghani-hair-growth-oil",
  "/product/dabur-amla-hair-oil",
  "/product/emami-7-oils-in-one",
  "/product/leaf-infused-hair-growth-oil",
  "/product/sunny-isle-castor-oil",
  "/product/vatika-hair-olive-oil",
  "/product/vatika-onion-enriched-hair-oil",
  "/product/olive-oil-hair-products",
  "/product/snail-hair-oil",
  "/product/mimi-beibei-rosemary-serum",
];

export const HAIR_OILS_PAGE_PROPS = {
  category: "hair-oils",
  basePath: "/category/haircare/hair-oils",
  eyebrow: "HAIR OILS",
  heading: "Discover hair oils selected for your everyday care.",
  subheading:
    "Explore the collection and find the right addition in your routine.",
  heroImage: "/sections/haircare-hero.png",
  heroAlt: "Woman with healthy nourished hair",
  breadcrumbLabel: "Hair Oils",
  tabs: HAIRCARE_TABS,
  activeTabHref: "/category/haircare/hair-oils",
  exploreHref: "/category/haircare/masks-treatments",
  exploreLabel: "SHOP HAIR MASKS & TREATMENTS",
  orderedHrefs: HAIR_OILS_ORDERED_HREFS,
} as const;
