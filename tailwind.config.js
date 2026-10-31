/** @type {import('tailwindcss').Config} */

// Theme-aware colors read "R G B" CSS variables from src/index.css
// (dark values on .dark, light values on :root), so opacity modifiers
// like bg-surface/50 keep working.
const themed = (name) => `rgb(var(--c-${name}) / <alpha-value>)`;

export default {
  darkMode: "class", // the "dark" class on <html> switches the theme
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: themed("bg"), // page background
        fg: themed("fg"), // main text
        muted: themed("muted"), // secondary text
        accent: themed("accent"), // violet used for text/icons (lighter in dark mode)
        // The violet palette (#7c3aed, #a855f7, #c084fc, …) comes from Tailwind's
        // built-in violet-*, purple-* and fuchsia-* colors.
      },
      fontFamily: {
        display: ['"Outfit"', "system-ui", "sans-serif"],
        body: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
      },
      borderRadius: {
        glass: "18px",
      },
      backgroundImage: {
        // Main gradient: primary buttons, active nav link, icons, Get In Touch card
        brand: "linear-gradient(135deg, #6d28d9, #9333ea, #c026d3)",
        // Gradient used inside the name text
        name: "linear-gradient(90deg, #8b5cf6, #a855f7, #c084fc)",
      },
      boxShadow: {
        glass: "var(--shadow-glass)",
        lift: "var(--shadow-lift)",
        glow: "0 10px 30px -8px rgba(147, 51, 234, 0.6)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
