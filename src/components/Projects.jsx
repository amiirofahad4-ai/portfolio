import { ArrowRight, FolderOpen } from "lucide-react";
import { profile, projects } from "../data";
import { useLanguage } from "../context/LanguageContext.jsx";
import Reveal from "./Reveal.jsx";
import ProjectCard from "./ProjectCard.jsx";
import GetInTouchCard from "./GetInTouchCard.jsx";

export default function Projects() {
  const { t } = useLanguage();
  const p = t.projects;

  return (
    <section id="projects" className="pt-20">
      <div className="container-page">
        {/* Title + "View All Projects" link */}
        <Reveal className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <h2 className="flex items-center gap-3 text-2xl font-bold sm:text-3xl">
            <FolderOpen className="h-8 w-8 fill-purple-500/30 text-purple-500" aria-hidden="true" />
            {p.title}
          </h2>
          <a
            href={profile.githubRepos}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent underline-offset-4 hover:underline"
          >
            {p.viewAll} <ArrowRight size={16} aria-hidden="true" />
          </a>
        </Reveal>

        {/* 1 column on mobile, 2 on tablet, 5 on desktop (4 projects + Get In Touch) */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-5">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}

          <Reveal delay={320} className="sm:col-span-2 xl:col-span-1">
            <GetInTouchCard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
