import { HAIRCARE_TABS } from "../config";

export const MASKS_TREATMENTS_ORDERED_HREFS = [
  "/product/amalico-batana-oil",
  "/product/amalico-natural-hair-growth-serum",
  "/product/feg-hair-regrowth-spray",
  "/product/palmers-hair-cream",
  "/product/hair-tonic-and-scalp-conditioner",
  "/product/ors-olive-oil-relaxer-kit",
  "/product/mielle-organics-rosemary-mint-scalp-hair-oil",
  "/product/mielle-rosemary-mint-hair-masque",
  "/product/hairgrow-5-minoxidil-50ml",
  "/product/skala-expert-amido-de-milho",
  "/product/amalico-hair-mask-with-chebe-powder",
  "/product/amalico-hair-growth-oil-with-chebe-powder",
  "/product/afghani-hair-growth-oil",
  "/product/hairgrow-minoxidil-5-for-thicker-hair",
  "/product/nuba-ethiopian-shea-butter",
  "/product/sofnfree-1-litre-super-creme-relaxer",
];

export const MASKS_TREATMENTS_PAGE_PROPS = {
  category: "masks-treatments",
  basePath: "/category/haircare/masks-treatments",
  eyebrow: "HAIR MASKS & TREATMENTS",
  heading: "Deep treatments for healthier, stronger hair.",
  subheading:
    "Explore the collection and find the right addition in your routine.",
  heroImage: "/sections/haircare-hero.png",
  heroAlt: "Woman applying a nourishing hair treatment",
  breadcrumbLabel: "Hair Masks & Treatments",
  tabs: HAIRCARE_TABS,
  activeTabHref: "/category/haircare/masks-treatments",
  exploreHref: "/category/haircare/growth-products",
  exploreLabel: "SHOP HAIR GROWTH PRODUCTS",
  orderedHrefs: MASKS_TREATMENTS_ORDERED_HREFS,
} as const;
