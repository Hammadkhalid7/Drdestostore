import Link from "next/link";

const PAGES = [
  { page: 1, href: "/terms-conditions" },
  { page: 2, href: "/terms-conditions/2" },
];

export default function TermsPagination({ current }: { current: number }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
      {PAGES.map(({ page, href }) => {
        const isActive = page === current;
        return (
          <Link
            key={page}
            href={href}
            className={
              "flex h-9 w-9 items-center justify-center text-sm transition-colors " +
              (isActive ? "bg-ink text-cream" : "border border-ink/20 text-ink hover:border-ink")
            }
          >
            {page}
          </Link>
        );
      })}
    </div>
  );
}
