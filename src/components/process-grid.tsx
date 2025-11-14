import type { LucideIcon } from "lucide-react";
import { FadeIn } from "@/components/fade-in";

type ProcessStep = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type ProcessGridProps = {
  steps: ProcessStep[];
};

export function ProcessGrid({ steps }: ProcessGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {steps.map((step, index) => {
        const Icon = step.icon;
        return (
          <FadeIn
            key={step.title}
            delay={0.08 * index}
            className="card-surface group relative flex flex-col gap-4 rounded-3xl p-8 text-white transition hover:-translate-y-1"
          >
            <div className="flex items-center justify-between">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#4E2A4F]/70 to-[#2D1E2F]/70 text-white shadow-[0_18px_36px_rgba(78,42,79,0.5)] transition group-hover:scale-105">
                <Icon size={22} strokeWidth={1.5} />
              </span>
              <span className="text-xs uppercase tracking-[0.42em] text-white/45">
                0{index + 1}
              </span>
            </div>
            <h3 className="text-xl font-semibold">{step.title}</h3>
            <p className="text-base leading-relaxed text-white/75">
              {step.description}
            </p>
          </FadeIn>
        );
      })}
    </div>
  );
}

