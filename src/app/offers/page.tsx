import CategoryContent from "@/components/CategoryContent";
import { SPECIAL_OFFERS_PAGE_PROPS } from "./config";

export default function SpecialOffersPage() {
  return <CategoryContent page={1} {...SPECIAL_OFFERS_PAGE_PROPS} />;
}

