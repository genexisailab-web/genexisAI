import { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  actions,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left";
  const actionAlignment =
    align === "center" ? "justify-center" : "justify-start";

  return (
    <div className={`mx-auto flex w-full max-w-3xl flex-col gap-5 ${alignment}`}>
      {eyebrow ? (
        <span className="text-xs uppercase tracking-[0.45em] text-white/55">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="text-xl leading-relaxed text-white/80">{description}</p>
      ) : null}
      {actions ? (
        <div className={`flex gap-4 ${actionAlignment}`}>{actions}</div>
      ) : null}
    </div>
  );
}

