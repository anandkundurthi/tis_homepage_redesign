import { Reveal } from "@/components/animation/Reveal";
import { stats } from "@/data/stats";

export function Stats() {
  return (
    <section
      aria-label="TIS at a glance"
      className="border-b border-line bg-surface"
    >
      <div className="wrap">
        <dl className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 0.07}
              className="flex flex-col-reverse justify-end border-t border-line px-4 py-9 even:border-l sm:px-6 lg:border-l lg:py-12 lg:first:border-l-0"
            >
              <dt className="mt-3 max-w-[14ch] text-sm leading-snug text-muted">
                {stat.label}
              </dt>
              <dd className="font-display text-[clamp(2.75rem,6vw,4.5rem)] font-light leading-none tracking-tight">
                {stat.value}
                {stat.unit && (
                  <span className="ml-1.5 font-sans text-base font-medium text-emphasis">
                    {stat.unit}
                  </span>
                )}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
