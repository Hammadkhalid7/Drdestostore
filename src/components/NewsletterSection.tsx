"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

export default function NewsletterSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="bg-cream-dark">
      <Reveal className="mx-auto max-w-[1800px] px-6 py-16 sm:px-10 lg:py-20">
        {submitted ? (
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-gold">LET&rsquo;S KEEP IN TOUCH</p>
            <p className="mt-4 font-display text-3xl text-ink">You&rsquo;re on the list. Thank you!</p>
            <p className="mt-3 text-sm text-ink/60">Keep an eye on your inbox for beauty updates.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] text-gold">LET&rsquo;S KEEP IN TOUCH</p>
              <h2 className="mt-4 font-display text-3xl leading-tight text-ink sm:text-4xl">
                A Little More Beauty in Your Inbox.
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink/60">
                Discover new arrivals, beauty favorites and the latest updates from Dr Desta Store.
              </p>
            </div>

            <div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="flex flex-col gap-4"
              >
                <div>
                  <label className="mb-1.5 block text-xs text-ink/60">Email address</label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    className="w-full border border-ink/15 bg-cream px-4 py-3 text-sm text-ink placeholder-ink/40 outline-none focus:border-ink"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-ink py-3.5 text-xs font-semibold tracking-[0.2em] text-cream transition-opacity hover:opacity-80"
                >
                  SUBSCRIBE
                </button>
              </form>
              <p className="mt-3 text-xs text-ink/40">
                By subscribing, you agree to receive store updates. Unsubscribe at any time.
              </p>
            </div>
          </div>
        )}
      </Reveal>
    </section>
  );
}
