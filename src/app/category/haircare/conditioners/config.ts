import { HAIRCARE_TABS } from "../config";

export const CONDITIONERS_ORDERED_HREFS = [
  "/product/shiseido-fino-premium-beauty-conditioner",
  "/product/palmers-hair-cream",
  "/product/hair-tonic-and-scalp-conditioner",
  "/product/skala-expert-amido-de-milho",
  "/product/amalico-african-chebe-powder-conditioner",
  "/product/cream-silk-conditioner-for-healthy-hair",
  "/product/skala-1000g-perfect-curls",
  "/product/skala-lady-expert-perfect-curls",
  "/product/dove-conditioner-smooth-and-healthy-hair",
  "/product/zalash-cocos-cream-hair-food",
  "/product/zenith-coconut-hair-product",
  "/product/batana-butter-100g-hair-treatment",
  "/product/cantu-avocado-repair-leave-hair-cream",
  "/product/cantu-avocado-conditioner-leave-in",
  "/product/blue-magic-hair-food",
  "/product/blue-magic-hair-scalp-conditioner",
];

export const CONDITIONERS_PAGE_PROPS = {
  category: "conditioners",
  basePath: "/category/haircare/conditioners",
  eyebrow: "CONDITIONERS",
  heading: "Discover conditioners selected for your everyday care.",
  subheading:
    "Explore the collection and find the right addition in your routine.",
  heroImage: "/sections/haircare-hero.png",
  heroAlt: "Woman with healthy conditioned hair",
  breadcrumbLabel: "Conditioners",
  tabs: HAIRCARE_TABS,
  activeTabHref: "/category/haircare/conditioners",
  exploreHref: "/category/haircare/hair-oils",
  exploreLabel: "SHOP HAIR OILS",
  orderedHrefs: CONDITIONERS_ORDERED_HREFS,
} as const;
