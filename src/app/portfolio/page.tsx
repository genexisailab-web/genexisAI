import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { FadeIn } from "@/components/fade-in";
import { portfolioHighlights } from "@/lib/content";

const caseStudies = [
  {
    id: "brightwave",
    title: "Brightwave Labs",
    challenge:
      "Fragmented messaging and slow-loading site led to stalled enterprise pipeline.",
    solution:
      "Rebuilt the experience with a modular design system, refined narrative, and conversion-focused landing pages.",
    result: [
      "214% increase in qualified demo requests",
      "38% faster time-on-page with improved performance",
      "Automated nurture sequences driving 16% more SQLs",
    ],
  },
  {
    id: "venture-north",
    title: "Venture North",
    challenge:
      "Needed to modernize brand presence to attract investors and founders in a competitive landscape.",
    solution:
      "Crafted a cinematic site, produced editorial thought leadership, and launched a targeted paid social program.",
    result: [
      "3.2x lift in inbound investor inquiries",
      "Portfolio submissions up 190% quarter over quarter",
      "Cut cost-per-lead by 47% across paid channels",
    ],
  },
  {
    id: "sona-ai",
    title: "Sona AI",
    challenge:
      "Low feature adoption and high churn due to unclear positioning and onboarding flows.",
    solution:
      "Unified product messaging, created interactive demos, and ran lifecycle campaigns triggered by in-app behavior.",
    result: [
      "Churn reduced by 18% within two quarters",
      "Upsell revenue increased 2.4x",
      "Adoption of flagship features rose to 71%",
    ],
  },
];

