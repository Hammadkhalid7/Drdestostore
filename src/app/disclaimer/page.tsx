import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

const SECTIONS = [
  {
    number: "01",
    heading: "GENERAL DISCLAIMER",
    body: 'Last Updated: August 29, 2026\n\nThe information provided on https://drdestastore.com/ (the "Website") is for general informational purposes only. All information on the Website is provided in good faith; however, drdestastore.com makes no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Website.\n\nUnder no circumstance shall drdestastore.com have any liability to you for any loss or damage of any kind incurred as a result of the use of the Website or reliance on any information provided on the Website. Your use of the Website and your reliance on any information on the Website is solely at your own risk.',
  },
  {
    number: "02",
    heading: "EXTERNAL LINKS DISCLAIMER",
    body: "The Website may contain links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by drdestastore.com. We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the Website.",
  },
  {
    number: "03",
    heading: "TESTIMONIALS DISCLAIMER",
    body: "The Website may contain testimonials by users of our products and/or services. These testimonials reflect the real-life experiences and opinions of such users. However, the experiences are personal to those particular users and may not necessarily be representative of all users of our products and/or services.",
  },
  {
    number: "04",
    heading: "ERRORS AND OMISSIONS DISCLAIMER",
    body: "The information given by drdestastore.com is for general guidance on matters of interest only. Even if drdestastore.com takes every precaution to ensure that the content of the Website is both current and accurate, errors can occur. Plus, given the changing nature of laws, rules, and regulations, there may be delays, omissions, or inaccuracies in the information contained on the Website.",
  },
  {
    number: "05",
    heading: "CONTACT US",
    body: "If you have any questions about this disclaimer, please contact us:\n\nEmail: Destamohammed23@gmail.com\n\nWebsite: https://drdestastore.com/\n\nCompany: drdestastore.com",
  },
];

export default function DisclaimerPage() {
  return (
    <div className="flex min-h-full flex-col bg-cream">
      <Navbar />
      <main className="flex-1">
        <Reveal className="mx-auto max-w-[1800px] px-6 pt-10 pb-10 sm:px-10">
          <p className="text-xs font-semibold tracking-[0.3em] text-gold">POLICIES &amp; INFORMATION</p>
          <h1 className="mt-4 font-display text-4xl text-ink sm:text-5xl">Disclaimer</h1>
          <p className="mt-4 max-w-xl text-base text-ink/60">
            Published policy wording from Dr Desta Store.
          </p>
        </Reveal>

        <div className="mx-auto max-w-[1800px] pb-20 pl-10 pr-6 sm:pl-20 sm:pr-10">
          <div className="border-t border-ink/10">
            {SECTIONS.map((section) => (
              <div
                key={section.number}
                className="grid grid-cols-1 gap-2 border-b border-ink/10 py-8 sm:grid-cols-[280px_1fr] sm:gap-10"
              >
                <p className="text-xs font-semibold tracking-[0.2em] text-ink/40">
                  {section.number}
                </p>
                <div className="max-w-2xl">
                  <h2 className="font-display text-3xl text-ink">{section.heading}</h2>
                  <div className="mt-4 space-y-4 text-base leading-relaxed text-ink/60">
                    {section.body.split("\n\n").map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
