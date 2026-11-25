import ProductGridSection, { type Product } from "@/components/ProductGridSection";

const PRODUCTS: Product[] = [
  {
    name: "Eucerin advanced repair body lotion",
    brand: "EUCERIN",
    description: "This fragrance-free Eucerin lotion repairs very dry, rough skin, leaving it smooth and comfortable.",
    price: "AED 75.00",
    oldPrice: "AED 80.00",
    image: "/products/2854-shop3.png",
    href: "/product/eucerin-advanced-repair-body-lotion",
  },
  {
    name: "Nivea cocoa butter body lotion twin pack",
    brand: "NIVEA",
    description: "Special offer twin pack, 250ml each, deeply nourishing dry skin with rich cocoa butter.",
    price: "AED 28.00",
    oldPrice: "AED 35.00",
    image: "/products/2930-shop3.png",
    href: "/product/nivea-cocoa-butter-body-lotion-twin-pack",
  },
  {
    name: "Anua Zero-Cast Moisturizing for Sunscreen Protection",
    brand: "ANUA",
    description: "Anua Zero-Cast Moisturizing Finish Sunscreen is a lightweight, non-greasy daily SPF for everyday protection.",
    price: "AED 50.00",
    oldPrice: "AED 55.00",
    image: "/products/2724-shop6.png",
    href: "/product/anua-zero-cast-moisturizing-sunscreen-protection",
  },
  {
    name: "Eucerin Face Sunscreen",
    brand: "EUCERIN",
    description: "Very high sun protection for the face: Eucerin's facial sunscreen fluid for daily SPF 50+ protection.",
    price: "AED 45.00",
    oldPrice: "AED 50.00",
    image: "/products/2364-sunscreen.png",
    href: "/product/eucerin-face-sunscreen",
  },
];

export default function BodySunCareSection() {
  return (
    <ProductGridSection
      eyebrow="BODY & SUN CARE"
      heading="Care that goes a little further."
      viewAllHref="/category/body-care"
      products={PRODUCTS}
    />
  );
}
