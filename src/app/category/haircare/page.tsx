import CategoryContent from "@/components/CategoryContent";
import { HAIRCARE_PAGE_PROPS } from "./config";

export default function AllHaircarePage() {
  return <CategoryContent page={1} {...HAIRCARE_PAGE_PROPS} />;
}

