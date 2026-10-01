import { useCallback, useState } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "tis-theme";

/* index.html sets data-theme before first paint, so we read it instead of recomputing. */
function readTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(readTheme);

  const toggleTheme = useCallback(() => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;

    root.classList.add("theme-transition");
    root.dataset.theme = next;
    window.setTimeout(() => root.classList.remove("theme-transition"), 400);

    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* Storage can be blocked (private mode); the theme still applies for this visit. */
    }
    setTheme(next);
  }, [theme]);

  return { theme, toggleTheme };
}
