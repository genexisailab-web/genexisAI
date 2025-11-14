import Link from "next/link";
import { Button } from "./ui/button";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden rounded-[40px] border border-white/12 bg-gradient-to-br from-[#3A1C58]/85 via-[#1B0C2F]/92 to-[#080313]/96 px-10 py-16 text-white shadow-[0_40px_120px_rgba(8,4,20,0.55)] sm:px-16">
      <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#5D2C84]/35 blur-[150px]" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-[#251035]/45 blur-[160px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.16),_transparent_65%)]" />

      <div className="relative grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-6">
          <span className="text-xs uppercase tracking-[0.48em] text-white/70">
            Ready when you are
          </span>
          <h3 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Launch a high-converting digital presence in six weeks or less.
          </h3>
          <p className="text-lg leading-relaxed text-white/80">
            Book a discovery call and we’ll map the website, marketing, and advertising plays tailored to your next growth milestone.
          </p>
          <div className="flex flex-col items-start gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">Book a Strategy Call</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/portfolio">See our latest work</Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-5 rounded-3xl border border-white/15 bg-white/10 p-8 text-left backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.32em] text-white/60">
            What to expect
          </p>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
              90-day roadmap detailing design, content, and paid media priorities.
            </li>
            <li className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
              Dedicated senior squad reporting on momentum every single week.
            </li>
            <li className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
              Performance dashboards so you can monitor ROI in real-time.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

