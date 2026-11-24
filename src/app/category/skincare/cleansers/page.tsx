import CategoryContent from "@/components/CategoryContent";
import { CLEANSERS_PAGE_PROPS } from "./config";

export default function CleansersPage() {
  return <CategoryContent page={1} {...CLEANSERS_PAGE_PROPS} />;
}

