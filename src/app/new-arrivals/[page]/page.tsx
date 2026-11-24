import { notFound } from "next/navigation";
import CategoryContent, {
  getCategoryTotalPages,
  isValidCategoryPage,
} from "@/components/CategoryContent";
import { NEW_ARRIVALS_PAGE_PROPS } from "../config";

export function generateStaticParams() {
  const totalPages = getCategoryTotalPages("new-arrivals");
  return Array.from({ length: Math.max(1, totalPages - 1) }, (_, i) => ({
    page: String(i + 2),
  }));
}

export default async function NewArrivalsPagedPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page: pageParam } = await params;
  const page = Number(pageParam);

  if (!isValidCategoryPage("new-arrivals", page)) {
    notFound();
  }

  return <CategoryContent page={page} {...NEW_ARRIVALS_PAGE_PROPS} />;
}
