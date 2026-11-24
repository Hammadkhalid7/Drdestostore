import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import { PRODUCTS } from "@/data/products";

const CATEGORY_TABS = [
  { label: "All Skincare", href: "/category/skincare" },
  { label: "Cleansers", href: "/category/skincare/cleansers" },
  { label: "Face Creams", href: "/category/skincare/face-creams" },
  { label: "Serums & Treatments", href: "/category/skincare/serums-treatments" },
  { label: "Sunscreens", href: "/category/sunscreen" },
];

export const PAGE_SIZE = 16;

export function getTotalPages() {
  return Math.max(1, Math.ceil(PRODUCTS.length / PAGE_SIZE));
}

export function isValidPage(page: number) {
  return Number.isInteger(page) && page >= 1 && page <= getTotalPages();
}

export default function ShopAllContent({ page }: { page: number }) {
  const totalPages = getTotalPages();
  const start = (page - 1) * PAGE_SIZE;
  const pageProducts = PRODUCTS.slice(start, start + PAGE_SIZE);
  const rangeStart = PRODUCTS.length === 0 ? 0 : start + 1;
  const rangeEnd = Math.min(start + PAGE_SIZE, PRODUCTS.length);

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
          <div className="flex flex-wrap items-center justify-between gap-y-3 border-b border-ink/10 pb-6">
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

            <p className="text-sm text-ink/50">
              {PRODUCTS.length} products &middot; Showing {rangeStart}&ndash;{rangeEnd}
            </p>

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
            {pageProducts.map((product, i) => (
              <ProductCard key={product.href} product={product} delay={(i % 4) * 80} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-14 flex flex-wrap items-center justify-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => {
                const p = i + 1;
                const isActive = p === page;
                const href = p === 1 ? "/shop" : `/shop/${p}`;
                return (
                  <Link
                    key={p}
                    href={href}
                    className={
                      "flex h-9 w-9 items-center justify-center text-sm transition-colors " +
                      (isActive
                        ? "bg-ink text-cream"
                        : "border border-ink/20 text-ink hover:border-ink")
                    }
                  >
                    {p}
                  </Link>
                );
              })}
            </div>
          )}

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
