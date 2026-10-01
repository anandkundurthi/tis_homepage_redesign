import { Reveal } from "@/components/animation/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { about } from "@/data/content";
import { BROCHURE_URL } from "@/data/navigation";
import { images } from "@/data/images";

export function About() {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="wrap grid gap-14 lg:grid-cols-12 lg:gap-12">
        <Reveal className="relative lg:col-span-5">
          <figure className="relative pb-16 pr-10 sm:pr-16">
            <img
              src={images.guitar}
              alt="TIS students practising guitar together in a group class"
              width={1000}
              height={611}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full object-cover"
            />
            <img
              src={images.writer}
              alt="A TIS student with a notebook, framed in a circle"
              width={640}
              height={783}
              loading="lazy"
              decoding="async"
              className="absolute bottom-0 right-0 w-[42%] max-w-56"
            />
          </figure>
        </Reveal>

        <div className="lg:col-span-6 lg:col-start-7 lg:pt-6">
          <SectionHeading eyebrow="About TIS" title={about.title} />
          <Reveal delay={0.1}>
            <p className="mt-8 font-display text-xl leading-snug text-ink sm:text-2xl">
              {about.lead}
            </p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              {about.body}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <dl className="mt-10 grid grid-cols-2 border-t border-line">
              {about.points.map((point) => (
                <div
                  key={point.label}
                  className="border-b border-line py-4 pr-4"
                >
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                    {point.label}
                  </dt>
                  <dd className="mt-1 font-display text-lg">{point.value}</dd>
                </div>
              ))}
            </dl>
            <ButtonLink href={BROCHURE_URL} variant="outline" className="mt-10">
              Download the brochure
            </ButtonLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
