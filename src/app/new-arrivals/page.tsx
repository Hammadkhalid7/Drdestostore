import CategoryContent from "@/components/CategoryContent";
import { NEW_ARRIVALS_PAGE_PROPS } from "./config";

export default function NewArrivalsPage() {
  return <CategoryContent page={1} {...NEW_ARRIVALS_PAGE_PROPS} />;
}

