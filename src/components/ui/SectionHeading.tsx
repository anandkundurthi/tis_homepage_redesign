import type { ReactNode } from "react";
import { cn } from "@/utils/cn";
import { Reveal } from "@/components/animation/Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal className={cn("max-w-2xl", className)}>
      <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-emphasis">
        <span aria-hidden="true" className="h-px w-8 bg-current" />
        {eyebrow}
      </p>
      <h2 className="font-display text-[clamp(2rem,4.6vw,3.5rem)] font-normal leading-[1.08] tracking-tight text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          {description}
        </p>
      )}
    </Reveal>
  );
}
