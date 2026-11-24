import CategoryContent from "@/components/CategoryContent";
import { HAIR_GROWTH_PRODUCTS_PAGE_PROPS } from "./config";

export default function HairGrowthProductsPage() {
  return <CategoryContent page={1} {...HAIR_GROWTH_PRODUCTS_PAGE_PROPS} />;
}

