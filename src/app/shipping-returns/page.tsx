import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

const SECTIONS = [
  {
    number: "01",
    heading: "Shipping information",
    body: "Orders are typically delivered within 3–5 business days, depending on your location. Please contact the store to confirm delivery coverage, charges and any order-specific requirements.",
  },
  {
    number: "02",
    heading: "Returns & refunds",
    body: "The published Terms state: “We issue refunds for Contracts within 30 days of the original purchase of the Contract.” Product eligibility, opened-item restrictions and return postage are not specified. Please contact the store before arranging a return.",
  },
  {
    number: "03",
    heading: "Need help?",
    body: "Share your order number and enquiry with Destamohammed23@gmail.com or call +971 50 858 8350. Our team can help clarify the details for your purchase.",
  },
];

export default function ShippingReturnsPage() {
  return (
    <div className="flex min-h-full flex-col bg-cream">
      <Navbar />
      <main className="flex-1">
        <Reveal className="mx-auto max-w-[1800px] px-6 pt-10 pb-10 sm:px-10">
          <p className="text-xs font-semibold tracking-[0.3em] text-gold">CUSTOMER CARE</p>
          <h1 className="mt-4 font-display text-4xl text-ink sm:text-5xl">Delivered with clarity.</h1>
          <p className="mt-4 max-w-xl text-base text-ink/60">
            What to know before placing your order.
          </p>
        </Reveal>

        <div className="mx-auto max-w-[1800px] pb-20 pl-10 pr-6 sm:pl-20 sm:pr-10">
          <div className="border-t border-ink/10">
            {SECTIONS.map((section) => (
              <div
                key={section.number}
                className="grid grid-cols-1 gap-4 border-b border-ink/10 py-14 sm:grid-cols-[280px_1fr] sm:gap-10"
              >
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] text-ink/40">
                    {section.number}
                  </p>
                  <h2 className="mt-3 font-display text-3xl text-ink">{section.heading}</h2>
                </div>
                <p className="max-w-2xl text-base leading-relaxed text-ink/60">{section.body}</p>
              </div>
            ))}
          </div>

          <div className="pt-10">
            <Link
              href="/terms-conditions"
              className="inline-flex w-full items-center justify-center border border-ink px-8 py-4 text-xs font-semibold tracking-[0.2em] text-ink transition-colors hover:bg-ink hover:text-cream sm:w-auto sm:min-w-[320px]"
            >
              READ TERMS &amp; CONDITIONS
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
