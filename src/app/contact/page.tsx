import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";
import { FadeIn } from "@/components/fade-in";
import Link from "next/link";

const faqs = [
  {
    question: "What engagement models do you offer?",
    answer:
      "Most teams hire us on a monthly retainer for end-to-end growth support. We also offer project-based engagements for launches or targeted initiatives.",
  },
  {
    question: "How soon can we start?",
    answer:
      "Discovery calls can happen within a week. Project kickoffs typically begin 2–3 weeks after signing so we can assemble the right team.",
  },
  {
    question: "Do you work with in-house teams?",
    answer:
      "Absolutely. We integrate with your marketing, product, and sales teams, providing specialized expertise and execution capacity.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Book a strategy call to map your next growth chapter."
        description="Tell us where you want to go. We’ll bring the playbook, team, and execution to get you there."
      />

      <section className="relative py-16 sm:py-20 md:flex md:items-center md:justify-center md:snap-center md:py-24">
        <FadeIn once={false} className="mx-auto w-full space-y-8 px-4 sm:space-y-12 sm:px-6 xl:px-20">
          <SectionHeading
            eyebrow="Get in touch"
            title="Tell us where you’re headed—we’ll map the path."
            description="We’ll audit your current presence, surface quick wins, and outline the first 90-day sprint so momentum starts immediately."
          />

          <div className="grid gap-10 xl:grid-cols-[1.1fr_0.9fr]">
            <article className="relative overflow-visible rounded-none bg-transparent p-0 text-white sm:overflow-hidden sm:rounded-[36px] sm:bg-gradient-to-br sm:from-[#311944]/82 sm:via-[#1A0C2A]/90 sm:to-[#090214]/96 sm:p-10 sm:shadow-[0_38px_120px_rgba(8,4,20,0.45)]">
              <div className="hidden sm:block absolute inset-y-0 left-0 w-[55%] bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.18),_transparent_70%)]" />
              <div className="hidden sm:block absolute -bottom-24 right-0 h-60 w-60 rounded-full bg-[#562C7A]/32 blur-[150px]" />
              <div className="relative space-y-8 sm:space-y-8 px-0 sm:px-0">
                <div className="space-y-3">
                  <span className="text-xs uppercase tracking-[0.42em] text-white/55">
                    Strategy call
                  </span>
                  <h3 className="text-3xl font-semibold leading-tight sm:text-4xl">
                    Book a 45-minute session with our Team.
                  </h3>
                  <p className="text-lg leading-relaxed text-white/80">
                    We'll align on goals, audience, and current stack. You'll leave with prioritized plays and clarity on how Genexis will plug in alongside your team.
                  </p>
                </div>
                <ContactForm />
                <p className="text-sm text-white/55">
                  Prefer email? <a href="mailto:genexis.ailab@gmail.com" className="text-white hover:text-white/80">genexis.ailab@gmail.com</a>
                </p>
              </div>
            </article>

            <aside className="space-y-8">
              <div className="relative overflow-hidden rounded-[28px] bg-white/[0.06] p-6 sm:p-8 text-white backdrop-blur-xl">
                <div className="absolute -right-16 top-1/2 h-36 w-36 -translate-y-1/2 rounded-full bg-[#4C2469]/28 blur-[100px]" />
                <div className="relative space-y-4">
                  <span className="text-xs uppercase tracking-[0.42em] text-white/60">
                    Availability
                  </span>
                  <p className="text-lg leading-relaxed text-white/75">
                    We partner with teams across IST Kickoffs typically begin within 2–3 weeks of signing so we can assemble the right pod.
                  </p>
                  <div className="space-y-2 text-sm text-white/70">
                    <Link href="tel:+916354783970" className="block transition hover:text-white">
                      +91-6354783970
                    </Link>
                    <Link href="mailto:genexis.ailab@gmail.com" className="block transition hover:text-white">
                    genexis.ailab@gmail.com
                    </Link>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[28px] border border-white/12 bg-white/[0.04] p-8 text-white backdrop-blur-xl">
                <div className="absolute -right-14 top-1/2 h-36 w-36 -translate-y-1/2 rounded-full bg-[#45205F]/26 blur-[100px]" />
                <div className="relative space-y-5">
                  <span className="text-xs uppercase tracking-[0.42em] text-white/60">
                    FAQs
                  </span>
                  <div className="space-y-5 text-sm text-white/75">
                    {faqs.map((faq) => (
                      <div key={faq.question} className="space-y-2">
                        <p className="text-base font-medium text-white/85">
                          {faq.question}
                        </p>
                        <p className="leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </FadeIn>
      </section>

    </>
  );
}

