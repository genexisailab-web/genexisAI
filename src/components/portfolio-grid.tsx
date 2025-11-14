type PortfolioItem = {
  title: string;
  summary: string;
  impact: string;
  href: string;
};

type PortfolioGridProps = {
  items: PortfolioItem[];
};

export function PortfolioGrid({ items }: PortfolioGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map((item) => (
        <a
          key={item.title}
          href={item.href}
          className="card-surface group relative flex flex-col gap-5 rounded-3xl p-9 text-white transition hover:-translate-y-1"
        >
          <div className="flex items-center justify-between text-white/60">
            <span className="text-xs uppercase tracking-[0.42em]">
              Case Study
            </span>
            <span className="text-sm transition group-hover:text-white">
              View →
            </span>
          </div>
          <h3 className="text-2xl font-semibold">{item.title}</h3>
          <p className="text-base text-white/75">{item.summary}</p>
          <p className="text-base font-medium text-white/80">{item.impact}</p>
        </a>
      ))}
    </div>
  );
}

