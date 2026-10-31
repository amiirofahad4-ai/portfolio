# Fadumo Ahmed Ali · Portfolio

Bilingual (English / Somali) portfolio with a violet glassmorphism design and a light/dark theme.
Built with **React + Vite + Tailwind CSS**, icons from **lucide-react** and **react-icons**.

## Folder structure

```
fadumo-portfolio/
├── index.html                   ← page title, SEO + Open Graph tags, fonts, no-flash theme script
├── package.json
├── vite.config.js
├── tailwind.config.js           ← darkMode: "class", fonts, gradients, shadows
├── postcss.config.js
├── netlify.toml                 ← Netlify build settings
├── public/
│   ├── fadumo.jpg               ← ★ your photo (shows "FA" until you add it)
│   ├── Fadumo-Ahmed-Ali-CV.pdf  ← ★ your CV (every "Download CV" / "Resume" link)
│   ├── projects/                ← ★ global-job-platform.png, ganacsi-ai.png,
│   │                              fraud-detection.png, hotel-management-system.png
│   ├── favicon.svg
│   └── og-image.png             ← image shown in link previews
└── src/
    ├── main.jsx                 ← app entry: ThemeProvider + LanguageProvider
    ├── App.jsx                  ← puts the sections together
    ├── index.css                ← theme colors (dark + light), glass cards, buttons, fade-in
    ├── data.js                  ← ★ ALL text, skills, projects, links, CV + photo paths (EN + SO)
    ├── context/
    │   ├── LanguageContext.jsx  ← EN/SO, saved in localStorage
    │   └── ThemeContext.jsx     ← dark/light, saved in localStorage
    └── components/
        ├── Navbar.jsx           ← glass bar, active-section pill, EN|SO, Let's Talk, theme toggle
        ├── Hero.jsx             ← headline, buttons, tech logos, photo on orb, stats card
        ├── About.jsx            ← About Me card with laptop illustration
        ├── Skills.jsx           ← My Skills card (logo chips)
        ├── Projects.jsx         ← projects section: title, grid, Get In Touch card
        ├── ProjectCard.jsx      ← one project card (image with hover zoom, tags, GitHub link)
        ├── GetInTouchCard.jsx   ← violet card at the end of the projects grid
        ├── Contact.jsx          ← contact info (copy buttons) + Formspree form
        ├── Footer.jsx           ← contact info, quote, quick links, wave
        ├── Reveal.jsx           ← fade-in on scroll
        └── icons.jsx            ← maps icon names in data.js to real icons
```

## Run it locally

You need [Node.js](https://nodejs.org) 18 or newer.

```bash
cd fadumo-portfolio
npm install        # first time only
npm run dev        # open the address it prints, usually http://localhost:5173
```

To test the production version: `npm run build`, then `npm run preview`.

> If you change `tailwind.config.js` while `npm run dev` is running, stop it (Ctrl + C) and start it again.

## Edit the content

Everything on the page comes from **`src/data.js`**:
- `profile`: email, phone, social links, Formspree address, photo and CV paths
- `heroTech`: the logos under the hero buttons
- `projects`: GitHub links, tags, icons, thumbnail style
- `translations.en` / `translations.so`: all English and Somali text

**Photo:** save it as `public/fadumo.jpg` (a square photo works best).
**CV:** replace `public/Fadumo-Ahmed-Ali-CV.pdf`, keeping exactly that file name.
**Project images:** save them in `public/projects/` as `global-job-platform.png`, `ganacsi-ai.png`,
`fraud-detection.png` and `hotel-management-system.png` (wide 16:10 screenshots look best). They fill the top of
each card and zoom in slightly on hover. Until a file exists, that card shows a violet block with the project name.
The paths are set by `image` on each project in `data.js`.

Theme colors (dark and light) are at the top of `src/index.css`.

## Deploy

### Netlify
1. Push this folder to a GitHub repository.
2. On [app.netlify.com](https://app.netlify.com): **Add new site → Import an existing project**, pick the repo.
3. Netlify reads `netlify.toml` (build `npm run build`, publish `dist`). Click **Deploy**.

No GitHub? Run `npm run build` and drag the `dist` folder onto [app.netlify.com/drop](https://app.netlify.com/drop).

### Vercel
1. Push to GitHub, then on [vercel.com/new](https://vercel.com/new) import the repo.
2. Vercel detects Vite automatically (build `npm run build`, output `dist`). Click **Deploy**.

### After deploying
Replace `https://fadumo-portfolio.netlify.app` in `index.html` (canonical, `og:url`, `og:image`)
with your real address so link previews show the right image.

## Contact form

The form posts to Formspree (`https://formspree.io/f/xeaalypo`). The first real message may ask you
to confirm the form in your Formspree account.
