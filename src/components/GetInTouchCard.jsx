import { ArrowRight, Mail } from "lucide-react";
import { socials } from "../data";
import { useLanguage } from "../context/LanguageContext.jsx";
import { SOCIAL_ICONS } from "./icons.jsx";

/* Violet gradient card at the end of the projects grid */
export default function GetInTouchCard() {
  const { t } = useLanguage();
  const g = t.getInTouch;

  return (
    <div className="relative flex h-full flex-col items-center justify-center overflow-hidden rounded-glass bg-brand p-7 text-center text-white shadow-glow transition duration-300 hover:-translate-y-1.5 motion-reduce:hover:translate-y-0">
      {/* Soft wave shapes in the background */}
      <svg aria-hidden="true" viewBox="0 0 200 80" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 h-1/3 w-full opacity-30">
        <path d="M0 40 C40 10 80 70 120 40 S180 20 200 35 V80 H0Z" fill="#fff" fillOpacity="0.25" />
        <path d="M0 55 C50 30 90 80 140 55 S190 45 200 50 V80 H0Z" fill="#fff" fillOpacity="0.2" />
      </svg>

      <Mail className="relative mb-4 h-12 w-12" strokeWidth={1.6} aria-hidden="true" />
      <h3 className="relative mb-2 text-2xl font-bold">{g.title}</h3>
      <p className="relative mb-6 text-white/85">{g.text}</p>
      <a
        href="#contact"
        className="relative mb-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 font-semibold text-purple-700 transition hover:-translate-y-0.5 hover:shadow-lg motion-reduce:hover:translate-y-0"
      >
        {g.button} <ArrowRight size={17} aria-hidden="true" />
      </a>
      <ul className="relative flex gap-3">
        {socials.map(({ id, label, href }) => {
          const Icon = SOCIAL_ICONS[id];
          return (
            <li key={id}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full bg-white/15 transition hover:-translate-y-0.5 hover:bg-white hover:text-purple-700 motion-reduce:hover:translate-y-0"
              >
                <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
