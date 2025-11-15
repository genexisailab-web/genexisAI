import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: PageHeroProps) {
  return (
    <section className="relative flex min-h-[60vh] w-full items-center justify-center overflow-hidden bg-obsidian-plum-950 py-16 text-white sm:min-h-[70vh] sm:py-20 md:min-h-[85vh] md:snap-center">
      <div className="absolute inset-0 -z-20 bg-plum-noise opacity-60" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.25),transparent_58%)]" />
      <div className="absolute -right-40 top-14 hidden h-[460px] w-[460px] animate-float-slow rounded-full bg-[#4E2A4F]/35 blur-[180px] md:block" />
      <div className="absolute -left-32 bottom-14 h-[280px] w-[280px] animate-float-slow rounded-full bg-[#2D1E2F]/38 blur-[120px] sm:-left-48 sm:h-[340px] sm:w-[340px] sm:blur-[150px]" />

      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center gap-6 px-4 text-center sm:gap-8 sm:px-6">
        {eyebrow ? (
          <span className="text-xs uppercase tracking-[0.5em] text-white/65">
            {eyebrow}
          </span>
        ) : null}
        <h1 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:text-[64px]">
          {title}
        </h1>
        <p className="text-base leading-relaxed text-white/80 sm:text-lg md:text-xl">
          {description}
        </p>
        {children}
      </div>
    </section>
  );
}

