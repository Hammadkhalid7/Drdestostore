import { notFound } from "next/navigation";
import CategoryContent, {
  getCategoryTotalPages,
  isValidCategoryPage,
} from "@/components/CategoryContent";
import { SHAMPOOS_PAGE_PROPS } from "../config";

export function generateStaticParams() {
  const totalPages = getCategoryTotalPages("shampoos");
  return Array.from({ length: Math.max(1, totalPages - 1) }, (_, i) => ({
    page: String(i + 2),
  }));
}

export default async function ShampoosPagedPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page: pageParam } = await params;
  const page = Number(pageParam);

  if (!isValidCategoryPage("shampoos", page)) {
    notFound();
  }

  return <CategoryContent page={page} {...SHAMPOOS_PAGE_PROPS} />;
}
