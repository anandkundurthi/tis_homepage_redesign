import { Reveal } from "@/components/animation/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { admissions } from "@/data/content";
import { ADMISSION_PORTAL_URL, BROCHURE_URL } from "@/data/navigation";

export function AdmissionsCTA() {
  return (
    <section
      id="admissions"
      className="on-brand bg-brand py-20 text-ink lg:py-32"
    >
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-7">
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-emphasis">
            <span aria-hidden="true" className="h-px w-8 bg-current" />
            Admissions · Classes IV–XII
          </p>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-light leading-[1.02] tracking-tight text-balance">
            {admissions.title}
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {admissions.description}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={ADMISSION_PORTAL_URL}>Apply now</ButtonLink>
            <ButtonLink href={BROCHURE_URL} variant="outline">
              Download brochure
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal
          delay={0.1}
          className="lg:col-span-4 lg:col-start-9 lg:self-end"
        >
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-emphasis">
            Good to know
          </h3>
          <ul className="mt-5 space-y-4 border-t border-line pt-5 text-sm leading-relaxed text-muted">
            {admissions.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
