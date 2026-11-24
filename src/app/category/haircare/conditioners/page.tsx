import CategoryContent from "@/components/CategoryContent";
import { CONDITIONERS_PAGE_PROPS } from "./config";

export default function ConditionersPage() {
  return <CategoryContent page={1} {...CONDITIONERS_PAGE_PROPS} />;
}

