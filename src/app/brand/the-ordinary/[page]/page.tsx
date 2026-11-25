import { notFound } from "next/navigation";
import BrandContent, { getBrandTotalPages, isValidBrandPage } from "@/components/BrandContent";

export function generateStaticParams() {
  const totalPages = getBrandTotalPages("the-ordinary");
  return Array.from({ length: Math.max(1, totalPages - 1) }, (_, i) => ({
    page: String(i + 2),
  }));
}

export default async function TheOrdinaryBrandPagedPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page: pageParam } = await params;
  const page = Number(pageParam);

  if (!isValidBrandPage("the-ordinary", page)) {
    notFound();
  }

  return (
    <BrandContent brandSlug="the-ordinary" page={page} basePath="/brand/the-ordinary" displayName="The Ordinary" />
  );
}
