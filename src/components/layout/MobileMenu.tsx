import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { navLinks } from "@/data/navigation";

interface MobileMenuProps {
  open: boolean;
  activeId: string | null;
  onClose: () => void;
}

export function MobileMenu({ open, activeId, onClose }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable =
        panelRef.current.querySelectorAll<HTMLElement>("a[href], button");
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={panelRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[65] flex flex-col overflow-y-auto bg-paper xl:hidden"
        >
          <div className="wrap flex h-16 shrink-0 items-center justify-between">
            <span className="font-display text-xl">Menu</span>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close navigation menu"
              className="grid size-11 place-items-center border border-line transition-colors hover:bg-sunk"
            >
              <X aria-hidden="true" className="size-5" />
            </button>
          </div>

          <nav aria-label="Primary" className="wrap flex-1 py-6">
            <ul className="divide-y divide-line border-y border-line">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.05 + index * 0.04 }}
                >
                  <a
                    href={link.href}
                    onClick={onClose}
                    aria-current={activeId === link.id ? "true" : undefined}
                    className="flex items-baseline justify-between py-4 font-display text-3xl aria-[current=true]:text-emphasis"
                  >
                    {link.label}
                    <span aria-hidden="true" className="text-sm text-muted">
                      0{index + 1}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>

          <div className="wrap pb-8">
            <ButtonLink href="#admissions" onClick={onClose} className="w-full">
              Explore Admissions
            </ButtonLink>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
