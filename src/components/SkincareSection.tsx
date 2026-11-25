import ProductGridSection, { type Product } from "@/components/ProductGridSection";

const PRODUCTS: Product[] = [
  {
    name: "Cerave Foaming Cleanser with Hyaluronic Acid",
    brand: "CERAVE",
    description: "Suitable for normal to oily skin, this refreshing gel cleanser removes impurities while helping maintain the skin barrier.",
    price: "AED 50.00",
    oldPrice: "AED 55.00",
    image: "/products/2757-shop5.png",
    href: "/product/cerave-foaming-cleanser-with-hyaluronic-acid",
  },
  {
    name: "CeraVe Moisturizing Cream with Hyaluronic Acid",
    brand: "CERAVE",
    description: "Suitable for dry and very dry skin on the face and body, this rich cream helps restore and maintain the skin barrier.",
    price: "AED 45.00",
    oldPrice: "AED 50.00",
    image: "/products/2755-shop5.png",
    href: "/product/cerave-moisturizing-cream-with-hyaluronic-acid",
  },
  {
    name: "Anua 7 rice ceramide barrier serum",
    brand: "ANUA",
    description: "Formulated with Anua's Rice Ceramide 7+ complex and arbutin, this serum strengthens the skin barrier while brightening.",
    price: "AED 65.00",
    oldPrice: "AED 75.00",
    image: "/products/2785-shop4.png",
    href: "/product/anua-7-rice-ceramide-barrier-serum",
  },
  {
    name: "La Roche-Posay Anthelios UVMune",
    brand: "LA ROCHE-POSAY",
    description: "Provides high sun protection while helping to repair the visible look of sun damage and dark spots.",
    price: "AED 70.00",
    oldPrice: "AED 80.00",
    image: "/products/2761-shop5.png",
    href: "/product/la-roche-posay-anthelios-uvmune",
  },
];

export default function SkincareSection() {
  return (
    <ProductGridSection
      eyebrow="THE SKINCARE EDIT"
      heading="Start with the essentials."
      viewAllHref="/category/skincare"
      products={PRODUCTS}
    />
  );
}
