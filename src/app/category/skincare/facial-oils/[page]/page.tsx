import { notFound } from "next/navigation";
import CategoryContent, {
  getCategoryTotalPages,
  isValidCategoryPage,
} from "@/components/CategoryContent";
import { FACIAL_OILS_PAGE_PROPS } from "../config";

export function generateStaticParams() {
  const totalPages = getCategoryTotalPages("facial-oils");
  return Array.from({ length: Math.max(1, totalPages - 1) }, (_, i) => ({
    page: String(i + 2),
  }));
}

export default async function FacialOilsPagedPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page: pageParam } = await params;
  const page = Number(pageParam);

  if (!isValidCategoryPage("facial-oils", page)) {
    notFound();
  }

  return <CategoryContent page={page} {...FACIAL_OILS_PAGE_PROPS} />;
}
