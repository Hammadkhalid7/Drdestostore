import Reveal from "@/components/Reveal";

const TESTIMONIALS = [
  {
    text: "Tried so many products, but nothing made my skin feel as healthy as Dr Desta Store. It's now a permanent part of my daily routine!",
    author: "Jennifer Lewis",
  },
  {
    text: "Dr Desta Store truly lives up to its name. My skin feels softer, looks brighter, and I've received so many compliments.",
    author: "Alicia Heart",
  },
  {
    text: "Within a week, I could see and feel the difference—less dryness, fewer breakouts, and a real glow.",
    author: "Juan Carlos",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-gold">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
          <path d="M7 1l1.545 3.13 3.455.502-2.5 2.437.59 3.44L7 8.885l-3.09 1.624.59-3.44L2 4.632l3.455-.502L7 1z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="bg-cream pt-16 pb-20">
      <Reveal className="mx-auto max-w-[1800px] px-6 sm:px-10">
        <div className="mb-10 flex items-center gap-6">
          <span className="text-xs font-semibold tracking-[0.25em] text-gold">
            NOTES FROM OUR COMMUNITY
          </span>
          <div className="h-px flex-1 bg-ink/10" />
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {TESTIMONIALS.map(({ text, author }) => (
            <div key={author} className="flex flex-col gap-4 border border-ink/10 p-8">
              <Stars />
              <p className="text-base leading-relaxed text-ink/70">&ldquo;{text}&rdquo;</p>
              <p className="mt-auto text-xs font-semibold tracking-[0.15em] text-ink/40">
                {author.toUpperCase()}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
