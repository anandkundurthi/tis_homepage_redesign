import { Reveal } from "@/components/animation/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { academics } from "@/data/content";
import { images } from "@/data/images";

export function Academics() {
  return (
    <section
      id="academics"
      className="border-y border-line bg-sunk py-20 lg:py-32"
    >
      <div className="wrap grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Academic excellence"
              title={academics.title}
              description={academics.description}
            />
            <Reveal delay={0.1} className="mt-10 hidden max-w-xs lg:block">
              <img
                src={images.science}
                alt="A TIS student working in a science lab, framed in a circle"
                width={640}
                height={664}
                loading="lazy"
                decoding="async"
                className="w-full"
              />
            </Reveal>
          </div>
        </div>

        <ol className="border-t border-ink lg:col-span-7 lg:col-start-6">
          {academics.pillars.map((pillar, index) => (
            <Reveal
              as="li"
              key={pillar.title}
              delay={index * 0.06}
              className="group border-b border-line"
            >
              <div className="grid grid-cols-[3rem_1fr] gap-x-4 py-8 transition-[padding] duration-300 sm:grid-cols-[4.5rem_1fr] lg:group-hover:pl-3">
                <span
                  aria-hidden="true"
                  className="font-display text-2xl text-emphasis sm:text-3xl"
                >
                  0{index + 1}
                </span>
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 max-w-lg leading-relaxed text-muted">
                    {pillar.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
