import { Reveal } from "@/components/animation/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { studentLife } from "@/data/content";
import { images } from "@/data/images";

export function StudentLife() {
  return (
    <section id="student-life" className="py-20 lg:py-32">
      <div className="wrap">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <SectionHeading
            eyebrow="Beyond academics"
            title={studentLife.title}
            description={studentLife.description}
            className="lg:col-span-6"
          />

          <Reveal
            delay={0.1}
            className="grid grid-cols-3 items-end gap-3 sm:gap-6 lg:col-span-6"
          >
            <img
              src={images.basketball}
              alt="A TIS student with a basketball, framed in a circle"
              width={640}
              height={999}
              loading="lazy"
              decoding="async"
              className="w-full"
            />
            <img
              src={images.cricket}
              alt="A TIS student in cricket gear, framed in a circle"
              width={640}
              height={882}
              loading="lazy"
              decoding="async"
              className="w-full translate-y-6"
            />
            <img
              src={images.painter}
              alt="A TIS student working at a desk, framed in a circle"
              width={640}
              height={493}
              loading="lazy"
              decoding="async"
              className="w-full"
            />
          </Reveal>
        </div>

        <div className="mt-16 grid gap-10 lg:mt-24 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <h3 className="font-display text-3xl">The sports on offer</h3>
            <p className="mt-3 text-muted">
              Sixteen, from archery and shooting to horse riding and hockey.
            </p>
          </Reveal>
          <ul
            aria-label="Sports at TIS"
            className="flex flex-wrap gap-2.5 lg:col-span-8"
          >
            {studentLife.sports.map((sport, index) => (
              <Reveal as="li" key={sport} delay={Math.min(index * 0.03, 0.3)}>
                <span className="inline-block border border-line px-4 py-2 text-sm font-medium transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-accent-ink">
                  {sport}
                </span>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal className="mt-12 flex flex-wrap items-baseline gap-x-6 gap-y-2 border-t border-line pt-6 lg:mt-16">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-emphasis">
            Creative life
          </h3>
          <ul className="flex flex-wrap gap-x-6 gap-y-1 font-display text-2xl">
            {studentLife.creative.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
