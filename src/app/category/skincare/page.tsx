import CategoryContent from "@/components/CategoryContent";
import { SKINCARE_PAGE_PROPS } from "./config";

export default function AllSkincarePage() {
  return <CategoryContent page={1} {...SKINCARE_PAGE_PROPS} />;
}

