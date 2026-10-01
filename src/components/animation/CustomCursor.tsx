import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";

const INTERACTIVE =
  "a, button, [role='button'], summary, input, textarea, select";
const SIZE = 36;

/**
 * A ring that trails the pointer on mouse devices. Position lives in motion
 * values, so moving the mouse never re-renders React; state only changes when
 * the pointer enters or leaves an interactive element.
 */
export function CustomCursor() {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(-SIZE);
  const y = useMotionValue(-SIZE);
  const springX = useSpring(x, { stiffness: 420, damping: 36, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 420, damping: 36, mass: 0.4 });
  const [visible, setVisible] = useState(false);
  const [overInteractive, setOverInteractive] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches)
      return;

    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      x.set(event.clientX - SIZE / 2);
      y.set(event.clientY - SIZE / 2);
      setVisible(true);
    };
    const onOver = (event: PointerEvent) => {
      setOverInteractive(
        event.target instanceof Element &&
          event.target.closest(INTERACTIVE) !== null,
      );
    };
    const onLeave = () => setVisible(false);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      style={{
        x: reduceMotion ? x : springX,
        y: reduceMotion ? y : springY,
        width: SIZE,
        height: SIZE,
      }}
      animate={{ opacity: visible ? 1 : 0, scale: overInteractive ? 1.6 : 1 }}
      transition={{ duration: 0.2 }}
      className={`pointer-events-none fixed left-0 top-0 z-[70] rounded-full border border-emphasis transition-colors duration-200 ${
        overInteractive ? "bg-accent/25" : "bg-transparent"
      }`}
    />
  );
}
