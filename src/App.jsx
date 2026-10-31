import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Reveal from "./components/Reveal.jsx";
import { useLanguage } from "./context/LanguageContext.jsx";

export default function App() {
  const { t } = useLanguage();

  return (
    <>
      {/* Keyboard users can jump straight past the navbar */}
      <a
        href="#main"
        className="fixed left-4 top-[-60px] z-[100] rounded-full bg-brand px-4 py-2 font-semibold text-white focus:top-3"
      >
        {t.skipLink}
      </a>

      <Navbar />
      <main id="main">
        <Hero />

        {/* About Me + My Skills: two glass cards side by side */}
        <div className="container-page grid grid-cols-1 gap-6 pt-12 lg:grid-cols-2">
          <Reveal>
            <About />
          </Reveal>
          <Reveal delay={120}>
            <Skills />
          </Reveal>
        </div>

        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
