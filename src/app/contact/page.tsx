"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

function ContactForm({ onSent }: { onSent: () => void }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSent();
      }}
      className="space-y-5"
    >
      <div>
        <label className="mb-1.5 block text-xs text-ink/60">Your name</label>
        <input
          type="text"
          placeholder="Your name"
          required
          className="w-full border border-ink/20 bg-transparent px-4 py-3 text-sm text-ink placeholder-ink/30 outline-none focus:border-ink"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-xs text-ink/60">Email address</label>
        <input
          type="email"
          placeholder="Email address"
          required
          className="w-full border border-ink/20 bg-transparent px-4 py-3 text-sm text-ink placeholder-ink/30 outline-none focus:border-ink"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-xs text-ink/60">Subject</label>
        <div className="relative">
          <select
            required
            defaultValue=""
            className="w-full appearance-none border border-ink/20 bg-transparent px-4 py-3 text-sm text-ink/60 outline-none focus:border-ink"
          >
            <option value="" disabled>
              Select an enquiry
            </option>
            <option value="product">Product enquiry</option>
            <option value="order">Order enquiry</option>
            <option value="shipping">Shipping &amp; returns</option>
            <option value="general">General enquiry</option>
          </select>
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink/50">
            â†“
          </span>
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-xs text-ink/60">Message</label>
        <textarea
          placeholder="How can we help?"
          required
          rows={6}
          className="w-full resize-none border border-ink/20 bg-transparent px-4 py-3 text-sm text-ink placeholder-ink/30 outline-none focus:border-ink"
        />
      </div>

      <p className="text-xs text-ink/40">
        By sending your message, you acknowledge our{" "}
        <Link href="/privacy-policy" className="underline hover:text-ink">
          Privacy Policy
        </Link>
        .
      </p>

      <button
        type="submit"
        className="w-full bg-ink py-4 text-xs font-semibold tracking-[0.2em] text-cream transition-opacity hover:opacity-80"
      >
        SEND MESSAGE
      </button>
    </form>
  );
}

function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs font-semibold tracking-[0.25em] text-gold">GET IN TOUCH</p>
      </div>

      <div className="space-y-1">
        <p className="text-lg font-semibold text-ink">+971 50 858 8350</p>
        <p className="text-lg font-semibold text-ink">Destamohammed23@gmail.com</p>
      </div>

      <div className="space-y-1 text-sm text-ink/60">
        <p>Ajman Al Karama, UAE</p>
        <p>Dubai, Ajman, United Arab Emirates</p>
      </div>

      <div className="space-y-1 text-sm text-ink/60">
        <p>
          <span className="text-ink/40">Mondayâ€“Friday</span>&nbsp;&nbsp;08:30â€“20:00
        </p>
        <p>
          <span className="text-ink/40">Saturdayâ€“Sunday</span>&nbsp;&nbsp;09:30â€“21:30
        </p>
      </div>

      <div className="text-sm text-ink/60">
        <p className="mb-1 text-xs text-ink/40">Follow along</p>
        <p>
          <a href="https://facebook.com" className="hover:text-ink">
            Facebook
          </a>{" "}
          /{" "}
          <a href="https://tiktok.com" className="hover:text-ink">
            TikTok
          </a>{" "}
          /{" "}
          <a href="https://youtube.com" className="hover:text-ink">
            YouTube
          </a>
        </p>
      </div>
    </div>
  );
}

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="flex min-h-full flex-col bg-cream">
      <Navbar />
      <main className="flex-1">
        {!sent ? (
          <>
            {/* Intro */}
            <Reveal className="mx-auto max-w-[1800px] px-6 pt-10 pb-10 sm:px-10">
              <p className="text-xs font-semibold tracking-[0.3em] text-gold">HERE TO HELP</p>
              <h1 className="mt-4 font-display text-4xl text-ink sm:text-5xl">
                Let's talk beauty.
              </h1>
              <p className="mt-4 max-w-xl text-base text-ink/60">
                Questions about a product or your order? Our team is here to help.
              </p>
            </Reveal>

            {/* Two-column layout */}
            <div className="mx-auto max-w-[1800px] px-6 pb-20 sm:px-10">
              <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
                <ContactInfo />
                <ContactForm onSent={() => setSent(true)} />
              </div>
            </div>
          </>
        ) : (
          /* Sent confirmation */
          <Reveal className="mx-auto max-w-[1800px] px-6 py-16 sm:px-10">
            <p className="text-xs font-semibold tracking-[0.3em] text-gold">THANK YOU</p>
            <h1 className="mt-4 font-display text-4xl text-ink sm:text-5xl">
              Your message has been sent.
            </h1>
            <p className="mt-4 max-w-xl text-base text-ink/60">
              Thank you for reaching out. We'll be in touch with you shortly.
            </p>

            <div className="mt-10 space-y-1">
              <p className="text-lg font-semibold text-ink">+971 50 858 8350</p>
              <p className="text-lg font-semibold text-ink">Destamohammed23@gmail.com</p>
            </div>

            <button
              type="button"
              onClick={() => setSent(false)}
              className="mt-10 inline-flex items-center border border-ink px-8 py-4 text-xs font-semibold tracking-[0.2em] text-ink transition-colors hover:bg-ink hover:text-cream"
            >
              BACK TO CONTACT
            </button>
          </Reveal>
        )}
      </main>
      <Footer />
    </div>
  );
}

