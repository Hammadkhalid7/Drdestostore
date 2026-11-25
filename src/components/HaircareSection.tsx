import ProductGridSection, { type Product } from "@/components/ProductGridSection";

const PRODUCTS: Product[] = [
  {
    name: "Mielle organics rosemary mint scalp & hair strengthening oil",
    brand: "MIELLE",
    description: "Mielle Rosemary Mint Scalp & Hair Oil is a premium blend designed to strengthen hair and soothe the scalp.",
    price: "AED 30.00",
    oldPrice: "AED 35.00",
    image: "/products/2862-hairoils.png",
    href: "/product/mielle-organics-rosemary-mint-scalp-hair-oil",
  },
  {
    name: "Mielle rosemary mint hair masque",
    brand: "MIELLE",
    description: "Give dry and thirsty hair a deep moisture treatment infused with rosemary and mint to strengthen and nourish strands.",
    price: "AED 30.00",
    oldPrice: "AED 35.00",
    image: "/products/2865-shop3.png",
    href: "/product/mielle-rosemary-mint-hair-masque",
  },
  {
    name: "Tresemme shampoo pro collection",
    brand: "TRESEMME",
    description: "Keratin shampoo to control frizzy hair and smooth strands, with Marula Oil for up to 72 hours of frizz control.",
    price: "AED 20.00",
    oldPrice: "AED 25.00",
    image: "/products/2912-v2.png",
    href: "/product/tresemme-shampoo-pro-collection",
  },
  {
    name: "Shiseido Fino Premium Beauty Conditioner",
    brand: "SHISEIDO",
    description: "Fino Premium Touch is a rich hair treatment conditioner that deeply moisturizes and smooths damaged hair.",
    price: "AED 45.00",
    oldPrice: "AED 55.00",
    image: "/products/2898-conditioners.png",
    href: "/product/shiseido-fino-premium-beauty-conditioner",
  },
];

export default function HaircareSection() {
  return (
    <ProductGridSection
      eyebrow="ROOTED IN ROUTINE"
      heading="Give your hair a little more care."
      viewAllHref="/category/haircare"
      products={PRODUCTS}
    />
  );
}
