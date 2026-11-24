import { notFound } from "next/navigation";
import CategoryContent, {
  getCategoryTotalPages,
  isValidCategoryPage,
} from "@/components/CategoryContent";
import { BODY_CREAMS_PAGE_PROPS } from "../config";

export function generateStaticParams() {
  const totalPages = getCategoryTotalPages("body-creams");
  return Array.from({ length: Math.max(1, totalPages - 1) }, (_, i) => ({
    page: String(i + 2),
  }));
}

export default async function BodyCreamsPagedPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page: pageParam } = await params;
  const page = Number(pageParam);

  if (!isValidCategoryPage("body-creams", page)) {
    notFound();
  }

  return <CategoryContent page={page} {...BODY_CREAMS_PAGE_PROPS} />;
}
