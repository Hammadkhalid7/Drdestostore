import { notFound } from "next/navigation";
import BrandContent, { getBrandTotalPages, isValidBrandPage } from "@/components/BrandContent";

export const instant = false;

export function generateStaticParams() {
  const totalPages = getBrandTotalPages("anua");
  return Array.from({ length: Math.max(1, totalPages - 1) }, (_, i) => ({
    page: String(i + 2),
  }));
}

export default async function AnuaBrandPagedPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page: pageParam } = await params;
  const page = Number(pageParam);

  if (!isValidBrandPage("anua", page)) {
    notFound();
  }

  return <BrandContent brandSlug="anua" page={page} basePath="/brand/anua" displayName="Anua" />;
}
