import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import Reveal from "@/components/Reveal";

export type Product = {
  name: string;
  brand: string;
  description: string;
  price: string;
  oldPrice: string;
  image: string;
  href: string;
  available?: boolean;
  categories?: string[];
};

type ProductCardProps = {
  product: Product;
  delay?: number;
};

export default function ProductCard({ product, delay = 0 }: ProductCardProps) {
  const available = product.available ?? true;

  return (
    <Reveal delay={delay} className="group flex h-full flex-col">
      <Link href={product.href} className="relative block bg-white">
        <span className="absolute left-3 top-3 z-10 bg-cream px-2 py-1 text-[10px] font-semibold tracking-[0.1em] text-gold">
          SALE
        </span>
        <button
          type="button"
          aria-label="Add to wishlist"
          className="absolute right-3 top-3 z-10 text-ink/70 transition-colors hover:text-gold"
        >
          <Heart size={18} strokeWidth={1.5} />
        </button>
        <div className="relative h-48 w-full overflow-hidden sm:h-56">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 25vw, 50vw"
            className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="mt-4 flex flex-1 flex-col">
        <p className="text-[11px] font-semibold tracking-[0.15em] text-ink/50">{product.brand}</p>
        <Link href={product.href}>
          <h3 className="mt-1.5 line-clamp-1 text-base text-ink transition-colors hover:text-gold">
            {product.name}
          </h3>
        </Link>
        <p className="mt-2 line-clamp-1 text-sm text-ink/50">{product.description}</p>

        {available ? (
          <div className="mt-2 flex items-center gap-3">
            <span className="text-sm font-semibold text-ink">{product.price}</span>
            <span className="text-sm text-ink/35 line-through">{product.oldPrice}</span>
          </div>
        ) : (
          <div className="mt-2">
            <span className="text-sm text-ink/40">Currently unavailable</span>
          </div>
        )}

        {available ? (
          <button
            type="button"
            className="mt-auto w-full border border-ink py-2.5 text-[11px] font-semibold tracking-[0.15em] text-ink transition-colors hover:bg-ink hover:text-cream"
          >
            ADD TO CART
          </button>
        ) : (
          <Link
            href={product.href}
            className="mt-auto block w-full border border-ink py-2.5 text-center text-[11px] font-semibold tracking-[0.15em] text-ink transition-colors hover:bg-ink hover:text-cream"
          >
            VIEW PRODUCT
          </Link>
        )}
      </div>
    </Reveal>
  );
}
