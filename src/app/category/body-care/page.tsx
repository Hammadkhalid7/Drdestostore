import CategoryContent from "@/components/CategoryContent";
import { BODYCARE_PAGE_PROPS } from "./config";

export default function BodyCarePage() {
  return <CategoryContent page={1} {...BODYCARE_PAGE_PROPS} />;
}

