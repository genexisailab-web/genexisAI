import Link from "next/link";
import { Hero } from "@/components/hero";
import { FadeIn } from "@/components/fade-in";
import { CtaBanner } from "@/components/cta-banner";
import {
  services,
  process,
  testimonials,
  portfolioHighlights,
} from "@/lib/content";

export default function Home() {
  const [primaryService, ...supportingServices] = services;
  const [featuredHighlight, ...supportingHighlights] = portfolioHighlights;
  const [featuredTestimonial, ...additionalTestimonials] = testimonials;

  const metrics = [
    {
      label: "Pipeline Generated",
      value: "5L+",
      detail: "Attributed revenue for clients in the last 12 months.",
    },
    {
      label: "Conversion Lift",
      value: "2.4x",
      detail: "Average improvement after redesign and CRO sprints.",
    },
    {
      label: "Campaign Velocity",
      value: "6 - 8  weeks",
      detail: "Time from discovery to launch for most web projects.",
    },
  ];

  const PrimaryServiceIcon = primaryService.icon;

  return (
    <>
      <Hero />

      <section
        id="services"
        className="relative py-16 sm:py-20 md:flex md:items-center md:justify-center md:snap-center md:py-24"
      >
        <FadeIn once={false} className="relative mx-auto flex w-full flex-col gap-6 px-4 sm:gap-8 sm:px-6 xl:px-20">
          <div className="max-w-2xl space-y-3 sm:space-y-4">
            <span className="text-xs uppercase tracking-[0.48em] text-white/55">
              Services
            </span>
            <h2 className="text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-[42px]">
              Build, optimize, and market the digital journey in one integrated team.
            </h2>
            <p className="text-sm leading-relaxed text-white/75 sm:text-base">
              Senior strategists, designers, editors, and growth leads collaborate in weekly sprints so every release compounds momentum across channels.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <article className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#311944]/85 via-[#1A0C2A]/88 to-[#090312]/92 p-6 text-white shadow-[0_28px_84px_rgba(8,3,20,0.45)] sm:rounded-[28px] sm:p-8">
              <div className="absolute -right-20 top-12 h-56 w-56 rounded-full bg-[#5B2C82]/30 blur-[130px]" />
              <div className="absolute -bottom-20 left-8 h-48 w-48 rounded-full bg-[#2B1340]/45 blur-[140px]" />
              <div className="relative flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl">
                    <PrimaryServiceIcon size={22} strokeWidth={1.4} />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold sm:text-[26px]">{primaryService.title}</h3>
                    <p className="text-xs uppercase tracking-[0.42em] text-white/55">
                      Flagship engagement
                    </p>
                  </div>
                </div>
                <p className="text-base leading-relaxed text-white/80">
                  {primaryService.description}
                </p>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {primaryService.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-white/75"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={primaryService.href}
                  className="mt-1.5 inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-white transition hover:text-white/70"
                >
                  Explore the full design workflow
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>

            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
              {supportingServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <article
                    key={service.id}
                    className="group relative overflow-hidden rounded-[24px] bg-white/5 p-6 text-white backdrop-blur-lg transition hover:bg-white/10"
                  >
                    <div className="absolute -right-16 top-1/2 h-36 w-36 -translate-y-1/2 rounded-full bg-[#4C2469]/30 blur-[100px] transition group-hover:opacity-90" />
                    <div className="relative flex flex-col gap-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl">
                            <Icon size={18} strokeWidth={1.4} />
                          </span>
                          <div>
                            <h3 className="text-lg font-semibold sm:text-xl">{service.title}</h3>
                            <p className="text-sm text-white/60">
                              {service.description}
                            </p>
                          </div>
                        </div>
                        <span className="text-xs font-semibold text-white/35 transition group-hover:text-white/75">
                          0{index + 2}
                        </span>
                      </div>
                      <ul className="space-y-1.5 text-[13px] text-white/70">
                        {service.items.slice(0, 3).map((item) => (
                          <li key={item} className="flex items-center gap-3">
                            <span className="h-1 w-5 rounded-full bg-white/30 transition group-hover:bg-white/60" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold tracking-wide text-white/70 transition hover:text-white"
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

      <section className="relative py-16 sm:py-20 md:flex md:min-h-screen md:items-center md:justify-center md:snap-center md:py-32">
        <FadeIn once={false} className="relative mx-auto w-full px-4 sm:px-6 xl:px-24">
          <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[#2F1650]/70 via-[#160921]/88 to-[#07030F]/95 p-8 sm:p-12 text-white shadow-[0_35px_120px_rgba(7,3,18,0.5)]">
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,_rgba(115,68,170,0.28),_transparent_65%)]" />
            <div className="pointer-events-none absolute -left-24 top-10 h-56 w-56 rounded-full bg-[#412268]/45 blur-[120px]" />

            <div className="relative grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div className="space-y-6">
                <span className="text-xs uppercase tracking-[0.52em] text-white/55">
                  Proof
                </span>
                <h2 className="text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
                  Growth metrics we deliver on repeat.
                </h2>
                <p className="text-sm leading-relaxed text-white/80 sm:text-base">
                  Every program launches with a measurement plan—so we see the wins unfolding in real time, iterate on momentum, and prove the ROI inside your dashboards.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {metrics.map((metric, index) => (
                  <div
                    key={metric.label}
                    className={`relative overflow-hidden rounded-3xl bg-white/[0.08] p-6 sm:p-8 backdrop-blur-xl transition ${
                      index === 0 ? "sm:col-span-2" : ""
                    }`}
                  >
                    <div className="absolute -right-16 top-6 h-32 w-32 rounded-full bg-white/10 blur-[80px]" />
                    <div className="relative space-y-4">
                      <span className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                        {metric.value}
                      </span>
                      <span className="block text-xs uppercase tracking-[0.45em] text-white/55">
                        {metric.label}
                      </span>
                      <p className="text-xs leading-relaxed text-white/70 sm:text-sm">
                        {metric.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="relative py-16 sm:py-20 md:flex md:min-h-screen md:items-center md:justify-center md:snap-center md:py-32">
        <FadeIn once={false} className="mx-auto w-full space-y-8 px-4 sm:space-y-12 sm:px-6 xl:px-24">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs uppercase tracking-[0.5em] text-white/55">
              Process
            </span>
            <h2 className="text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-4xl">
              A momentum engine that keeps compounding.
            </h2>
            <p className="text-sm leading-relaxed text-white/75 sm:text-base">
              We audit, design, and launch in agile waves—so strategy, execution, and optimization happen in parallel.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block lg:absolute lg:left-0 lg:top-1/2 lg:h-px lg:w-full lg:-translate-y-1/2 lg:bg-white/10" />
            <div className="grid gap-10 lg:grid-cols-3">
              {process.map((step, index) => {
                const Icon = step.icon;
                return (
                  <article
                    key={step.title}
                    className="group relative overflow-hidden rounded-[30px] bg-gradient-to-br from-[#22102F]/85 via-[#17091F]/90 to-[#0B0312]/92 p-6 sm:p-8 text-white shadow-[0_25px_80px_rgba(8,4,20,0.42)]"
                  >
                    <div className="absolute -top-20 right-12 text-8xl font-black text-white/5 transition group-hover:text-white/10">
                      {`0${index + 1}`}
                    </div>
                    <div className="relative flex flex-col gap-6">
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl">
                        <Icon size={22} strokeWidth={1.4} />
                      </span>
                      <h3 className="text-lg font-semibold leading-snug sm:text-xl md:text-2xl">{step.title}</h3>
                      <p className="text-sm leading-relaxed text-white/70 sm:text-base">
                        {step.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="relative py-16 sm:py-20 md:flex md:min-h-screen md:items-center md:justify-center md:snap-center md:py-32">
        <FadeIn once={false} className="mx-auto w-full space-y-8 px-4 sm:space-y-12 sm:px-6 xl:px-24">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl space-y-4">
              <span className="text-xs uppercase tracking-[0.48em] text-white/55">
                Highlights
              </span>
              <h2 className="text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-4xl">
                Recent launches driving measurable traction.
              </h2>
              <p className="text-sm leading-relaxed text-white/75 sm:text-base">
                From AI to finance and SaaS, we craft immersive stories that convert—and pair them with relentless growth programs.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 self-start rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.38em] text-white/65 transition hover:border-white/40 hover:text-white"
            >
              View all work
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
            <article className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-[#35174F]/80 via-[#1D0C2E]/88 to-[#090314]/95 p-6 sm:p-10 text-white shadow-[0_35px_100px_rgba(10,5,25,0.45)]">
              <div className="absolute inset-y-0 left-0 w-[55%] bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.18),_transparent_70%)]" />
              <div className="absolute -bottom-24 right-6 h-64 w-64 rounded-full bg-[#562C7A]/35 blur-[150px]" />
              <div className="relative flex h-full flex-col justify-between gap-10">
                <div className="space-y-3">
                  <span className="text-xs uppercase tracking-[0.45em] text-white/60">
                    Case Study
                  </span>
                  <h3 className="text-2xl font-semibold sm:text-3xl md:text-4xl">{featuredHighlight.title}</h3>
                  <p className="text-sm text-white/75 sm:text-base">{featuredHighlight.summary}</p>
                </div>
                <p className="text-sm font-medium text-white/85 sm:text-base">
                  {featuredHighlight.impact}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-white/50">
                  Read the full story
                </span>
              </div>
            </article>

            <div className="grid gap-6">
              {supportingHighlights.map((item) => (
              <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-3xl bg-white/[0.06] p-6 sm:p-8 text-white backdrop-blur-xl transition"
                >
                  <div className="absolute -right-16 top-0 h-40 w-40 rounded-full bg-[#4F266D]/25 blur-[90px] transition group-hover:opacity-90" />
                  <div className="relative flex flex-col gap-4">
                    <span className="text-xs uppercase tracking-[0.4em] text-white/55">
                      Case Study
                    </span>
                    <h3 className="text-xl font-semibold sm:text-2xl">{item.title}</h3>
                    <p className="text-xs text-white/70 sm:text-sm">{item.summary}</p>
                    <p className="text-sm font-medium text-white/80 sm:text-base">
                      {item.impact}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-white/50">
                      View outcome
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="relative py-16 sm:py-20 md:flex md:min-h-screen md:items-center md:justify-center md:snap-center md:py-32">
        <FadeIn once={false} className="mx-auto w-full space-y-8 px-4 sm:space-y-12 sm:px-6 xl:px-24">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs uppercase tracking-[0.5em] text-white/55">
              Testimonials
            </span>
            <h2 className="text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-4xl">
              Teams trust us to become an embedded partner.
            </h2>
            <p className="text-sm leading-relaxed text-white/75 sm:text-base">
              We plug into your workflows, extend your capabilities, and stay accountable to the metrics that matter most.
            </p>
          </div>

          <div className="grid gap-10 xl:grid-cols-[1.15fr_0.85fr]">
            <article className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-[#2D1444]/85 via-[#160823]/90 to-[#08020F]/95 p-6 sm:p-10 text-white shadow-[0_30px_110px_rgba(8,4,20,0.5)]">
              <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.18),_transparent_70%)]" />
              <div className="relative space-y-6">
                <p className="text-lg leading-relaxed text-white/85 sm:text-xl md:text-2xl">
                  "{featuredTestimonial.quote}"
                </p>
                <p className="text-sm uppercase tracking-[0.38em] text-white/55">
                  {featuredTestimonial.name} · {featuredTestimonial.role}
          </p>
        </div>
            </article>

            <div className="grid gap-6">
              {additionalTestimonials.map((testimonial) => (
                <article
                  key={testimonial.name}
                  className="relative overflow-hidden rounded-3xl bg-white/[0.06] p-6 sm:p-8 text-white backdrop-blur-xl transition hover:bg-white/[0.10]"
                >
                  <div className="absolute -right-12 top-6 h-32 w-32 rounded-full bg-[#4D266C]/25 blur-[90px]" />
                  <div className="relative space-y-4">
                    <p className="text-sm leading-relaxed text-white/80 sm:text-base">
                      "{testimonial.quote}"
                    </p>
                    <p className="text-sm uppercase tracking-[0.36em] text-white/50">
                      {testimonial.name} · {testimonial.role}
                    </p>
                  </div>
                </article>
              ))}
        </div>
    </div>
        </FadeIn>
      </section>

      <section className="relative py-16 sm:py-20 md:flex md:min-h-screen md:items-center md:justify-center md:snap-center md:py-32">
        <FadeIn once={false} className="mx-auto w-full px-4 sm:px-6 xl:px-24">
          <CtaBanner />
        </FadeIn>
      </section>
    </>
  );
}
