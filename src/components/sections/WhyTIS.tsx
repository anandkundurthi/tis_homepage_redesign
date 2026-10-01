import { Reveal } from "@/components/animation/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { awards, whyTis } from "@/data/content";
import { rankings } from "@/data/stats";

export function WhyTIS() {
  return (
    <section id="why-tis" className="py-20 lg:py-32">
      <div className="wrap">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <SectionHeading
            eyebrow="Why choose TIS"
            title={whyTis.title}
            description={whyTis.description}
            className="lg:col-span-5"
          />
          <ul className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:col-span-7 lg:pt-4">
            {whyTis.reasons.map((reason, index) => (
              <Reveal
                as="li"
                key={reason.title}
                delay={index * 0.06}
                className="border-t border-ink pt-5"
              >
                <h3 className="font-display text-2xl">{reason.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{reason.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>

        <div className="on-brand mt-20 bg-brand p-6 text-ink sm:p-10 lg:mt-28 lg:p-14">
          <Reveal>
            <h3 className="font-display text-3xl sm:text-4xl">
              Rankings the school lists
            </h3>
            <p className="mt-2 text-sm text-muted">
              As published on tis.edu.in.
            </p>
          </Reveal>
          <ul className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4">
            {rankings.map((item, index) => (
              <Reveal
                as="li"
                key={`${item.rank}-${item.scope}`}
                delay={index * 0.06}
                className="border-t border-line py-6 sm:px-6 sm:even:border-l lg:border-l lg:first:border-l-0"
              >
                <p className="font-display text-6xl font-light leading-none text-emphasis">
                  {item.rank}
                </p>
                <p className="mt-4 font-display text-xl">{item.scope}</p>
                <p className="mt-1 text-sm text-muted">
                  {item.title}, by {item.source}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>

        <div className="mt-20 lg:mt-28">
          <Reveal className="max-w-xl">
            <h3 className="font-display text-3xl sm:text-4xl">Awards</h3>
            <p className="mt-3 text-lg text-muted">
              We believe in celebrating the hard work and perseverance of the
              best.
            </p>
          </Reveal>
          <ul className="mt-10 grid gap-8 md:grid-cols-3">
            {awards.map((award, index) => (
              <Reveal as="li" key={award.caption} delay={index * 0.08}>
                <figure className="group">
                  <div className="overflow-hidden border border-line">
                    <img
                      src={award.image}
                      alt={award.alt}
                      width={700}
                      height={407}
                      loading="lazy"
                      decoding="async"
                      className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <figcaption className="mt-4">
                    <span className="block font-display text-xl">
                      {award.caption}
                    </span>
                    <span className="mt-1 block text-sm text-muted">
                      {award.giver}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
