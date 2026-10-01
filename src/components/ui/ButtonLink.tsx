import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

type Variant = "primary" | "outline";

interface ButtonLinkProps {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-accent-ink border-accent hover:bg-ink hover:text-paper hover:border-ink",
  outline:
    "border-ink/40 text-ink hover:bg-ink hover:text-paper hover:border-ink",
};

/* Every CTA on the page navigates somewhere, so this renders an <a>; true <button>s live in the navbar. */
export function ButtonLink({
  href,
  variant = "primary",
  children,
  className,
  onClick,
}: ButtonLinkProps) {
  const isExternal = href.startsWith("http");
  const Icon = isExternal ? ArrowUpRight : ArrowRight;

  return (
    <a
      href={href}
      onClick={onClick}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "group inline-flex min-h-12 whitespace-nowrap items-center justify-center gap-2.5 border px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-300",
        variants[variant],
        className,
      )}
    >
      {children}
      <Icon
        aria-hidden="true"
        className={cn(
          "size-4 transition-transform duration-300",
          isExternal
            ? "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            : "group-hover:translate-x-1",
        )}
      />
    </a>
  );
}
