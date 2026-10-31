import { Download, UserRound } from "lucide-react";
import { profile } from "../data";
import { useLanguage } from "../context/LanguageContext.jsx";

/* Laptop-on-a-desk illustration in violet tones (inline SVG, no image file needed) */
function DeskIllustration({ label }) {
  return (
    <svg viewBox="0 0 320 220" role="img" aria-label={label} className="h-auto w-full rounded-2xl">
      <defs>
        <linearGradient id="wall" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3b1d8f" />
          <stop offset="1" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id="screen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#c084fc" />
          <stop offset="1" stopColor="#6d28d9" />
        </linearGradient>
        <radialGradient id="lamp" cx="0.75" cy="0.15" r="0.6">
          <stop offset="0" stopColor="#f0abfc" stopOpacity="0.55" />
          <stop offset="1" stopColor="#f0abfc" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="320" height="220" fill="url(#wall)" />
      <rect width="320" height="220" fill="url(#lamp)" />
      {/* Window light */}
      <rect x="196" y="20" width="96" height="70" rx="6" fill="#e9d5ff" opacity="0.18" />
      <path d="M244 20v70M196 55h96" stroke="#e9d5ff" strokeOpacity="0.25" strokeWidth="2" />
      {/* Desk */}
      <rect x="0" y="168" width="320" height="52" fill="#f5f3ff" opacity="0.9" />
      <rect x="0" y="164" width="320" height="8" fill="#ddd6fe" />
      {/* Plant */}
      <path d="M52 160h26l-4 8H56z" fill="#a855f7" />
      <rect x="54" y="138" width="22" height="24" rx="4" fill="#f5f3ff" />
      <path d="M65 138c-2-18-14-26-24-28 4 12 10 22 24 28zm0 0c2-20 12-30 22-32-2 14-8 24-22 32zm0 0c0-16 0-26 0-36" stroke="#4c1d95" strokeWidth="2" fill="#6ee7b7" fillOpacity="0.75" />
      {/* Laptop screen */}
      <g transform="rotate(-6 170 120)">
        <rect x="112" y="72" width="120" height="82" rx="6" fill="#1e1b4b" />
        <rect x="118" y="78" width="108" height="70" rx="3" fill="url(#screen)" />
        <rect x="126" y="88" width="46" height="5" rx="2.5" fill="#fff" opacity="0.85" />
        <rect x="126" y="99" width="70" height="4" rx="2" fill="#fff" opacity="0.45" />
        <rect x="126" y="108" width="58" height="4" rx="2" fill="#fff" opacity="0.45" />
        <rect x="126" y="117" width="78" height="4" rx="2" fill="#fff" opacity="0.45" />
        <rect x="126" y="130" width="30" height="9" rx="4.5" fill="#fff" opacity="0.9" />
      </g>
      {/* Laptop base */}
      <path d="M100 164l12-10h126l14 10z" fill="#c4b5fd" />
      <rect x="96" y="163" width="160" height="5" rx="2.5" fill="#a78bfa" />
      {/* Mug */}
      <rect x="262" y="142" width="20" height="24" rx="4" fill="#f0abfc" />
      <path d="M282 148c8 0 8 12 0 12" stroke="#f0abfc" strokeWidth="3" fill="none" />
    </svg>
  );
}

/* Renders text parts: plain strings, or { b: "..." } in bold */
function RichText({ parts }) {
  return parts.map((part, i) =>
    typeof part === "string" ? (
      <span key={i}>{part}</span>
    ) : (
      <strong key={i} className="font-semibold text-fg">{part.b}</strong>
    )
  );
}

export default function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <article id="about" className="glass glass-hover h-full p-6 sm:p-7">
      <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
        <span className="icon-badge h-11 w-11">
          <UserRound size={21} aria-hidden="true" />
        </span>
        {a.title}
      </h2>

      <div className="grid items-center gap-6 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <DeskIllustration label={a.illustrationAlt} />
        <div>
          <p className="mb-5 leading-relaxed text-muted">
            <RichText parts={a.text} />
          </p>
          <ul className="mb-6 flex flex-wrap gap-2">
            {a.chips.map((chip) => (
              <li key={chip} className="pill text-[0.8rem]">{chip}</li>
            ))}
          </ul>
          <a href={profile.cv} download={profile.cvFileName} className="btn-primary !px-5 !py-2.5 text-sm">
            <Download size={17} aria-hidden="true" />
            {a.cvButton}
          </a>
        </div>
      </div>
    </article>
  );
}
