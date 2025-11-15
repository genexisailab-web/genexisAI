import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ProcessGrid } from "@/components/process-grid";
import { FadeIn } from "@/components/fade-in";
import { services, process } from "@/lib/content";

const packages = [
  {
    title: "Launch & Scale",
    price: "From $9K / month",
    features: [
      "Complete website redesign or net-new build",
      "Weekly content editing and optimization",
      "Always-on campaign management",
      "Monthly experimentation roadmap",
    ],
  },
  {
    title: "Growth Partner",
    price: "From $5K / month",
    features: [
      "Quarterly design sprints & CRO tests",
      "Content refresh and governance",
      "Paid media strategy & execution",
      "Analytics, dashboards & reporting",
    ],
  },
];

export default function ServicesPage() {
  const [primaryService, ...supportingServices] = services;

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="One partner for the entire digital journey."
        description="From first impression to ongoing optimization, Genexis is your embedded team for experience design, meticulous content, and campaigns that scale."
      />

      <section className="relative py-16 sm:py-20 md:flex md:items-center md:justify-center md:snap-center md:py-24">
        <FadeIn once={false} className="relative mx-auto w-full space-y-8 px-4 sm:space-y-12 sm:px-6 xl:px-20">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl space-y-4">
              <span className="text-xs uppercase tracking-[0.48em] text-white/55">
                Capabilities
              </span>
              <h2 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
                Flexible, embedded teams aligned to your growth goals.
              </h2>
              <p className="text-lg leading-relaxed text-white/75">
                Choose the blend of strategy, design, content, and acquisition expertise you need. We plug into your workflows and stay accountable to the same metrics you do.
              </p>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 self-start rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.36em] text-white/65 transition hover:border-white/40 hover:text-white"
            >
              See work in action
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="grid gap-8 xl:grid-cols-[1.12fr_0.88fr]">
            <article className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-[#311944]/82 via-[#1A0C2A]/88 to-[#080213]/95 p-6 sm:p-10 text-white shadow-[0_38px_120px_rgba(8,3,20,0.45)]">
              <div className="absolute inset-y-0 left-0 w-1/2 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.18),_transparent_70%)]" />
              <div className="absolute -bottom-24 right-0 h-60 w-60 rounded-full bg-[#562C7A]/35 blur-[140px]" />
              <div className="relative flex h-full flex-col justify-between gap-8">
                <div className="space-y-4">
                  <span className="text-xs uppercase tracking-[0.42em] text-white/55">
                    Flagship engagement
                  </span>
                  <h3 className="text-3xl font-semibold sm:text-4xl">
                    {primaryService.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-white/80">
                    {primaryService.description}
                  </p>
                </div>
                <ul className="grid gap-3 sm:grid-cols-2 text-sm text-white/75">
                  {primaryService.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={primaryService.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-white/80 transition hover:text-white"
                >
                  Explore the full workflow
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>

            <div className="grid gap-6 sm:grid-cols-2 sm:gap-5">
              {supportingServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <article
                    key={service.id}
                    className="group relative overflow-hidden rounded-[28px] bg-white/[0.06] p-6 sm:p-8 text-white backdrop-blur-xl transition hover:bg-white/[0.10]"
                  >
                    <div className="absolute -right-14 top-1/2 h-36 w-36 -translate-y-1/2 rounded-full bg-[#4C2469]/28 blur-[100px] opacity-80 transition group-hover:opacity-100" />
                    <div className="relative flex flex-col gap-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl">
                            <Icon size={20} strokeWidth={1.4} />
                          </span>
                          <div>
                            <h3 className="text-lg font-semibold text-white sm:text-xl">
                              {service.title}
                            </h3>
                            <p className="text-sm text-white/60">
                              {service.description}
                            </p>
                          </div>
                        </div>
                        <span className="text-xs font-semibold text-white/40 transition group-hover:text-white/75">
                          0{index + 2}
                        </span>
                      </div>
                      <ul className="space-y-2 text-[13px] text-white/70">
                        {service.items.slice(0, 3).map((item) => (
                          <li key={item} className="flex items-center gap-3">
                            <span className="h-1 w-5 rounded-full bg-white/30 transition group-hover:bg-white/60" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-white/70 transition group-hover:text-white"
                      >
                        View playbook
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="relative py-16 md:flex md:items-center md:justify-center md:snap-center md:py-24">
        <FadeIn once={false} className="mx-auto w-full space-y-12 px-6 sm:px-10 xl:px-20">
          <SectionHeading
            eyebrow="Working Together"
            title="Engagement models built around measurable outcomes."
            description="Every partnership begins with a strategy sprint, then operates in high-impact cycles that ship value weekly."
          />
          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#2F1550]/80 via-[#170A26]/90 to-[#090214]/96 p-6 sm:p-10 text-white shadow-[0_32px_110px_rgba(8,4,20,0.48)]">
            <div className="absolute inset-x-0 top-0 h-1/2 bg-[radial-gradient(circle_at_top,_rgba(120,62,160,0.24),_transparent_70%)]" />
            <div className="relative grid gap-10 lg:grid-cols-2">
              {packages.map((pkg) => (
                <div key={pkg.title} className="space-y-5">
                  <div className="space-y-2">
                    <span className="text-xs uppercase tracking-[0.42em] text-white/55">
                      {pkg.title}
                    </span>
                    <p className="text-3xl font-semibold">{pkg.price}</p>
                  </div>
                  <ul className="space-y-3 text-sm text-white/75">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/70" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="relative py-16 md:flex md:items-center md:justify-center md:snap-center md:py-24">
        <FadeIn once={false} className="mx-auto w-full space-y-12 px-6 sm:px-10 xl:px-20">
          <SectionHeading
            eyebrow="Process"
            title="Discovery to launch in six weeks."
            description="Every pod blends strategy, design, content, and growth so milestones stack quickly and stakeholders stay aligned."
          />
          <ProcessGrid steps={process} />
        </FadeIn>
      </section>

      <section className="relative py-16 md:flex md:items-center md:justify-center md:snap-center md:py-24">
        <FadeIn once={false} className="mx-auto w-full space-y-12 px-6 sm:px-10 xl:px-20">
          <SectionHeading
            eyebrow="Impact"
            title="Every engagement is measured."
            description="We tie design, content, and campaign initiatives to the metrics your leadership cares about."
          />
          <div className="relative overflow-hidden rounded-[32px] border border-white/12 bg-gradient-to-br from-[#2E1450]/78 via-[#170A26]/90 to-[#090214]/96 p-12 text-white shadow-[0_32px_110px_rgba(8,4,20,0.48)]">
            <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,_rgba(115,68,170,0.22),_transparent_70%)]" />
            <div className="relative grid gap-8 sm:grid-cols-3">
              {[
                {
                  label: "Qualified Leads",
                  value: "+186%",
                  detail: "Median increase for Genexis redesign engagements.",
                },
                {
                  label: "Ad ROI",
                  value: "4.1x",
                  detail: "Average return across integrated paid media programs.",
                },
                {
                  label: "Content Velocity",
                  value: "42 pieces",
                  detail: "Average monthly cadence we manage across clients.",
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

