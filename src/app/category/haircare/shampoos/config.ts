import { HAIRCARE_TABS } from "../config";

export const SHAMPOOS_ORDERED_HREFS = [
  "/product/tresemme-shampoo-pro-collection",
  "/product/amalico-pro-natural-shampoo",
  "/product/shiseido-fino-premium-beauty-shampoo",
  "/product/long-lasting-hair-dye",
  "/product/cosmo-black-seed-anti-dandruff-shampoo",
  "/product/moisturizing-coconut-milk-shampoo",
  "/product/anti-dandruff-cosmo-tea-tree-oil-shampoo",
  "/product/clear-men-shampoo",
  "/product/clear-for-men-anti-dandruff-shampoo",
  "/product/amalico-shampoo-chebe-powder-shea-butter",
  "/product/vatika-shampoo-for-shiny-hair-strong",
  "/product/sulfur-8-original-formula",
  "/product/dove-shampoo-anti-dandruff-nourishing",
  "/product/meclay-london-anti-dandruff-sulfate",
  "/product/head-shoulders-400ml-deep-clean",
  "/product/clear-men-hair-fall-defense-shampoo",
];

export const SHAMPOOS_PAGE_PROPS = {
  category: "shampoos",
  basePath: "/category/haircare/shampoos",
  eyebrow: "SHAMPOOS",
  heading: "Discover shampoos selected for your everyday care.",
  subheading:
    "Explore the collection and find the right addition in your routine.",
  heroImage: "/sections/haircare-hero.png",
  heroAlt: "Woman washing hair with shampoo",
  breadcrumbLabel: "Shampoos",
  tabs: HAIRCARE_TABS,
  activeTabHref: "/category/haircare/shampoos",
  exploreHref: "/category/haircare/conditioners",
  exploreLabel: "SHOP CONDITIONERS",
  orderedHrefs: SHAMPOOS_ORDERED_HREFS,
} as const;
