import { notFound } from "next/navigation";
import CategoryContent, {
  getCategoryTotalPages,
  isValidCategoryPage,
} from "@/components/CategoryContent";
import { MASKS_EXFOLIANTS_PAGE_PROPS } from "../config";

export function generateStaticParams() {
  const totalPages = getCategoryTotalPages("masks-exfoliants");
  return Array.from({ length: Math.max(1, totalPages - 1) }, (_, i) => ({
    page: String(i + 2),
  }));
}

export default async function MasksExfoliantsPagedPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page: pageParam } = await params;
  const page = Number(pageParam);

  if (!isValidCategoryPage("masks-exfoliants", page)) {
    notFound();
  }

  return <CategoryContent page={page} {...MASKS_EXFOLIANTS_PAGE_PROPS} />;
}
