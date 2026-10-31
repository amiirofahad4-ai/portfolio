import { useState } from "react";
import { ArrowRight, Download, GraduationCap, Mail, Rocket } from "lucide-react";
import { heroTech, profile } from "../data";
import { useLanguage } from "../context/LanguageContext.jsx";
import Reveal from "./Reveal.jsx";
import { TechIcon } from "./icons.jsx";

/* Photo in a round frame. Falls back to "FA" initials if /fadumo.jpg is missing. */
function Photo({ alt }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="absolute left-1/2 top-1/2 aspect-square w-[62%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-4 border-white/20 shadow-[0_20px_60px_-10px_rgba(76,29,149,0.8)]">
      {failed ? (
        <div className="grid h-full w-full place-items-center bg-brand font-display text-7xl font-extrabold text-white sm:text-8xl">
          {profile.initials}
        </div>
      ) : (
        <img
          src={profile.photo}
          alt={alt}
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
          width="400"
          height="400"
        />
      )}
    </div>
  );
}

/* Glowing violet orb with a thin orbit line and a small glowing dot */
function Orb() {
  return (
    <>
      <div
        aria-hidden="true"
        className="absolute inset-[4%] rounded-full bg-[radial-gradient(circle_at_35%_30%,#b06cff_0%,#7c3aed_40%,#4c1d95_72%,#2e1065_100%)] shadow-[0_0_120px_10px_rgba(124,58,237,0.45)]"
      />
      <svg aria-hidden="true" viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible">
        <ellipse
          cx="50"
          cy="55"
          rx="56"
          ry="16"
          transform="rotate(-22 50 55)"
          fill="none"
          stroke="#c4b5fd"
          strokeOpacity="0.55"
          strokeWidth="0.35"
        />
        <circle cx="8.5" cy="81" r="1.4" fill="#e9d5ff" />
        <circle cx="8.5" cy="81" r="3.2" fill="#c084fc" opacity="0.35" />
      </svg>
    </>
  );
}

function StatsCard({ stats }) {
  return (
    <div className="glass relative mx-auto mt-6 w-full max-w-xs p-4 motion-safe:animate-float sm:absolute sm:-bottom-4 sm:right-0 sm:mt-0 sm:w-60">
      <ul className="space-y-3.5">
        {stats.map((s) => (
          <li key={s.label} className="flex items-center gap-3">
            <span aria-hidden="true" className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-purple-500/15 text-xl">
              {s.icon}
            </span>
            <span className="min-w-0">
              <strong className="block font-display text-lg font-bold leading-tight">{s.value}</strong>
              <span className="block text-xs text-muted">{s.label}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Hero() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section id="home" className="overflow-x-clip pb-8 pt-12 sm:pt-16">
      <div className="container-page grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        {/* Left column */}
        <Reveal className="min-w-0">
          <span className="pill mb-6 border-purple-500/40 text-[0.85rem] font-medium">
            <GraduationCap size={17} className="text-accent" aria-hidden="true" />
            {h.badge}
          </span>

          <h1 className="mb-5 text-[2.75rem] font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-[4.4rem]">
            {h.line1} <span className="text-gradient">Fadumo</span>
            <br />
            Ahmed <span className="text-gradient">Ali.</span>
          </h1>

          <p className="mb-4 font-display text-xl font-semibold sm:text-2xl">{h.subtitle}</p>
          <p className="mb-8 max-w-xl text-muted sm:text-lg">{h.intro}</p>

          {/* Buttons */}
          <div className="mb-10 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              <Rocket size={18} aria-hidden="true" />
              {h.ctaProjects}
              <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a href="#contact" className="btn-outline">
              <Mail size={18} aria-hidden="true" />
              {h.ctaContact}
            </a>
            <a href={profile.cv} download={profile.cvFileName} className="btn-outline">
              <Download size={18} aria-hidden="true" />
              {h.ctaCv}
            </a>
          </div>

          {/* Tech logos */}
          <ul aria-label={h.techLabel} className="grid grid-cols-4 gap-x-3 gap-y-5 sm:flex sm:flex-wrap sm:gap-x-7">
            {heroTech.map((tech) => (
              <li key={tech.label} className="flex flex-col items-center gap-1.5 text-center">
                <TechIcon name={tech.icon} className="h-8 w-8 transition-transform duration-200 hover:-translate-y-1" />
                <span className="text-xs text-muted">{tech.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Right column: photo on a glowing orb + floating stats */}
        <Reveal delay={150} className="min-w-0">
          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="relative aspect-square">
              <Orb />
              <Photo alt={h.photoAlt} />
            </div>
            <StatsCard stats={h.stats} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
