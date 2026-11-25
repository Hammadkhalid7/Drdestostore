import { notFound } from "next/navigation";
import BrandContent, { getBrandTotalPages, isValidBrandPage } from "@/components/BrandContent";

export function generateStaticParams() {
  const totalPages = getBrandTotalPages("mielle");
  return Array.from({ length: Math.max(1, totalPages - 1) }, (_, i) => ({
    page: String(i + 2),
  }));
}

export default async function MielleBrandPagedPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page: pageParam } = await params;
  const page = Number(pageParam);

  if (!isValidBrandPage("mielle", page)) {
    notFound();
  }

  return <BrandContent brandSlug="mielle" page={page} basePath="/brand/mielle" displayName="Mielle" />;
}
