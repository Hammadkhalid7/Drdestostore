import { notFound } from "next/navigation";
import CategoryContent, {
  getCategoryTotalPages,
  isValidCategoryPage,
} from "@/components/CategoryContent";
import { SPECIAL_OFFERS_PAGE_PROPS } from "../config";

export const instant = false;

export function generateStaticParams() {
  const totalPages = getCategoryTotalPages("offers");
  return Array.from({ length: Math.max(1, totalPages - 1) }, (_, i) => ({
    page: String(i + 2),
  }));
}

export default async function SpecialOffersPagedPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page: pageParam } = await params;
  const page = Number(pageParam);

  if (!isValidCategoryPage("offers", page)) {
    notFound();
  }

  return <CategoryContent page={page} {...SPECIAL_OFFERS_PAGE_PROPS} />;
}
