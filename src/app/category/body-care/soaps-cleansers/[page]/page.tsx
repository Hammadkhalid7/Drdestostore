import { notFound } from "next/navigation";
import CategoryContent, {
  getCategoryTotalPages,
  isValidCategoryPage,
} from "@/components/CategoryContent";
import { SOAPS_CLEANSERS_PAGE_PROPS } from "../config";

export const instant = false;

export function generateStaticParams() {
  const totalPages = getCategoryTotalPages("soaps-cleansers");
  return Array.from({ length: Math.max(1, totalPages - 1) }, (_, i) => ({
    page: String(i + 2),
  }));
}

export default async function SoapsCleanserPagedPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page: pageParam } = await params;
  const page = Number(pageParam);

  if (!isValidCategoryPage("soaps-cleansers", page)) {
    notFound();
  }

  return <CategoryContent page={page} {...SOAPS_CLEANSERS_PAGE_PROPS} />;
}
