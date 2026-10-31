import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext.jsx";
import { TechIcon } from "./icons.jsx";

/* Project image from public/projects/. Zooms in slightly when the card is hovered.
   If the file is missing, a plain violet block with the project name is shown
   instead of a broken-image icon. */
function ProjectImage({ project }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="overflow-hidden rounded-t-2xl">
      {failed ? (
        <div
          role="img"
          aria-label={project.title}
          className="grid aspect-[16/10] w-full place-items-center rounded-t-2xl bg-brand px-4 text-center font-display text-lg font-bold text-white"
        >
          {project.title}
        </div>
      ) : (
        <img
          src={project.image}
          alt={project.title}
          className="aspect-[16/10] w-full rounded-t-2xl object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:group-hover:scale-100"
          loading="lazy"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

/* One glass project card: image, icon + category, title, description, tags, GitHub link.
   `project` comes from data.js → projects; its category and description are
   looked up in the current language. */
export default function ProjectCard({ project }) {
  const { t } = useLanguage();
  const p = t.projects;
  const text = p.items[project.id];

  return (
    <article className="glass glass-hover group flex h-full flex-col overflow-hidden">
      <ProjectImage project={project} />

      <div className="flex flex-1 flex-col p-4">
        <div className="mb-3 flex items-center gap-2">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-purple-500/15">
            <TechIcon name={project.icon} className="h-[18px] w-[18px]" />
          </span>
          <span className="pill px-2.5 py-1 text-[0.72rem] font-medium">{text.category}</span>
        </div>

        <h3 className="mb-1.5 text-lg font-bold leading-snug">{project.title}</h3>
        <p className="mb-3 text-sm text-muted">{text.desc}</p>

        <ul className="mb-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <li key={tag} className="rounded-full bg-purple-500/15 px-2.5 py-0.5 text-[0.7rem] font-semibold text-accent">
              {tag}
            </li>
          ))}
        </ul>

        {/* Opens the GitHub repository in a new tab */}
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={p.viewProjectLabel(project.title)}
          className="mt-auto inline-flex items-center gap-1.5 self-start text-sm font-semibold text-accent underline decoration-purple-500/40 underline-offset-4 hover:decoration-purple-500"
        >
          {p.viewProject} <ArrowRight size={15} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
