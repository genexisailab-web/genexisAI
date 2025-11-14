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
    <section className="relative flex min-h-[75vh] w-full items-center justify-center overflow-hidden px-6 py-20 text-white sm:px-10 md:min-h-[85vh] md:px-20 md:snap-center">
      <div className="absolute inset-0 -z-20 bg-plum-noise opacity-60" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.25),transparent_58%)]" />
      <div className="absolute -right-40 top-14 hidden h-[460px] w-[460px] animate-float-slow rounded-full bg-[#4E2A4F]/35 blur-[180px] md:block" />
      <div className="absolute -left-48 bottom-14 h-[340px] w-[340px] animate-float-slow rounded-full bg-[#2D1E2F]/38 blur-[150px]" />

      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center gap-8 px-2 text-center sm:px-4">
        {eyebrow ? (
          <span className="text-xs uppercase tracking-[0.5em] text-white/65">
            {eyebrow}
          </span>
        ) : null}
        <h1 className="text-[42px] font-semibold leading-tight sm:text-[56px] md:text-[64px]">
          {title}
        </h1>
        <p className="text-lg leading-relaxed text-white/80 sm:text-xl">
          {description}
        </p>
        {children}
      </div>
    </section>
  );
}

