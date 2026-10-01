import { Reveal } from "@/components/animation/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contact } from "@/data/content";
import { MAP_URL } from "@/data/navigation";

export function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Contact & location"
            title="Visit us in the Dehradun valley."
          />

          <Reveal delay={0.1}>
            <address className="mt-10 space-y-8 border-t border-ink pt-8 not-italic">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-emphasis">
                  Address
                </h3>
                <p className="mt-3 leading-relaxed">
                  {contact.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-emphasis">
                    Admissions helpline
                  </h3>
                  <p className="mt-3">
                    <a
                      href={contact.helpline.href}
                      className="link-underline font-display text-xl"
                    >
                      {contact.helpline.label}
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-emphasis">
                    Landline
                  </h3>
                  <ul className="mt-3 space-y-1">
                    {contact.landlines.map((line) => (
                      <li key={line.href}>
                        <a href={line.href} className="link-underline">
                          {line.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-emphasis">
                  Email
                </h3>
                <p className="mt-3">
                  <a
                    href={`mailto:${contact.email}`}
                    className="link-underline"
                  >
                    {contact.email}
                  </a>
                </p>
              </div>
            </address>
            <ButtonLink href={MAP_URL} variant="outline" className="mt-10">
              Open in Google Maps
            </ButtonLink>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="lg:col-span-7">
          <iframe
            title="Map showing the location of Tulas International School on Chakrata Road, Dehradun"
            src={contact.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[22rem] w-full border border-line grayscale-[0.35] transition-[filter] duration-300 hover:grayscale-0 sm:h-[28rem] lg:h-full lg:min-h-[32rem] [[data-theme=dark]_&]:brightness-90 [[data-theme=dark]_&]:invert-[0.92] [[data-theme=dark]_&]:hue-rotate-180"
          />
        </Reveal>
      </div>
    </section>
  );
}
