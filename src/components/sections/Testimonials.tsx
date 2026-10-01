import { Reveal } from "@/components/animation/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { community } from "@/data/content";

export function Testimonials() {
  return (
    <section
      id="community"
      className="border-y border-line bg-sunk py-20 lg:py-32"
    >
      <div className="wrap">
        <SectionHeading eyebrow="Our community" title={community.title} />

        <Reveal as="figure" className="mt-14 max-w-4xl">
          <blockquote>
            <p className="font-display text-[clamp(1.75rem,4vw,3rem)] font-light italic leading-tight text-balance">
              “{community.studentQuote}”
            </p>
            <footer className="mt-6 max-w-xl text-muted">
              {community.studentText}
            </footer>
          </blockquote>
        </Reveal>

        <div className="mt-20 grid gap-10 md:grid-cols-3 lg:mt-28">
          {community.parents.map((parent, index) => (
            <Reveal
              as="figure"
              key={parent.name}
              delay={index * 0.08}
              className="border-t border-ink pt-6"
            >
              <blockquote className="leading-relaxed">
                “{parent.quote}”
              </blockquote>
              <figcaption className="mt-6 text-sm">
                <span className="block font-semibold">{parent.name}</span>
                <span className="text-muted">{parent.role}</span>
              </figcaption>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-xs text-muted">
          Parent reviews as published on tis.edu.in.
        </p>

        <div className="mt-20 lg:mt-28">
          <Reveal>
            <h3 className="font-display text-3xl sm:text-4xl">
              {community.personalitiesTitle}
            </h3>
          </Reveal>
          <ul className="mt-8 border-t border-ink">
            {community.personalities.map((person) => (
              <Reveal
                as="li"
                key={person.name}
                className="grid gap-1 border-b border-line py-5 transition-colors duration-300 hover:bg-surface sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] sm:gap-8 sm:px-3"
              >
                <span className="font-display text-xl">{person.name}</span>
                <span className="text-muted">{person.note}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
