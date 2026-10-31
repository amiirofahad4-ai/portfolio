import { ArrowRight, Mail, MapPin, Phone, Quote } from "lucide-react";
import { profile, socials } from "../data";
import { useLanguage } from "../context/LanguageContext.jsx";
import { SOCIAL_ICONS } from "./icons.jsx";

/* Quick link: "resume" downloads the CV, others scroll to a section */
function QuickLink({ link }) {
  const props = link.id === "resume" ? { href: profile.cv, download: profile.cvFileName } : { href: `#${link.id}` };
  return (
    <a {...props} className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg">
      <ArrowRight size={15} className="text-purple-500" aria-hidden="true" />
      {link.label}
    </a>
  );
}

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;

  return (
    <footer className="relative mt-24 overflow-hidden border-t border-purple-500/20">
      {/* Violet wave shape along the bottom */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 bottom-12 h-28 w-full"
      >
        <path d="M0 90 C240 30 420 140 720 90 S1200 30 1440 80 V160 H0Z" fill="#7c3aed" fillOpacity="0.22" />
        <path d="M0 120 C300 70 520 160 820 115 S1260 70 1440 110 V160 H0Z" fill="#a855f7" fillOpacity="0.22" />
      </svg>

      <div className="container-page relative grid gap-10 py-12 md:grid-cols-3 md:gap-6">
        {/* 1. Contact info */}
        <div>
          <h2 className="mb-4 text-lg font-bold">{f.contactTitle}</h2>
          <ul className="space-y-2.5 text-sm text-muted">
            <li className="flex items-center gap-3">
              <MapPin size={17} className="shrink-0 text-purple-500" aria-hidden="true" />
              {t.contact.location}
            </li>
            <li>
              <a href={`mailto:${profile.email}`} className="flex items-center gap-3 hover:text-fg">
                <Mail size={17} className="shrink-0 text-purple-500" aria-hidden="true" />
                {profile.email}
              </a>
            </li>
            <li>
              <a href={profile.phoneLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-fg">
                <Phone size={17} className="shrink-0 text-purple-500" aria-hidden="true" />
                {profile.phone}
              </a>
            </li>
          </ul>
          <ul className="mt-5 flex gap-2.5">
            {socials.map(({ id, label, href }) => {
              const Icon = SOCIAL_ICONS[id];
              return (
                <li key={id}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="glass grid h-10 w-10 place-items-center !rounded-full transition hover:-translate-y-0.5 hover:!border-transparent hover:bg-brand hover:text-white motion-reduce:hover:translate-y-0"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* 2. Quote */}
        <figure className="text-center md:border-x md:border-purple-500/20 md:px-6">
          <Quote className="mx-auto mb-3 h-9 w-9 fill-purple-500 text-purple-500" aria-hidden="true" />
          <blockquote className="font-display text-lg leading-relaxed">“{f.quote}”</blockquote>
          <figcaption className="mt-3 text-sm font-semibold text-accent">— {profile.name}</figcaption>
        </figure>

        {/* 3. Quick links (2 columns) */}
        <nav aria-label={f.quickLinks} className="md:pl-8">
          <h2 className="mb-4 text-lg font-bold">{f.quickLinks}</h2>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5">
            {f.links.map((link) => (
              <li key={link.id}>
                <QuickLink link={link} />
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-purple-500/20 bg-bg/60 backdrop-blur">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-4 text-sm text-muted sm:flex-row">
          <p>{f.copyright}</p>
          <p>
            {f.builtWith[0]} <span className="text-rose-500" aria-label="love">❤</span> {f.builtWith[1]}
          </p>
        </div>
      </div>
    </footer>
  );
}
