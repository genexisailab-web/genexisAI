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
    <div className={`mx-auto flex w-full max-w-3xl flex-col gap-4 sm:gap-5 ${alignment}`}>
      {eyebrow ? (
        <span className="text-xs uppercase tracking-[0.45em] text-white/55">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-relaxed text-white/80 sm:text-lg md:text-xl">{description}</p>
      ) : null}
      {actions ? (
        <div className={`flex flex-col gap-3 sm:flex-row sm:gap-4 ${actionAlignment}`}>{actions}</div>
      ) : null}
    </div>
  );
}

