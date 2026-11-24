import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function AboutPage() {
  return (
    <div className="flex min-h-full flex-col bg-cream">
      <Navbar />
      <main className="flex-1">
        {/* Intro */}
        <div className="mx-auto max-w-[1800px] px-6 pt-6 sm:px-10">
          <nav className="text-xs text-ink/50">
            <Link href="/" className="hover:text-gold">Home</Link>
            {" / "}
            <span className="text-ink">About Us</span>
          </nav>
        </div>

        <Reveal className="mx-auto max-w-[1800px] px-6 pt-8 pb-10 sm:px-10">
          <p className="text-xs font-semibold tracking-[0.3em] text-gold">OUR STORY</p>
          <h1 className="mt-4 font-display text-4xl text-ink sm:text-5xl">
            Beauty Begins with Care.
          </h1>
          <p className="mt-4 max-w-xl text-base text-ink/60">
            A personal approach to the things you use every day.
          </p>
        </Reveal>

        {/* Hero image */}
        <div className="mx-auto max-w-[1800px] px-6 sm:px-10">
          <div className="relative aspect-[16/7] w-full overflow-hidden">
            <Image
              src="/sections/about-hero.jpg"
              alt="Woman gently touching her face with closed eyes"
              fill
              sizes="100vw"
              className="object-cover object-top"
              priority
            />
          </div>
        </div>

        {/* Founded section */}
        <Reveal className="mx-auto max-w-[1800px] px-6 py-16 sm:px-10 lg:py-20">
          <div className="mb-10 flex items-center gap-6">
            <span className="text-xs font-semibold tracking-[0.25em] text-ink/50">
              FOUNDED WITH INTENTION
            </span>
            <div className="h-px flex-1 bg-ink/10" />
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="font-display text-3xl italic leading-snug text-ink sm:text-4xl">
                A passion for care.
                <br />
                A place for discovery.
              </p>
            </div>

            <div className="space-y-6 text-base leading-relaxed text-ink/60">
              <p>
                Founded by Desta, Dr Desta Store began with a passion for clean
                beauty and gentle skincare. Today, the store brings familiar beauty
                names and everyday personal-care products together in one place.
              </p>
              <p>
                We believe choosing your beauty essentials should feel simple,
                personal and enjoyable. From skincare to haircare, explore the
                products that fit the routines you love.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Three pillars */}
        <Reveal className="mx-auto max-w-[1800px] px-6 pb-16 sm:px-10 lg:pb-20">
          <div className="grid grid-cols-1 gap-0 divide-y divide-ink/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {[
              {
                num: "01",
                title: "Personal care",
                desc: "A collection for the routines that matter to you.",
              },
              {
                num: "02",
                title: "Thoughtful discovery",
                desc: "Familiar names and everyday essentials, together.",
              },
              {
                num: "03",
                title: "A warm welcome",
                desc: "A simple, approachable way to explore beauty.",
              },
            ].map(({ num, title, desc }) => (
              <div key={num} className="px-0 py-10 sm:px-10 sm:py-8 first:sm:pl-0 last:sm:pr-0">
                <p className="text-xs font-semibold tracking-[0.2em] text-ink/30">{num}</p>
                <p className="mt-4 text-base font-semibold text-ink">{title}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{desc}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* CTA section */}
        <div className="bg-[#ece6de]">
          <Reveal className="mx-auto flex max-w-[1800px] flex-col gap-10 px-6 py-10 sm:px-10 lg:flex-row lg:items-center lg:px-20 lg:py-12">
            <div className="relative aspect-[4/3] w-full overflow-hidden lg:w-[420px] lg:shrink-0">
              <Image
                src="/sections/about-products.jpg"
                alt="Dropper bottle, pump bottle and jar styled on stone"
                fill
                sizes="(min-width: 1024px) 420px, 100vw"
                className="object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col justify-center lg:px-10">
              <h2 className="font-display text-3xl italic leading-snug text-ink sm:text-4xl">
                Your everyday ritual,
                <br />
                beautifully considered.
              </h2>
              <Link
                href="/shop"
                className="mt-8 inline-flex w-fit items-center border border-ink px-8 py-4 text-xs font-semibold tracking-[0.2em] text-ink transition-colors hover:bg-ink hover:text-cream"
              >
                SHOP ALL
              </Link>
            </div>
          </Reveal>
        </div>
      </main>
      <Footer />
    </div>
  );
}

