import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const tags = {
  div: motion.div,
  li: motion.li,
  article: motion.article,
  figure: motion.figure,
} as const;

interface RevealProps {
  children: ReactNode;
  as?: keyof typeof tags;
  delay?: number;
  className?: string;
}

/* Fade + 16px rise, once, when the element enters the viewport. Skipped for reduced-motion users. */
export function Reveal({
  children,
  as = "div",
  delay = 0,
  className,
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const Tag = tags[as];

  return (
    <Tag
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}
