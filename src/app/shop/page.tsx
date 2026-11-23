import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard, { type Product } from "@/components/ProductCard";
import Reveal from "@/components/Reveal";

const CATEGORY_TABS = [
  { label: "All Skincare", href: "/category/skincare" },
  { label: "Cleansers", href: "/category/skincare/cleansers" },
  { label: "Face Creams", href: "/category/skincare/face-creams" },
  { label: "Serums & Treatments", href: "/category/skincare/serums-treatments" },
  { label: "Sunscreens", href: "/category/sunscreen" },
];

const PRODUCTS: Product[] = [
  {
    name: "Tresemme shampoo pro collection",
    brand: "TRESEMME",
    description: "Keratin shampoo to control frizzy hair and smo...",
    price: "AED 20.00",
    oldPrice: "AED 25.00",
    image: "/products/2912-shopall.png",
    href: "/product/tresemme-shampoo-pro-collection",
  },
  {
    name: "Now solutions castor oil for hair",
    brand: "NOW SOLUTIONS",
    description: "This Now Foods castor oil has anti-inflammator...",
    price: "AED 45.00",
    oldPrice: "AED 50.00",
    image: "/products/2910-shopall.png",
    href: "/product/now-solutions-castor-oil",
  },
  {
    name: "Now vegetable glycerin",
    brand: "DR DESTA SELECTION",
    description: "Pure Vegetable Glycerin Is An Outstanding Mois...",
    price: "AED 45.00",
    oldPrice: "AED 50.00",
    image: "/products/2908-shopall.png",
    href: "/product/now-vegetable-glycerin",
  },
  {
    name: "Now solutions almond oil",
    brand: "NOW SOLUTIONS",
    description: "100% Pure Moisturizing Oil Nourishing Promotes...",
    price: "AED 45.00",
    oldPrice: "AED 50.00",
    image: "/products/2906-shopall.png",
    href: "/product/now-solutions-almond-oil",
  },
  {
    name: "Amalico pro natural shampoo",
    brand: "AMALICO",
    description: "Use for Hair Growth Moisturising & Anti-dandru...",
    price: "AED 30.00",
    oldPrice: "AED 35.00",
    image: "/products/2904-shopall.png",
    href: "/product/amalico-pro-natural-shampoo",
  },
  {
    name: "Amalico natural hair growth serum",
    brand: "AMALICO",
    description: "Formulated with a blend of Coconut Oil, Batana...",
    price: "AED 30.00",
    oldPrice: "AED 35.00",
    image: "/products/2902-shopall.png",
    href: "/product/amalico-natural-hair-growth-serum",
  },
  {
    name: "Amalico batana oil for hair growth",
    brand: "AMALICO",
    description: "This batana oil pro is derived from the miracu...",
    price: "AED 30.00",
    oldPrice: "AED 35.00",
    image: "/products/2900-shopall.png",
    href: "/product/amalico-batana-oil",
  },
  {
    name: "Shiseido Fino Premium Beauty Conditioner",
    brand: "SHISEIDO",
    description: "Fino Premium Touch is the perfect hair care pr...",
    price: "AED 45.00",
    oldPrice: "AED 55.00",
    image: "/products/2898-shopall.png",
    href: "/product/shiseido-fino-premium-beauty-conditioner",
  },
  {
    name: "Shiseido Fino Premium Beauty shampo",
    brand: "SHISEIDO",
    description: "Provides intense moisture for dry and damaged ...",
    price: "AED 50.00",
    oldPrice: "AED 55.00",
    image: "/products/2896-shopall.png",
    href: "/product/shiseido-fino-premium-beauty-shampoo",
  },
  {
    name: "Unlocking Queen Bee Apple Hair Colour",
    brand: "DR DESTA SELECTION",
    description: "Perfect color lock, dyeing and protecting oil ...",
    price: "AED 15.00",
    oldPrice: "AED 25.00",
    image: "/products/2893-shopall.png",
    href: "/product/unlocking-queen-bee-apple-hair-colour",
  },
  {
    name: "Long lasting hair dye",
    brand: "DR DESTA SELECTION",
    description: "It delivers color without the sting or strong ...",
    price: "AED 50.00",
    oldPrice: "AED 65.00",
    image: "/products/2890-shopall.png",
    href: "/product/long-lasting-hair-dye",
  },
  {
    name: "FEG hair regrowth spray",
    brand: "DR DESTA SELECTION",
    description: "Designed for users with low hair density or we...",
    price: "AED 50.00",
    oldPrice: "AED 55.00",
    image: "/products/2888-shopall.png",
    href: "/product/feg-hair-regrowth-spray",
  },
  {
    name: "American harvest honey",
    brand: "DR DESTA SELECTION",
    description: "Pure & Certified Natural Honey – Sourced direc...",
    price: "AED 20.00",
    oldPrice: "AED 25.00",
    image: "/products/2886-shopall.png",
    href: "/product/american-harvest-honey",
  },
  {
    name: "Cosmo black seed anti dandruff shampoo",
    brand: "COSMO",
    description: "Restore your hair's natural vitality with this...",
    price: "AED 30.00",
    oldPrice: "AED 35.00",
    image: "/products/2884-shopall.png",
    href: "/product/cosmo-black-seed-anti-dandruff-shampoo",
  },
  {
    name: "Moisturizing Coconut Milk Shampoo",
    brand: "DR DESTA SELECTION",
    description: "Cosmo moisturizing shampoo is enriched with Co...",
    price: "",
    oldPrice: "",
    image: "/products/2882-shopall.png",
    href: "/product/moisturizing-coconut-milk-shampoo",
    available: false,
  },
  {
    name: "Anti – Dandruff Cosmo Tea Tree Oil Shampoo",
    brand: "DR DESTA SELECTION",
    description: "Energize your senses with the refreshing tingl...",
    price: "AED 20.00",
    oldPrice: "AED 25.00",
    image: "/products/2880-shopall.png",
    href: "/product/anti-dandruff-cosmo-tea-tree-oil-shampoo",
  },
];

