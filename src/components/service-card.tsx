import type { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
  href: string;
};

export function ServiceCard({
  icon,
  title,
  description,
  items,
  href,
}: ServiceCardProps) {
  const Icon = icon;

  return (
    <a
      href={href}
      className="card-surface group relative flex flex-col gap-7 rounded-3xl p-9 text-white transition hover:-translate-y-1"
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#4E2A4F]/70 to-[#2D1E2F]/70 text-white shadow-[0_20px_40px_rgba(78,42,79,0.55)] transition group-hover:scale-105">
        <Icon size={22} strokeWidth={1.5} />
      </span>
      <div className="space-y-3">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-base leading-relaxed text-white/75">{description}</p>
      </div>
      <ul className="flex flex-col gap-2.5 text-sm text-white/70">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-3 text-left transition group-hover:text-white"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-white/60 group-hover:bg-white" />
            {item}
          </li>
        ))}
      </ul>
      <span className="text-sm font-medium text-white/80 transition group-hover:text-white">
        Explore →
      </span>
    </a>
  );
}

