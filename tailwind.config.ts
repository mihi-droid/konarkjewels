import type { Config } from "tailwindcss";

// ---------------------------------------------------------------------------
// KONARK JEWELS — Design tokens
// Extracted from brand mark: black ground, gold (sun/temple) monogram,
// ivory display type. Kept deliberately narrow — no arbitrary colors
// anywhere else in the app.
// ---------------------------------------------------------------------------
const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Core brand
        ink: "#0B0B0A",          // near-black ground (primary bg, header, footer)
        surface: "#141310",      // raised panels on dark sections
        ivory: "#F7F3EA",        // primary light background
        parchment: "#EFE7D8",    // secondary light surface / card bg
        gold: {
          DEFAULT: "#C6A664",    // primary accent (matches monogram)
          light: "#E4CE94",
          dark: "#8C7238",
          foil: "#D9B96C",
        },
        text: {
          DEFAULT: "#1C1A16",    // body text on light
          inverse: "#F7F3EA",    // body text on dark
          muted: "#6B6558",      // secondary text on light
          "muted-inverse": "#A79E8C",
        },
        border: {
          DEFAULT: "#E2D9C4",    // hairline on light
          dark: "#2A2822",       // hairline on dark
        },
        success: "#4C6B4F",
        error: "#9B4A3E",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      fontSize: {
        display: ["clamp(2.75rem, 5vw, 5rem)", { lineHeight: "1.05", letterSpacing: "0.01em" }],
        h1: ["clamp(2.25rem, 3.6vw, 3.25rem)", { lineHeight: "1.1" }],
        h2: ["clamp(1.75rem, 2.6vw, 2.5rem)", { lineHeight: "1.15" }],
        h3: ["1.375rem", { lineHeight: "1.3" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6" }],
        body: ["1rem", { lineHeight: "1.6" }],
        "body-sm": ["0.875rem", { lineHeight: "1.55" }],
        caption: ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.08em" }],
        button: ["0.8125rem", { lineHeight: "1", letterSpacing: "0.12em" }],
      },
      letterSpacing: {
        wide: "0.06em",
        wider: "0.12em",
        widest: "0.22em",
      },
      borderRadius: {
        none: "0px",
        sm: "2px",
        DEFAULT: "2px",
        md: "3px",
        lg: "4px",
        full: "9999px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(11,11,10,0.06), 0 8px 24px -12px rgba(11,11,10,0.18)",
        "card-hover": "0 4px 8px rgba(11,11,10,0.08), 0 16px 40px -14px rgba(11,11,10,0.28)",
        panel: "0 20px 60px -20px rgba(11,11,10,0.35)",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },
      screens: {
        xs: "375px",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      maxWidth: {
        "8xl": "90rem",
      },
    },
  },
  plugins: [],
};

export default config;