const TOTAL_PAGES = 10;

export default function ShopAllPage() {
  return (
    <div className="flex min-h-full flex-col bg-cream">
      <Navbar />
      <main className="flex-1">
        <div className="mx-auto max-w-[1800px] px-6 pt-6 sm:px-10">
          <nav className="text-xs text-ink/50">
            <Link href="/" className="hover:text-gold">
              Home
            </Link>{" "}
            / <span className="text-ink/50">Shop</span> /{" "}
            <span className="text-ink">Shop All</span>
          </nav>
        </div>

        <Reveal className="mx-auto max-w-[1800px] px-6 pt-8 sm:px-10">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] text-gold">SHOP ALL</p>
              <h1 className="mt-4 font-display text-4xl text-ink sm:text-5xl">
                Beauty for every day.
              </h1>
              <p className="mt-4 max-w-xl text-base text-ink/60">
                A considered collection of skincare, haircare and personal-care essentials. Find
                familiar favorites and something new.
              </p>
            </div>

            <div className="relative h-[160px] w-[280px] shrink-0 overflow-hidden lg:h-[160px] lg:w-[280px]">
              <Image
                src="/sections/our-story.png"
                alt="Woman gently touching her face, showcasing smooth, glowing skin"
                fill
                sizes="280px"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>

        <div className="mx-auto mt-10 max-w-[1800px] px-6 sm:px-10">
          <div className="flex flex-wrap items-center gap-x-10 gap-y-3 border-b border-ink/10 pb-6">
            {CATEGORY_TABS.map((tab) => (
              <Link
                key={tab.href}
                href={tab.href}
                className="text-sm text-ink/70 transition-colors hover:text-gold"
              >
                {tab.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 py-6">
            <button
              type="button"
              className="flex items-center gap-2 border border-ink/20 px-4 py-2.5 text-[11px] font-semibold tracking-[0.15em] text-ink transition-colors hover:border-ink"
            >
              FILTERS
              <span className="text-base leading-none">+</span>
            </button>

            <p className="text-sm text-ink/50">160 products &middot; Showing 1&ndash;16</p>

            <button
              type="button"
              className="flex items-center gap-2 border border-ink/20 px-4 py-2.5 text-[11px] font-semibold tracking-[0.15em] text-ink transition-colors hover:border-ink"
            >
              SORT: FEATURED
              <ChevronDown size={14} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        <div className="mx-auto max-w-[1800px] px-6 pb-16 sm:px-10">
          <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
            {PRODUCTS.map((product, i) => (
              <ProductCard key={product.href} product={product} delay={(i % 4) * 80} />
            ))}
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-2">
            {Array.from({ length: TOTAL_PAGES }).map((_, i) => {
              const page = i + 1;
              const isActive = page === 1;
              return (
                <button
                  key={page}
                  type="button"
                  className={
                    "flex h-9 w-9 items-center justify-center text-sm transition-colors " +
                    (isActive
                      ? "bg-ink text-cream"
                      : "border border-ink/20 text-ink hover:border-ink")
                  }
                >
                  {page}
                </button>
              );
            })}
          </div>

          <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-ink/10 pt-10 sm:flex-row sm:items-center">
            <p className="font-display text-lg italic text-ink/70">Keep exploring</p>
            <Link
              href="/category/haircare"
              className="flex shrink-0 items-center gap-1.5 border border-ink px-4 py-2 text-[11px] font-semibold tracking-[0.15em] text-ink transition-colors hover:bg-ink hover:text-cream"
            >
              DISCOVER HAIRCARE
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
