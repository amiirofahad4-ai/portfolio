import { BarChart3 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext.jsx";
import { TechIcon } from "./icons.jsx";

export default function Skills() {
  const { t } = useLanguage();
  const s = t.skills;

  return (
    <article id="skills" className="glass glass-hover h-full p-6 sm:p-7">
      <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
        <span className="icon-badge h-11 w-11">
          <BarChart3 size={21} aria-hidden="true" />
        </span>
        {s.title}
      </h2>

      <ul className="flex flex-wrap gap-2.5">
        {s.items.map((item) => (
          <li
            key={item.label}
            className="pill py-2 pl-2.5 pr-4 font-medium transition duration-200 hover:-translate-y-0.5 hover:border-purple-500/60 motion-reduce:hover:translate-y-0"
          >
            <span className="grid h-7 w-7 place-items-center rounded-full bg-white/10">
              <TechIcon name={item.icon} className="h-[18px] w-[18px]" />
            </span>
            {item.label}
          </li>
        ))}
      </ul>
    </article>
  );
}
