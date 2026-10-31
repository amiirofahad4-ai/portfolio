/* =========================================================
   ALL PAGE CONTENT LIVES HERE. To change the site, edit this file.

   - profile      → contact details, links, CV and photo paths
   - heroTech     → tech logos shown under the hero buttons
   - projects     → project links, tags, icons and thumbnail style
   - translations → every piece of visible text, in English ("en") and Somali ("so")

   Icon names (like "python" or "globe") are mapped to real icons in
   src/components/icons.jsx.
   ========================================================= */

/* ---------- Personal details, links and files ---------- */
export const profile = {
  name: "Fadumo Ahmed Ali",
  initials: "FA",
  email: "amiirofahad4@gmail.com",
  phone: "+252 61 728 9900",
  phoneLink: "https://wa.me/252617289900", // opens WhatsApp
  github: "https://github.com/amiirofahad4-ai",
  githubRepos: "https://github.com/amiirofahad4-ai?tab=repositories",
  linkedin: "https://linkedin.com/in/fatma-ahmed-a7986339a",
  facebook: "https://www.facebook.com/share/1EBZE3CNPJ/",
  formspree: "https://formspree.io/f/xeaalypo",

  // Files in the /public folder
  photo: "/fadumo.jpg", // shows "FA" initials until this file exists
  cv: "/Fadumo-Ahmed-Ali-CV.pdf",
  cvFileName: "Fadumo-Ahmed-Ali-CV.pdf",
};

/* Social links (used in the Get In Touch card and the footer) */
export const socials = [
  { id: "github", label: "GitHub", href: profile.github },
  { id: "linkedin", label: "LinkedIn", href: profile.linkedin },
  { id: "facebook", label: "Facebook", href: profile.facebook },
];

/* Tech logos under the hero buttons (names are the same in both languages) */
export const heroTech = [
  { icon: "python", label: "Python" },
  { icon: "flutter", label: "Flutter" },
  { icon: "react", label: "React" },
  { icon: "nextjs", label: "Next.js" },
  { icon: "typescript", label: "TypeScript" },
  { icon: "fastapi", label: "FastAPI" },
  { icon: "postgresql", label: "PostgreSQL" },
  { icon: "mongodb", label: "MongoDB" },
];

/* ---------- Projects ----------
   icon:  small icon next to the category pill (see icons.jsx)
   image: screenshot in public/projects/ (shown at the top of the card, 16:10).
          Until the file exists, the card shows a plain violet block with the name.
   Category and description text are in translations.<lang>.projects.items */
export const projects = [
  {
    id: "jobs",
    title: "Global Job Platform",
    icon: "globe",
    image: "/projects/global-job-platform.png",
    tags: ["Full Stack", "Database"],
    href: "https://github.com/amiirofahad4-ai/global_job_platform",
  },
  {
    id: "ganacsi",
    title: "Ganacsi AI",
    icon: "bot",
    image: "/projects/ganacsi-ai.png",
    tags: ["Dart", "Flutter", "AI"],
    href: "https://github.com/amiirofahad4-ai/ganacsi-ai-frontend",
  },
  {
    id: "fraud",
    title: "Fraud Detection",
    icon: "shield",
    image: "/projects/fraud-detection.png",
    tags: ["Python", "Jupyter", "ML"],
    href: "https://github.com/amiirofahad4-ai/fraud-detection",
  },
  {
    id: "hotel",
    title: "Hotel Management System",
    icon: "hotel",
    image: "/projects/hotel-management-system.png",
    tags: ["TypeScript", "Full Stack"],
    href: "https://github.com/amiirofahad4-ai/Hotel-Management-System",
  },
];

