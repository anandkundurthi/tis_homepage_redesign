import { images } from "@/data/images";
import { cn } from "@/utils/cn";

interface SchoolLogoProps {
  variant?: "header" | "footer";
  compact?: boolean;
}

/** The official TIS seal paired with a custom, responsive editorial wordmark. */
export function SchoolLogo({ variant = "header", compact = false }: SchoolLogoProps) {
  const isFooter = variant === "footer";

  return (
    <span className="inline-flex min-w-0 items-center gap-2.5 sm:gap-3">
      <span
        className={cn(
          "grid shrink-0 place-items-center rounded-full border border-line bg-surface p-0.5 transition-[width,height] duration-300",
          isFooter ? "size-[4.25rem]" : compact ? "size-10" : "size-12",
        )}
      >
        <img
          src={images.logo}
          alt=""
          width={240}
          height={240}
          loading={isFooter ? "lazy" : "eager"}
          className="size-full rounded-full object-contain"
        />
      </span>
      <span className="h-8 w-px shrink-0 bg-line" aria-hidden="true" />
      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={cn(
            "whitespace-nowrap font-display font-semibold tracking-[-0.05em]",
            isFooter ? "text-[1.7rem]" : "text-[1.4rem] sm:text-[1.55rem]",
          )}
        >
          Tula's
        </span>
        <span
          className={cn(
            "mt-1 whitespace-nowrap font-sans font-semibold uppercase tracking-[0.13em]",
            isFooter ? "text-[0.57rem] text-muted" : "text-[0.51rem] text-muted sm:text-[0.57rem]",
          )}
        >
          International School
        </span>
      </span>
    </span>
  );
}