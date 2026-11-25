import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

const FAQ_ITEMS = [
  {
    category: "Orders",
    answer:
      "For help with an order, contact our team with your order number at Destamohammed23@gmail.com or +971 50 858 8350.",
  },
  {
    category: "Payments",
    answer:
      "The store is configured for card, cash on delivery, direct bank transfer and cheque. Availability must be confirmed for your address and order.",
  },
  {
    category: "Shipping",
    answer:
      "Orders are typically delivered within 3–5 business days, depending on your location. Contact the store to confirm charges and delivery coverage.",
  },
  {
    category: "Returns",
    answer:
      "Contact the store before returning a product. Eligibility, opened-item restrictions and return shipping arrangements require confirmation.",
  },
  {
    category: "Products",
    answer:
      "Product details are shown on individual listings. Refer to packaging for the current ingredient list and usage directions.",
  },
  {
    category: "Customer support",
    answer: "Monday–Friday: 08:30–20:00. Saturday–Sunday: 09:30–21:30. Call +971 50 858 8350.",
  },
];

export default function FaqPage() {
  return (
    <div className="flex min-h-full flex-col bg-cream">
      <Navbar />
      <main className="flex-1">
        <Reveal className="mx-auto max-w-[1800px] px-6 pt-10 pb-10 sm:px-10">
          <p className="text-xs font-semibold tracking-[0.3em] text-gold">CUSTOMER CARE</p>
          <h1 className="mt-4 font-display text-4xl text-ink sm:text-5xl">A little clarity.</h1>
          <p className="mt-4 max-w-xl text-base text-ink/60">
            Answers to common questions about shopping with Dr Desta Store.
          </p>
        </Reveal>

        <div className="mx-auto max-w-[1800px] pb-20 pl-10 pr-6 sm:pl-20 sm:pr-10">
          <div className="border-t border-ink/10">
            {FAQ_ITEMS.map((item) => (
              <div
                key={item.category}
                className="grid grid-cols-1 gap-3 border-b border-ink/10 py-10 sm:grid-cols-[280px_1fr] sm:gap-10"
              >
                <h2 className="font-display text-2xl text-ink">{item.category}</h2>
                <p className="max-w-2xl text-base leading-relaxed text-ink/60">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
