import { useEffect, useRef, useState } from "react";
import { CodeXml, House, Menu, Moon, Send, Sun, X } from "lucide-react";
import { profile } from "../data";
import { useLanguage } from "../context/LanguageContext.jsx";
import { useTheme } from "../context/ThemeContext.jsx";

const SECTION_IDS = ["home", "about", "projects", "skills", "contact"];

/* Returns the id of the section currently in the middle of the screen */
function useActiveSection() {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return active;
}

/* One nav link. "resume" downloads the CV; everything else scrolls to a section. */
function NavItem({ link, active, onClick, mobile = false }) {
  const isActive = active === link.id;
  const base = mobile
    ? "flex items-center gap-2 rounded-2xl px-4 py-3 text-base"
    : "flex items-center gap-1.5 rounded-full px-4 py-2 text-[0.92rem]";
  const state = isActive ? "bg-brand font-semibold text-white shadow-glow" : "text-muted hover:text-fg";

  const props =
    link.id === "resume"
      ? { href: profile.cv, download: profile.cvFileName }
      : { href: `#${link.id}`, "aria-current": isActive ? "true" : undefined };

  return (
    <a {...props} onClick={onClick} className={`${base} ${state} transition-colors`}>
      {link.id === "home" && <House size={16} aria-hidden="true" />}
      {link.label}
    </a>
  );
}

/* EN | SO switch */
function LanguageToggle() {
  const { lang, setLang, t } = useLanguage();
  return (
    <div role="group" aria-label={t.nav.language} className="pill gap-0 p-1 text-xs font-semibold">
      {["en", "so"].map((code, i) => (
        <span key={code} className="flex items-center">
          {i === 1 && <span aria-hidden="true" className="hidden px-0.5 text-muted/60 sm:inline">|</span>}
          <button
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={lang === code}
            lang={code}
            className={`rounded-full px-2 py-1 uppercase transition sm:px-2.5 ${
              lang === code ? "bg-brand text-white" : "text-muted hover:text-fg"
            }`}
          >
            {code}
          </button>
        </span>
      ))}
    </div>
  );
}

/* Round theme switch: moon in dark mode, sun in light mode */
function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const isDark = theme === "dark";
  const label = isDark ? t.nav.toLight : t.nav.toDark;
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className="glass grid h-[42px] w-[42px] shrink-0 place-items-center !rounded-full text-fg transition duration-300 hover:rotate-12 hover:text-accent motion-reduce:hover:rotate-0"
    >
      {isDark ? <Moon size={19} aria-hidden="true" /> : <Sun size={19} aria-hidden="true" />}
    </button>
  );
}

export default function Navbar() {
  const { t } = useLanguage();
  const active = useActiveSection();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);

  // Close the mobile menu with Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-3 z-50 mt-3">
      <div className="container-page">
        <div className="glass flex h-16 items-center justify-between gap-2 !rounded-[22px] px-2.5 sm:gap-3 sm:px-5">
          {/* Logo */}
          <a href="#home" aria-label={t.nav.home} className="flex min-w-0 items-center gap-1.5 font-display text-base font-bold sm:gap-2 sm:text-xl">
            <CodeXml className="h-6 w-6 shrink-0 text-purple-500 sm:h-7 sm:w-7" strokeWidth={2.4} aria-hidden="true" />
            <span>
              Fadumo <span className="text-gradient">Ahmed</span>
            </span>
          </a>

          {/* Desktop links */}
          <nav aria-label="Main" className="hidden items-center gap-1 xl:flex">
            {t.nav.links.map((link) => (
              <NavItem key={link.id} link={link} active={active} />
            ))}
          </nav>

          {/* Right side */}
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
            <LanguageToggle />
            <a href="#contact" className="btn-outline hidden !px-4 !py-2 text-sm md:inline-flex">
              <Send size={16} aria-hidden="true" />
              {t.nav.letsTalk}
            </a>
            <ThemeToggle />
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
              className="glass grid h-[42px] w-[42px] place-items-center !rounded-full xl:hidden"
            >
              {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile / tablet menu */}
        <nav
          id="mobile-menu"
          aria-label="Main"
          className={`glass mt-2 p-2 transition duration-200 xl:hidden ${
            open ? "visible translate-y-0 opacity-100" : "invisible absolute -translate-y-2 opacity-0"
          }`}
        >
          {t.nav.links.map((link) => (
            <NavItem key={link.id} link={link} active={active} mobile onClick={() => setOpen(false)} />
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-2 w-full md:hidden">
            <Send size={16} aria-hidden="true" />
            {t.nav.letsTalk}
          </a>
        </nav>
      </div>
    </header>
  );
}
