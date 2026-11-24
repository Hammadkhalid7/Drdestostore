import CategoryContent from "@/components/CategoryContent";
import { BODY_LOTIONS_PAGE_PROPS } from "./config";

export default function BodyLotionsPage() {
  return <CategoryContent page={1} {...BODY_LOTIONS_PAGE_PROPS} />;
}

