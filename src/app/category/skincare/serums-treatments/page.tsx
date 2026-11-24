import CategoryContent from "@/components/CategoryContent";
import { SERUMS_TREATMENTS_PAGE_PROPS } from "./config";

export default function SerumsTreatmentsPage() {
  return <CategoryContent page={1} {...SERUMS_TREATMENTS_PAGE_PROPS} />;
}

