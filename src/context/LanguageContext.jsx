/* Language context: holds the current language ("en" | "so"),
   exposes its translations as `t`, and remembers the choice in localStorage. */
import { createContext, useContext, useEffect, useState } from "react";
import { translations } from "../data";

const STORAGE_KEY = "portfolio-lang";
const LanguageContext = createContext(null);

// Read the saved language (storage can be blocked, so guard it)
function getInitialLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "so") return saved;
  } catch {
    /* ignore */
  }
  return "en";
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLanguage);

  // Keep <html lang> in sync (helps screen readers) and save the choice
  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Use inside any component: const { t, lang, setLang } = useLanguage();
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside <LanguageProvider>");
  return context;
}
