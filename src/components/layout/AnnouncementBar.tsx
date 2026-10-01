import { Phone } from "lucide-react";
import { ADMISSION_PORTAL_URL } from "@/data/navigation";

export function AnnouncementBar() {
  return (
    <div className="on-brand bg-brand text-ink">
      <div className="wrap flex min-h-10 items-center justify-between gap-4 py-2 text-xs sm:text-[0.8125rem]">
        <a
          href="tel:+919837983791"
          className="link-underline inline-flex items-center gap-2 py-1 font-medium"
        >
          <Phone aria-hidden="true" className="size-3.5 text-emphasis" />
          <span className="hidden sm:inline">Admissions helpline</span>
          <span>+91-98379 83791</span>
        </a>
        <a
          href={ADMISSION_PORTAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline py-1 font-semibold uppercase tracking-[0.14em] text-emphasis"
        >
          Enquire now
        </a>
      </div>
    </div>
  );
}
