import { Reveal } from "@/components/animation/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { campus } from "@/data/content";
import { VIRTUAL_TOUR_URL } from "@/data/navigation";
import { images } from "@/data/images";

export function Campus() {
  return (
    <section
      id="campus"
      className="border-y border-line bg-surface py-20 lg:py-32"
    >
      <div className="wrap">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-16">
          <SectionHeading
            eyebrow="Campus & boarding life"
            title={campus.title}
            className="lg:col-span-6"
          />
          <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
            <p className="text-lg leading-relaxed text-muted">
              {campus.description}
            </p>
            <ButtonLink
              href={VIRTUAL_TOUR_URL}
              variant="outline"
              className="mt-8"
            >
              Take the virtual tour
            </ButtonLink>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-12 lg:mt-20">
          <Reveal as="figure" className="group md:col-span-8">
            <div className="overflow-hidden">
              <img
                src={images.field}
                alt="TIS students in house-coloured kit jogging across the campus field"
                width={640}
                height={360}
                loading="lazy"
                decoding="async"
                className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <figcaption className="mt-3 text-sm text-muted">
              Morning fitness on the campus field.
            </figcaption>
          </Reveal>

          <Reveal
            as="figure"
            delay={0.1}
            className="group md:col-span-4 md:mt-16"
          >
            <div className="overflow-hidden">
              <img
                src={images.medical}
                alt="A doctor with a stethoscope examining a student in the TIS medical room"
                width={800}
                height={800}
                loading="lazy"
                decoding="async"
                className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] md:aspect-[4/5]"
              />
            </div>
            <figcaption className="mt-3 text-sm text-muted">
              {campus.medicalNote}
            </figcaption>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
          {campus.boardingLife.map((item, index) => (
            <Reveal
              as="li"
              key={item.label}
              delay={index * 0.06}
              className="border-t border-ink pt-5"
            >
              <h3 className="font-display text-2xl">{item.label}</h3>
              <p className="mt-3 leading-relaxed text-muted">{item.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
