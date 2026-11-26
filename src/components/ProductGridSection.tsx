import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import ProductCard, { type Product } from "@/components/ProductCard";

export type { Product };

type ProductGridSectionProps = {
  eyebrow: string;
  heading: string;
  mobileHeading?: ReactNode;
  viewAllHref: string;
  products: Product[];
};

export default function ProductGridSection({
  eyebrow,
  heading,
  mobileHeading,
  viewAllHref,
  products,
}: ProductGridSectionProps) {
  return (
    <section className="bg-cream pb-20">
      <div className="mx-auto max-w-[1800px] px-6 sm:px-10">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-gold">{eyebrow}</p>
            {mobileHeading ? (
              <>
                <h2 className="mt-4 font-display text-4xl text-ink sm:hidden">{mobileHeading}</h2>
                <h2 className="mt-4 hidden font-display text-4xl text-ink sm:block sm:text-5xl">{heading}</h2>
              </>
            ) : (
              <h2 className="mt-4 font-display text-4xl text-ink sm:text-5xl">{heading}</h2>
            )}
          </div>

          <Link
            href={viewAllHref}
            className="flex shrink-0 items-center gap-1.5 border border-ink px-4 py-2 text-[11px] font-semibold tracking-[0.15em] text-ink transition-colors hover:bg-ink hover:text-cream"
          >
            VIEW ALL
            <ArrowRight size={12} strokeWidth={1.5} />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {products.map((product, i) => (
            <ProductCard key={product.href} product={product} delay={(i % 4) * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
