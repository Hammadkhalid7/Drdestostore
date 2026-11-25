import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function OurStorySection() {
  return (
    <section className="bg-[#ece6de] py-12">
      <Reveal className="mx-auto max-w-[1800px] px-6 sm:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative h-[260px] overflow-hidden lg:h-[320px]">
            <Image
              src="/sections/about-hero.jpg"
              alt="Woman with radiant skin gently touching her face"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-top"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold tracking-[0.3em] text-gold">OUR STORY</p>
            <h2 className="mt-5 font-display text-4xl italic font-normal leading-tight text-ink sm:text-5xl">
              Beauty Begins with Care.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink/60">
              At Dr Desta Store, we believe that choosing your everyday beauty essentials should
              feel simple, personal and enjoyable. Explore a thoughtfully presented collection of
              skincare, haircare and personal-care products, bringing trusted names and everyday
              favorites together in one place.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex w-fit items-center border border-ink bg-cream px-8 py-4 text-xs font-semibold tracking-[0.2em] text-ink transition-colors hover:bg-ink hover:text-cream"
            >
              OUR STORY
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
