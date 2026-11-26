import { notFound } from "next/navigation";
import CategoryContent, {
  getCategoryTotalPages,
  isValidCategoryPage,
} from "@/components/CategoryContent";
import { BODY_LOTIONS_PAGE_PROPS } from "../config";

export const instant = false;

export function generateStaticParams() {
  const totalPages = getCategoryTotalPages("body-lotions");
  return Array.from({ length: Math.max(1, totalPages - 1) }, (_, i) => ({
    page: String(i + 2),
  }));
}

export default async function BodyLotionsPagedPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page: pageParam } = await params;
  const page = Number(pageParam);

  if (!isValidCategoryPage("body-lotions", page)) {
    notFound();
  }

  return <CategoryContent page={page} {...BODY_LOTIONS_PAGE_PROPS} />;
}
