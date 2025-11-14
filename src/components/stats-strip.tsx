type Stat = {
  label: string;
  value: string;
  detail?: string;
};

type StatsStripProps = {
  stats: Stat[];
};

export function StatsStrip({ stats }: StatsStripProps) {
  return (
    <div className="card-surface overflow-hidden rounded-3xl">
      <div className="grid sm:grid-cols-3 sm:divide-x sm:divide-white/10">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center gap-3 px-10 py-10 text-center text-white sm:px-12"
          >
            <span className="text-4xl font-semibold">
              {stat.value}
            </span>
            <span className="text-xs uppercase tracking-[0.42em] text-white/55">
              {stat.label}
            </span>
            {stat.detail ? (
              <p className="text-sm leading-snug text-white/70">
                {stat.detail}
              </p>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

