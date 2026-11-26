import { notFound } from "next/navigation";
import CategoryContent, {
  getCategoryTotalPages,
  isValidCategoryPage,
} from "@/components/CategoryContent";
import { BODYCARE_PAGE_PROPS } from "../config";

export const instant = false;

export function generateStaticParams() {
  const totalPages = getCategoryTotalPages("body-care");
  return Array.from({ length: Math.max(1, totalPages - 1) }, (_, i) => ({
    page: String(i + 2),
  }));
}

export default async function BodyCarePagedPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page: pageParam } = await params;
  const page = Number(pageParam);

  if (!isValidCategoryPage("body-care", page)) {
    notFound();
  }

  return <CategoryContent page={page} {...BODYCARE_PAGE_PROPS} />;
}
