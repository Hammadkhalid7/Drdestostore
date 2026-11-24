import CategoryContent from "@/components/CategoryContent";
import { SHAMPOOS_PAGE_PROPS } from "./config";

export default function ShampoosPage() {
  return <CategoryContent page={1} {...SHAMPOOS_PAGE_PROPS} />;
}