/* ---------- Translations ---------- */
export const translations = {
  en: {
    skipLink: "Skip to content",
    nav: {
      // id = section to scroll to; "resume" downloads the CV instead
      links: [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "projects", label: "Projects" },
        { id: "skills", label: "Skills" },
        { id: "resume", label: "Resume" },
        { id: "contact", label: "Contact" },
      ],
      letsTalk: "Let's Talk",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      language: "Language",
      toLight: "Switch to light theme",
      toDark: "Switch to dark theme",
      home: "Fadumo Ahmed, home",
    },
    hero: {
      badge: "Computer Science Graduate",
      line1: "Hi, I'm",
      subtitle: "Full Stack Developer | AI & Software Development",
      intro:
        "I build useful, high-quality digital solutions with modern technologies. Passionate about AI, web development, and creating technology for a better tomorrow.",
      ctaProjects: "View My Projects",
      ctaContact: "Contact Me",
      ctaCv: "Download CV",
      techLabel: "Technologies I use",
      photoAlt: "Portrait of Fadumo Ahmed Ali",
      stats: [
        { icon: "🏆", value: "4", label: "Projects on GitHub" },
        { icon: "👩‍💻", value: "5", label: "Years studying CS" },
        { icon: "⭐", value: "Top Skills", label: "AI & Development" },
      ],
    },
    about: {
      title: "About Me",
      // Each part is plain text, or { b: "..." } for bold text
      text: [
        "I am ",
        { b: "Fadumo Ahmed Ali" },
        ", a Computer Science graduate from ",
        { b: "Somali National University" },
        " (2021–2026). I design, build and maintain efficient, scalable and user-friendly software, across front-end, back-end and databases, with a growing focus on AI.",
      ],
      chips: ["📍 Mogadishu, Somalia", "🗣 Somali (native) · English (advanced)"],
      cvButton: "Download my CV",
      illustrationAlt: "Illustration of a laptop on a desk",
    },
    skills: {
      title: "My Skills",
      items: [
        { icon: "python", label: "Python" },
        { icon: "javascript", label: "JavaScript" },
        { icon: "react", label: "React" },
        { icon: "nextjs", label: "Next.js" },
        { icon: "flutter", label: "Flutter" },
        { icon: "fastapi", label: "FastAPI" },
        { icon: "postgresql", label: "PostgreSQL" },
        { icon: "mongodb", label: "MongoDB" },
        { icon: "brain", label: "AI & Machine Learning" },
        { icon: "chart", label: "Data Science" },
        { icon: "globe", label: "Web Development" },
        { icon: "database", label: "Database Management" },
      ],
    },
    projects: {
      title: "My Projects",
      viewAll: "View All Projects",
      viewProject: "View Project",
      viewProjectLabel: (title) => `View ${title} on GitHub`,
      items: {
        jobs: { category: "Web Development", desc: "Connects employers with job seekers: post openings, search and apply." },
        ganacsi: { category: "AI & Mobile", desc: "AI-powered assistant app that helps small businesses manage and grow." },
        fraud: { category: "AI & Machine Learning", desc: "Machine learning model that detects fraudulent transactions." },
        hotel: { category: "Web Development", desc: "Rooms, bookings, guests and payments in one modern dashboard." },
      },
    },
    getInTouch: {
      title: "Get In Touch",
      text: "Let's work together on something great!",
      button: "Contact Me",
    },
    contact: {
      title: "Let's Talk",
      infoTitle: "Contact Information",
      formTitle: "Send a Message",
      rows: {
        email: "Email",
        phone: "Phone / WhatsApp",
        location: "Location",
      },
      location: "Mogadishu, Somalia",
      copy: "Copy",
      copied: "Copied!",
      copyFailed: "Couldn't copy",
      form: {
        name: "Your Name",
        email: "Your Email",
        subject: "Subject",
        message: "Your Message",
        send: "Send Message",
        sending: "Sending...",
        success: "Thank you! Your message was sent.",
        error: "Something went wrong. Please try again, or email me directly.",
        fixFields: "Please fix the highlighted fields.",
        errors: {
          name: "Please enter your name.",
          email: "Please enter a valid email address.",
          subject: "Please add a subject.",
          message: "Please write a message (at least 10 characters).",
        },
      },
    },
    footer: {
      contactTitle: "Contact Info",
      quote: "Technology is not just about innovation, but about creating opportunities for a better world.",
      quickLinks: "Quick Links",
      // Order matches the 2-column layout in the design
      links: [
        { id: "about", label: "About" },
        { id: "resume", label: "Resume" },
        { id: "projects", label: "Projects" },
        { id: "contact", label: "Contact" },
        { id: "skills", label: "Skills" },
      ],
      copyright: "© 2026 Fadumo Ahmed Ali. All rights reserved.",
      builtWith: ["Built with", "using React & Tailwind CSS"],
    },
  },

  so: {
    skipLink: "U bood nuxurka",
    nav: {
      links: [
        { id: "home", label: "Hoyga" },
        { id: "about", label: "Naftayda" },
        { id: "projects", label: "Mashaariicda" },
        { id: "skills", label: "Xirfadaha" },
        { id: "resume", label: "CV-ga" },
        { id: "contact", label: "Xiriir" },
      ],
      letsTalk: "Aan Wada Hadalno",
      openMenu: "Fur liiska",
      closeMenu: "Xir liiska",
      language: "Luqadda",
      toLight: "U beddel muuqaalka iftiinka",
      toDark: "U beddel muuqaalka mugdiga",
      home: "Fadumo Ahmed, bogga hore",
    },
    hero: {
      badge: "Ka Qalin Jabisay Cilmiga Kombiyuutarka",
      line1: "Salaan, waxaan ahay",
      subtitle: "Horumariye Full Stack | AI & Horumarinta Software",
      intro:
        "Waxaan dhisaa xalal dijitaal ah oo waxtar leh, tayo sarena leh, anigoo adeegsanaya tignoolajiyada casriga ah. Waxaan xiiseeyaa AI, horumarinta webka, iyo abuurista tignoolajiyo loogu talagalay mustaqbal ka wanaagsan.",
      ctaProjects: "Eeg Mashaariicdayda",
      ctaContact: "La Xiriir",
      ctaCv: "Soo Dejiso CV-ga",
      techLabel: "Tignoolajiyada aan isticmaalo",
      photoAlt: "Sawirka Fadumo Ahmed Ali",
      stats: [
        { icon: "🏆", value: "4", label: "Mashaariic GitHub ku jira" },
        { icon: "👩‍💻", value: "5", label: "Sano barashada CS" },
        { icon: "⭐", value: "Xirfadaha Ugu Sarreeya", label: "AI & Horumarin" },
      ],
    },
    about: {
      title: "Naftayda",
      text: [
        "Waxaan ahay ",
        { b: "Fadumo Ahmed Ali" },
        ", oo Cilmiga Kombiyuutarka ka qalin jabisay ",
        { b: "Jaamacadda Ummadda Soomaaliyeed" },
        " (2021–2026). Waxaan naqshadeeyaa, dhisaa oo dayactiraa software hufan, la ballaarin karo oo isticmaalkiisu fudud yahay, anigoo ka shaqeeya front-end, back-end iyo kaydka xogta, iyadoo xiisahayga AI uu sii kordhayo.",
      ],
      chips: ["📍 Muqdisho, Soomaaliya", "🗣 Soomaali (af hooyo) · Ingiriis (heer sare)"],
      cvButton: "Soo Dejiso CV-gayga",
      illustrationAlt: "Sawir laptop miis saaran",
    },
    skills: {
      title: "Xirfadahayga",
      items: [
        { icon: "python", label: "Python" },
        { icon: "javascript", label: "JavaScript" },
        { icon: "react", label: "React" },
        { icon: "nextjs", label: "Next.js" },
        { icon: "flutter", label: "Flutter" },
        { icon: "fastapi", label: "FastAPI" },
        { icon: "postgresql", label: "PostgreSQL" },
        { icon: "mongodb", label: "MongoDB" },
        { icon: "brain", label: "AI & Barashada Mashiinka" },
        { icon: "chart", label: "Sayniska Xogta" },
        { icon: "globe", label: "Horumarinta Webka" },
        { icon: "database", label: "Maareynta Kaydka Xogta" },
      ],
    },
    projects: {
      title: "Mashaariicdayda",
      viewAll: "Eeg Dhammaan Mashaariicda",
      viewProject: "Eeg Mashruuca",
      viewProjectLabel: (title) => `Ka eeg ${title} GitHub`,
      items: {
        jobs: { category: "Horumarinta Webka", desc: "Wuxuu isku xiraa loo-shaqeeyayaasha iyo shaqo-doonka: soo dhig shaqooyin, raadi oo codso." },
        ganacsi: { category: "AI & Mobile", desc: "App kaaliye AI ah oo ka caawiya ganacsiyada yaryar maareynta iyo koritaanka." },
        fraud: { category: "AI & Barashada Mashiinka", desc: "Model barashada mashiinka ah oo ogaada lacag-bixinnada khiyaanada ah." },
        hotel: { category: "Horumarinta Webka", desc: "Qolalka, ballamaha, martida iyo lacag-bixinta hal dashboard oo casri ah." },
      },
    },
    getInTouch: {
      title: "La Soo Xiriir",
      text: "Aan wada shaqeyno, oo aan wax weyn wada dhisno!",
      button: "La Xiriir",
    },
    contact: {
      title: "Aan Wada Hadalno",
      infoTitle: "Macluumaadka Xiriirka",
      formTitle: "Fariin Soo Dir",
      rows: {
        email: "Iimayl",
        phone: "Telefoon / WhatsApp",
        location: "Goobta",
      },
      location: "Muqdisho, Soomaaliya",
      copy: "Koobiyee",
      copied: "La koobiyeeyay!",
      copyFailed: "Lama koobiyeyn",
      form: {
        name: "Magacaaga",
        email: "Iimaylkaaga",
        subject: "Mawduuca",
        message: "Fariintaada",
        send: "Dir Fariinta",
        sending: "Waa la dirayaa...",
        success: "Mahadsanid! Fariintaada waa la diray.",
        error: "Wax khalad ah ayaa dhacay. Fadlan isku day mar kale, ama si toos ah iimayl iigu soo dir.",
        fixFields: "Fadlan sax meelaha la calaamadeeyay.",
        errors: {
          name: "Fadlan geli magacaaga.",
          email: "Fadlan geli iimayl sax ah.",
          subject: "Fadlan ku dar mawduuc.",
          message: "Fadlan qor fariin (ugu yaraan 10 xaraf).",
        },
      },
    },
    footer: {
      contactTitle: "Xiriirka",
      quote: "Tignoolajiyadu kaliya maaha hal-abuur, balse waa abuurista fursado loogu talagalay adduun ka wanaagsan.",
      quickLinks: "Xiriiriyeyaal Degdeg ah",
      links: [
        { id: "about", label: "Naftayda" },
        { id: "resume", label: "CV-ga" },
        { id: "projects", label: "Mashaariicda" },
        { id: "contact", label: "Xiriir" },
        { id: "skills", label: "Xirfadaha" },
      ],
      copyright: "© 2026 Fadumo Ahmed Ali. Xuquuqda oo dhan way dhowran tahay.",
      builtWith: ["Waxaa lagu dhisay", "iyadoo la adeegsanayo React & Tailwind CSS"],
    },
  },
};
