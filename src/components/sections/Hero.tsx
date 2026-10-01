import { motion, useReducedMotion } from "framer-motion";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { hero } from "@/data/content";
import { images } from "@/data/images";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduceMotion = useReducedMotion();

  /* Headline lines slide up from behind a mask; each portrait fades and settles in. */
  const line = (delay: number) => ({
    initial: reduceMotion ? false : ({ y: "105%" } as const),
    animate: { y: 0 },
    transition: { duration: 0.6, delay, ease },
  });
  const portrait = (delay: number) => ({
    initial: reduceMotion
      ? false
      : ({ opacity: 0, y: 20, scale: 0.96 } as const),
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.6, delay, ease },
  });

  return (
    <section id="top" className="border-b border-line">
      <div className="wrap grid items-center gap-14 pb-16 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-24 lg:pt-16">
        <div>
          <motion.p
            {...portrait(0)}
            className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-emphasis"
          >
            <span aria-hidden="true" className="h-px w-8 bg-current" />
            {hero.eyebrow}
          </motion.p>

          <h1 className="font-display text-[clamp(3.25rem,7.4vw,6.75rem)] font-light leading-[0.95] tracking-tight">
            <span className="block overflow-hidden pb-[0.1em]">
              <motion.span className="block" {...line(0.05)}>
                Let’s do it
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.12em]">
              <motion.span className="block" {...line(0.15)}>
                with{" "}
                <em className="font-normal italic text-emphasis">Tulas.</em>
              </motion.span>
            </span>
          </h1>

          <motion.p
            {...portrait(0.3)}
            className="mt-8 max-w-xl text-lg leading-relaxed text-muted"
          >
            {hero.intro}
          </motion.p>

          <motion.div
            {...portrait(0.4)}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <ButtonLink href="#admissions">Explore Admissions</ButtonLink>
            <ButtonLink href="#about" variant="outline">
              Discover TIS
            </ButtonLink>
          </motion.div>

          <motion.ul
            {...portrait(0.5)}
            aria-label="TIS at a glance"
            className="mt-14 flex flex-wrap gap-x-6 gap-y-2 border-t border-line pt-5 text-xs font-semibold uppercase tracking-[0.16em] text-muted"
          >
            {hero.facts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </motion.ul>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[34rem]">
          <div
            aria-hidden="true"
            className="absolute inset-[6%] rounded-full border border-line"
          />
          <motion.img
            {...portrait(0.15)}
            src={images.shooter}
            alt="A TIS student with a rifle, framed in a circle"
            width={760}
            height={609}
            fetchPriority="high"
            decoding="async"
            className="absolute left-0 top-[8%] w-[72%]"
          />
          <motion.img
            {...portrait(0.3)}
            src={images.dancer}
            alt="A TIS student in a dance pose"
            width={640}
            height={812}
            decoding="async"
            className="absolute right-0 top-0 w-[34%]"
          />
          <motion.img
            {...portrait(0.45)}
            src={images.pottery}
            alt="A TIS student working with clay"
            width={640}
            height={714}
            decoding="async"
            className="absolute bottom-0 right-[4%] w-[50%]"
          />
          <p className="absolute bottom-[3%] left-0 max-w-[38%] border-t border-ink pt-3 text-xs leading-snug text-muted">
            <span className="mb-1 block font-display text-base text-ink">
              Est. 2012
            </span>
            Under the aegis of Rishabh Educational Trust
          </p>
        </div>
      </div>
    </section>
  );
}
