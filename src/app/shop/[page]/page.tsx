import { notFound } from "next/navigation";
import ShopAllContent, { getTotalPages, isValidPage } from "@/components/ShopAllContent";

export function generateStaticParams() {
  const totalPages = getTotalPages();
  return Array.from({ length: Math.max(1, totalPages - 1) }, (_, i) => ({
    page: String(i + 2),
  }));
}

export default async function ShopAllPagedPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page: pageParam } = await params;
  const page = Number(pageParam);

  if (!isValidPage(page)) {
    notFound();
  }

  return <ShopAllContent page={page} />;
}
