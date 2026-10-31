/* Maps the icon names used in data.js to real icon components.
   - Tech logos come from react-icons (Simple Icons set), shown in brand colors
   - Everything else comes from lucide-react */
import {
  SiFastapi,
  SiFlutter,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { BarChart3, Bot, Brain, Database, Globe, Hotel, ShieldAlert } from "lucide-react";

// color: null → uses the current text color (e.g. the black/white Next.js logo)
const ICONS = {
  python: { Icon: SiPython, color: "#4B8BBE" },
  flutter: { Icon: SiFlutter, color: "#42A5F5" },
  react: { Icon: SiReact, color: "#61DAFB" },
  nextjs: { Icon: SiNextdotjs, color: null },
  typescript: { Icon: SiTypescript, color: "#3178C6" },
  javascript: { Icon: SiJavascript, color: "#F7DF1E" },
  fastapi: { Icon: SiFastapi, color: "#05998B" },
  postgresql: { Icon: SiPostgresql, color: "#6B8CFF" },
  mongodb: { Icon: SiMongodb, color: "#47A248" },
  brain: { Icon: Brain, color: "#c084fc" },
  chart: { Icon: BarChart3, color: "#a855f7" },
  globe: { Icon: Globe, color: "#60a5fa" },
  database: { Icon: Database, color: "#c084fc" },
  bot: { Icon: Bot, color: "#c084fc" },
  shield: { Icon: ShieldAlert, color: "#f472b6" },
  hotel: { Icon: Hotel, color: "#a78bfa" },
};

/* <TechIcon name="python" className="h-6 w-6" /> */
export function TechIcon({ name, className = "h-5 w-5" }) {
  const entry = ICONS[name];
  if (!entry) return null;
  const { Icon, color } = entry;
  return <Icon className={className} style={color ? { color } : undefined} aria-hidden="true" />;
}

/* Social brand icons, keyed by the ids in data.js → socials */
export const SOCIAL_ICONS = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  facebook: FaFacebookF,
};
