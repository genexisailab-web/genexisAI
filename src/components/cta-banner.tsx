import Link from "next/link";
import { Button } from "./ui/button";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#3A1C58]/85 via-[#1B0C2F]/92 to-[#080313]/96 px-6 py-12 text-white shadow-[0_40px_120px_rgba(8,4,20,0.55)] sm:rounded-3xl sm:px-10 sm:py-16 lg:rounded-[40px] lg:px-16">
      <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#5D2C84]/35 blur-[150px]" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-[#251035]/45 blur-[160px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.16),_transparent_65%)]" />

      <div className="relative grid gap-8 sm:gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12 lg:items-center">
        <div className="space-y-4 sm:space-y-6">
          <span className="text-xs uppercase tracking-[0.48em] text-white/70">
            Ready when you are
          </span>
          <h3 className="text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
            Launch a high-converting digital presence in six weeks or less.
          </h3>
          <p className="text-sm leading-relaxed text-white/80 sm:text-base md:text-lg">
            Book a discovery call and we'll map the website, marketing, and advertising plays tailored to your next growth milestone.
          </p>
          <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-start sm:gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/contact">Book a Strategy Call</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
              <Link href="/portfolio">See our latest work</Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-4 rounded-2xl bg-white/10 p-6 text-left backdrop-blur-xl sm:gap-5 sm:rounded-3xl sm:p-8">
          <p className="text-xs uppercase tracking-[0.32em] text-white/60 sm:text-sm">
            What to expect
          </p>
          <ul className="space-y-2.5 text-xs text-white/80 sm:space-y-3 sm:text-sm">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/60" />
              <span>90-day roadmap detailing design, content, and paid media priorities.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/60" />
              <span>Dedicated senior squad reporting on momentum every single week.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/60" />
              <span>Performance dashboards so you can monitor ROI in real-time.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

