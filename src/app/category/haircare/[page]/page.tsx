import { notFound } from "next/navigation";
import CategoryContent, {
  getCategoryTotalPages,
  isValidCategoryPage,
} from "@/components/CategoryContent";
import { HAIRCARE_PAGE_PROPS } from "../config";

export const instant = false;

export function generateStaticParams() {
  const totalPages = getCategoryTotalPages("haircare");
  return Array.from({ length: Math.max(1, totalPages - 1) }, (_, i) => ({
    page: String(i + 2),
  }));
}

export default async function AllHaircarePagedPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page: pageParam } = await params;
  const page = Number(pageParam);

  if (!isValidCategoryPage("haircare", page)) {
    notFound();
  }

  return <CategoryContent page={page} {...HAIRCARE_PAGE_PROPS} />;
}