export default function PortfolioPage() {
  const [featuredHighlight, ...supportingHighlights] = portfolioHighlights;

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Digital experiences built to perform."
        description="We collaborate with ambitious brands to launch immersive websites, sharp content, and efficient growth programs that compound over time."
      />

      <section className="relative py-16 sm:py-20 md:flex md:items-center md:justify-center md:snap-center md:py-24">
        <FadeIn once={false} className="relative mx-auto w-full space-y-8 px-4 sm:space-y-12 sm:px-6 xl:px-20">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl space-y-4">
              <span className="text-xs uppercase tracking-[0.48em] text-white/55">
                Highlights
              </span>
              <h2 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
                Select launches that pair story, polish, and measurable impact.
              </h2>
              <p className="text-lg leading-relaxed text-white/75">
                These flagship collaborations showcase the blend of experience design, content engineering, and always-on growth orchestration we bring to every engagement.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 self-start rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.36em] text-white/65 transition hover:border-white/40 hover:text-white"
            >
              Book a walkthrough
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="grid gap-8 xl:grid-cols-[1.12fr_0.88fr]">
            <article className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-[#311944]/80 via-[#1A0C2A]/88 to-[#090312]/96 p-6 sm:p-10 text-white shadow-[0_38px_120px_rgba(8,3,20,0.45)]">
              <div className="absolute inset-y-0 left-0 w-[60%] bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.16),_transparent_70%)]" />
              <div className="absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-[#562C7A]/32 blur-[150px]" />
              <div className="relative flex h-full flex-col justify-between gap-8">
                <div className="space-y-3">
                  <span className="text-xs uppercase tracking-[0.45em] text-white/55">
                    Case Study
                  </span>
                  <h3 className="text-4xl font-semibold leading-tight">
                    {featuredHighlight.title}
                  </h3>
                  <p className="text-lg text-white/80">{featuredHighlight.summary}</p>
                </div>
                <p className="text-base font-medium text-white/85">
                  {featuredHighlight.impact}
                </p>
                <Link
                  href={featuredHighlight.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-white/75 transition hover:text-white"
                >
                  Explore transformation
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>

            <div className="grid gap-6">
              {supportingHighlights.map((item, index) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group relative overflow-hidden rounded-[28px] bg-white/[0.06] p-6 sm:p-8 text-white backdrop-blur-xl transition hover:bg-white/[0.10]"
                >
                  <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,_rgba(80,40,130,0.24),_transparent_70%)] opacity-60 transition group-hover:opacity-100" />
                  <div className="relative flex flex-col gap-4">
                    <div className="flex items-center justify-between text-white/55">
                      <span className="text-xs uppercase tracking-[0.4em]">Case Study</span>
                      <span className="text-xs font-semibold text-white/45">
                        0{index + 2}
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                    <p className="text-sm text-white/70">{item.summary}</p>
                    <p className="text-base font-medium text-white/80">
                      {item.impact}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-white/70 transition group-hover:text-white">
                      View outcome
                      <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="relative py-16 md:flex md:items-center md:justify-center md:snap-center md:py-24">
        <FadeIn once={false} className="mx-auto w-full space-y-12 px-6 sm:px-10 xl:px-20">
          <SectionHeading
            eyebrow="Case Studies"
            title="How we partner with teams to create momentum."
            description="Each engagement is tailored, yet the rhythm stays consistent: align the story, elevate the experience, and light up the growth loop."
          />
          <div className="space-y-10">
            {caseStudies.map((cs, index) => (
              <FadeIn key={cs.id} delay={0.08 * index} once={false}>
                <article
                  id={cs.id}
                  className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#241134]/88 via-[#15091F]/92 to-[#090212]/96 p-6 sm:p-10 text-white shadow-[0_28px_90px_rgba(7,3,18,0.45)]"
                >
                  <div className="absolute -top-24 right-12 text-7xl font-black uppercase tracking-[0.18em] text-white/5">
                    0{index + 1}
                  </div>
                  <div className="relative grid gap-8 lg:grid-cols-[0.55fr_1fr] lg:items-center">
                    <div className="space-y-5">
                      <span className="text-xs uppercase tracking-[0.4em] text-white/55">
                        Case Study
                      </span>
                      <h3 className="text-3xl font-semibold leading-tight">{cs.title}</h3>
                      <p className="text-base leading-relaxed text-white/75">
                        {cs.challenge}
                      </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-3 text-white/75">
                        <h4 className="text-sm uppercase tracking-[0.34em] text-white/45">
                          Solution
                        </h4>
                        <p className="text-sm leading-relaxed sm:text-base">
                          {cs.solution}
                        </p>
                      </div>
                      <div className="space-y-3 text-white/80">
                        <h4 className="text-sm uppercase tracking-[0.34em] text-white/45">
                          Key Results
                        </h4>
                        <ul className="space-y-3 text-sm sm:text-base">
                          {cs.result.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/65" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </section>

      <section className="relative py-16 md:flex md:items-center md:justify-center md:snap-center md:py-24">
        <FadeIn once={false} className="mx-auto w-full space-y-12 px-6 sm:px-10 xl:px-20">
          <SectionHeading
            eyebrow="Impact"
            title="Outcomes we’re trusted to deliver."
            description="These metrics surface in every partnership: speed to launch, clarity across touchpoints, and compounding revenue influence."
          />
          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#2E1550]/78 via-[#180A26]/92 to-[#090214]/96 p-6 sm:p-10 text-white shadow-[0_32px_110px_rgba(8,4,20,0.48)]">
            <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,_rgba(115,68,170,0.22),_transparent_70%)]" />
            <div className="relative grid gap-8 sm:grid-cols-3">
              {[
                {
                  label: "Faster Launches",
                  value: "5.8 weeks",
                  detail:
                    "Average timeline from kickoff to go-live across engagements.",
                },
                {
                  label: "Revenue Influence",
                  value: "$8.4M",
                  detail: "Average ARR influenced per portfolio client annually.",
                },
                {
                  label: "Retention",
                  value: "92%",
                  detail: "Client retention rate over the past 24 months.",
                },
              ].map((stat) => (
                <div key={stat.label} className="space-y-4">
                  <span className="text-5xl font-semibold tracking-tight">
                    {stat.value}
                  </span>
                  <span className="block text-xs uppercase tracking-[0.42em] text-white/55">
                    {stat.label}
                  </span>
                  <p className="text-sm leading-relaxed text-white/70">
                    {stat.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}

