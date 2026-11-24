import CategoryContent from "@/components/CategoryContent";
import { MASKS_TREATMENTS_PAGE_PROPS } from "./config";

export default function MasksTreatmentsPage() {
  return <CategoryContent page={1} {...MASKS_TREATMENTS_PAGE_PROPS} />;
}

