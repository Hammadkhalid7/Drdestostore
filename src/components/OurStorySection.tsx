import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function OurStorySection() {
  return (
    <section className="bg-[#ece6de] py-8 sm:py-10">
      <Reveal className="mx-auto max-w-[1800px] px-6 sm:px-10 lg:px-[100px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[460px_1fr] lg:gap-[100px]">
          <div className="relative mx-auto aspect-[600/430] w-full max-w-[460px] overflow-hidden">
            <Image
              src="/sections/our-story-new.jpg"
              alt="Woman with radiant skin gently touching her face"
              fill
              sizes="(min-width: 1024px) 460px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold tracking-[0.3em] text-gold">OUR STORY</p>
            <h2 className="mt-6 font-display text-4xl italic font-normal leading-tight text-ink sm:text-5xl lg:text-6xl">
              Beauty Begins with Care.
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-ink/60">
              At Dr Desta Store, we believe that choosing your everyday beauty essentials should
              feel simple, personal and enjoyable. Explore a thoughtfully presented collection of
              skincare, haircare and personal-care products, bringing trusted names and everyday
              favorites together in one place.
            </p>
            <Link
              href="/about"
              className="mt-[34px] inline-flex w-fit items-center border border-ink bg-cream px-8 py-4 text-xs font-semibold tracking-[0.2em] text-ink transition-colors hover:bg-ink hover:text-cream"
            >
              OUR STORY
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
