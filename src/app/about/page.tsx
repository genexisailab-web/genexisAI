import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ProcessGrid } from "@/components/process-grid";
import { process } from "@/lib/content";
import { FadeIn } from "@/components/fade-in";

const principles = [
  {
    title: "Design with direction",
    copy: "Every pixel and every word supports a measurable business outcome. We pair elevated aesthetics with journey mapping and CRO insights.",
  },
  {
    title: "Operate as one team",
    copy: "We embed with your marketing, product, and sales leads, integrating into existing workflows to accelerate impact without adding noise.",
  },
  {
    title: "Iterate with data",
    copy: "Insights fuel our roadmaps. From heatmaps to attribution, we test relentlessly and adapt quickly to keep momentum high.",
  },
];

const leadership = [
  {
    name: "Harshil Ninama",
    title: "Founder & Creative Director",
    bio: "Leads experience design, UX strategy, and brand storytelling. Previously shaped digital platforms for scale-ups in SaaS, fintech, and consumer tech.",
  },
  {
    name: "Aman Kanojiya",
    title: "CEO & CTO",
    bio: "Leads both strategic business vision and technical innovation, overseeing operations, partnerships, and technology infrastructure. Combines executive leadership with hands-on technical expertise to scale the agency while delivering cutting-edge solutions.",
  },
  {
    name: "Shehzad Shaikh",
    title: "AI and Automation Lead",
    bio: "Architects AI-powered solutions and automation systems to streamline workflows and enhance efficiency. Specializes in implementing intelligent technologies that transform business processes.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="An agency built for growth operators."
        description="Genexsis combines conversion-first design, editorial rigor, and full-funnel acquisition to help ambitious teams capture opportunity faster."
      />

      <section className="relative py-16 md:flex md:items-center md:justify-center md:snap-center md:py-24">
        <FadeIn once={false} className="relative mx-auto w-full space-y-12 px-6 sm:px-10 xl:px-20">
          <SectionHeading
            eyebrow="Principles"
            title="How we deliver meaningful change."
            description="Our framework is simple: design brilliantly, operate seamlessly, and iterate with relentless curiosity."
          />

          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <article className="relative overflow-hidden rounded-[36px] border border-white/12 bg-gradient-to-br from-[#321844]/82 via-[#1A0C2A]/90 to-[#090214]/96 p-12 text-white shadow-[0_36px_120px_rgba(8,4,20,0.45)]">
              <div className="absolute inset-y-0 left-0 w-[60%] bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.18),_transparent_70%)]" />
              <div className="absolute -bottom-24 right-0 h-60 w-60 rounded-full bg-[#552C7A]/32 blur-[150px]" />
              <div className="relative space-y-6">
                <span className="text-xs uppercase tracking-[0.45em] text-white/55">
                  Operating system
                </span>
                <h3 className="text-4xl font-semibold leading-tight">
                  Design with direction. Operate as one team. Iterate with data.
                </h3>
                <p className="text-lg leading-relaxed text-white/80">
                  Every engagement pairs strategic clarity with relentless execution. We embed alongside marketing, product, and sales leaders so momentum compounds week over week.
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-white/80 transition hover:text-white"
                >
                  See how teams plug us in
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>

            <div className="grid gap-6">
              {principles.map((principle, index) => (
                <div
                  key={principle.title}
                  className="group relative overflow-hidden rounded-[28px] border border-white/12 bg-white/[0.06] p-8 text-white backdrop-blur-xl transition hover:border-white/25"
                >
                  <div className="absolute -right-14 top-1/2 h-36 w-36 -translate-y-1/2 rounded-full bg-[#4C2469]/26 blur-[100px] opacity-80 transition group-hover:opacity-100" />
                  <div className="relative space-y-3">
                    <span className="text-xs uppercase tracking-[0.34em] text-white/55">
                      0{index + 1}
                    </span>
                    <h3 className="text-xl font-semibold text-white sm:text-2xl">
                      {principle.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/75 sm:text-base">
                      {principle.copy}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="relative py-16 md:flex md:items-center md:justify-center md:snap-center md:py-24">
        <FadeIn once={false} className="mx-auto w-full space-y-12 px-6 sm:px-10 xl:px-20">
          <SectionHeading
            eyebrow="Leadership"
            title="A seasoned crew of designers, editors, strategists, and analysts."
            description="Our core team draws from agency, startup, and in-house experience across marketing, design, and growth."
          />
          <div className="space-y-10">
            {leadership.map((leader, index) => (
              <FadeIn key={leader.name} delay={0.08 * index} once={false}>
                <article className="relative overflow-hidden rounded-[32px] border border-white/12 bg-gradient-to-br from-[#241134]/88 via-[#150920]/92 to-[#090213]/96 p-10 text-white shadow-[0_28px_90px_rgba(8,4,20,0.45)]">
                  <div className="absolute -top-24 right-12 text-7xl font-black uppercase tracking-[0.2em] text-white/6">
                    0{index + 1}
                  </div>
                  <div className="relative grid gap-8 lg:grid-cols-[0.5fr_1fr] lg:items-center">
                    <div className="space-y-3">
                      <h3 className="text-3xl font-semibold leading-tight">{leader.name}</h3>
                      <p className="text-sm uppercase tracking-[0.32em] text-white/55">
                        {leader.title}
                      </p>
                    </div>
                    <p className="text-base leading-relaxed text-white/75">
                      {leader.bio}
                    </p>
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
            eyebrow="Approach"
            title="Strategy, execution, and optimization without silos."
            description="We assemble cross-functional pods that move fast and stay aligned through weekly rituals."
          />
          <ProcessGrid steps={process} />
        </FadeIn>
      </section>

      <section className="relative py-16 md:flex md:items-center md:justify-center md:snap-center md:py-24">
        <FadeIn once={false} className="mx-auto w-full space-y-12 px-6 sm:px-10 xl:px-20">
          <SectionHeading
            eyebrow="By the Numbers"
            title="Trusted by teams who treat growth as a discipline."
            description="We deliver steady, compound wins by embedding into your operations."
          />
          <div className="relative overflow-hidden rounded-[32px] border border-white/12 bg-gradient-to-br from-[#2F1550]/78 via-[#170A26]/90 to-[#090214]/96 p-12 text-white shadow-[0_32px_110px_rgba(8,4,20,0.48)]">
            <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,_rgba(115,68,170,0.22),_transparent_70%)]" />
            <div className="relative grid gap-8 sm:grid-cols-3">
              {[
                {
                  label: "Clients served",
                  value: "120+",
                  detail: "Across SaaS, AI, finance, and modern commerce brands.",
                },
                {
                  label: "Specialists",
                  value: "35",
                  detail: "Strategists, designers, developers, analysts, and editors.",
                },
                {
                  label: "Avg. partnership",
                  value: "18 months",
                  detail: "We invest long-term, evolving with your roadmap.",
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

