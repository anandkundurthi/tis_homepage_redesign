import { useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, Moon, Sun } from "lucide-react";
import { useCallback, useRef, useState } from "react";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SchoolLogo } from "@/components/ui/SchoolLogo";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/utils/cn";
import { navLinks, sectionIds } from "@/data/navigation";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const activeId = useActiveSection(sectionIds);
  const [compact, setCompact] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (value) => setCompact(value > 48));

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    menuButtonRef.current?.focus();
  }, []);

  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300",
          compact
            ? "border-line bg-paper/90 backdrop-blur-md"
            : "border-transparent bg-paper",
        )}
      >
        <div
          className={cn(
            "wrap flex items-center justify-between gap-6 transition-[height] duration-300",
            compact ? "h-14" : "h-[4.5rem] xl:h-20",
          )}
        >
          <a
            href="#top"
            className="inline-flex shrink-0 items-center"
            aria-label="Tulas International School, back to top"
          >
            <SchoolLogo compact={compact} />
          </a>

          <nav aria-label="Primary" className="hidden xl:block">
            <ul className="flex items-center gap-7 whitespace-nowrap text-sm font-medium">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    aria-current={activeId === link.id ? "true" : undefined}
                    className="link-underline py-2 aria-[current=true]:text-emphasis"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${nextTheme} theme`}
              className="grid size-11 place-items-center border border-line transition-colors hover:bg-sunk"
            >
              {theme === "dark" ? (
                <Sun aria-hidden="true" className="size-[1.125rem]" />
              ) : (
                <Moon aria-hidden="true" className="size-[1.125rem]" />
              )}
            </button>

            <ButtonLink
              href="#admissions"
              className="hidden min-h-11 py-2 xl:inline-flex"
            >
              Explore Admissions
            </ButtonLink>

            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="grid size-11 place-items-center border border-line transition-colors hover:bg-sunk xl:hidden"
            >
              <Menu aria-hidden="true" className="size-5" />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu open={menuOpen} activeId={activeId} onClose={closeMenu} />
    </>
  );
}
