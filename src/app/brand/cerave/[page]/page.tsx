import { notFound } from "next/navigation";
import BrandContent, { getBrandTotalPages, isValidBrandPage } from "@/components/BrandContent";

export const instant = false;

export function generateStaticParams() {
  const totalPages = getBrandTotalPages("cerave");
  return Array.from({ length: Math.max(1, totalPages - 1) }, (_, i) => ({
    page: String(i + 2),
  }));
}

export default async function CeraVeBrandPagedPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page: pageParam } = await params;
  const page = Number(pageParam);

  if (!isValidBrandPage("cerave", page)) {
    notFound();
  }

  return <BrandContent brandSlug="cerave" page={page} basePath="/brand/cerave" displayName="CeraVe" />;
}
