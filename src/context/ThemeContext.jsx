/* Theme context: "dark" | "light".
   - Adds/removes the "dark" class on <html> (Tailwind darkMode: "class")
   - Remembers the choice in localStorage
   - Briefly adds "theme-transition" so colors fade smoothly when switching
   The first paint is handled by a tiny script in index.html, so there's no flash. */
import { createContext, useContext, useEffect, useRef, useState } from "react";

export const THEME_STORAGE_KEY = "portfolio-theme";
const ThemeContext = createContext(null);

function getInitialTheme() {
  try {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    if (saved === "dark" || saved === "light") return saved;
  } catch {
    /* ignore */
  }
  return "dark"; // dark is the default look
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);
  const firstRun = useRef(true);

  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Fade colors on user switches (not on first load, not for reduced-motion users)
    let timer;
    if (!firstRun.current && !reduceMotion) {
      root.classList.add("theme-transition");
      timer = setTimeout(() => root.classList.remove("theme-transition"), 400);
    }
    firstRun.current = false;

    root.classList.toggle("dark", theme === "dark");
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#0a0920" : "#f6f3ff");
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      /* ignore */
    }
    return () => clearTimeout(timer);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

// Use inside any component: const { theme, toggleTheme } = useTheme();
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used inside <ThemeProvider>");
  return context;
}
