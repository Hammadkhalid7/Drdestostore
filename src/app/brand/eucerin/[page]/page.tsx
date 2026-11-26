import { notFound } from "next/navigation";
import BrandContent, { getBrandTotalPages, isValidBrandPage } from "@/components/BrandContent";

export const instant = false;

export function generateStaticParams() {
  const totalPages = getBrandTotalPages("eucerin");
  return Array.from({ length: Math.max(1, totalPages - 1) }, (_, i) => ({
    page: String(i + 2),
  }));
}

export default async function EucerinBrandPagedPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page: pageParam } = await params;
  const page = Number(pageParam);

  if (!isValidBrandPage("eucerin", page)) {
    notFound();
  }

  return <BrandContent brandSlug="eucerin" page={page} basePath="/brand/eucerin" displayName="Eucerin" />;
}
