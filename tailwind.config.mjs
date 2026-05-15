/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          deep: "#0F1B2D",
          charcoal: "#1E293B",
        },
        gold: {
          DEFAULT: "#C8A961",
          hover: "#A78B3F",
        },
        accent: {
          DEFAULT: "#0F4C81",
          muted: "#7FA3C7",
        },
        canvas: {
          white: "#FFFFFF",
          subtle: "#F8FAFC",
          card: "#F1F5F9",
        },
        line: "#E2E8F0",
        success: "#15803D",
        caution: "#64748B",
      },
      fontFamily: {
        sans: ["'DM Sans Variable'", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["'DM Sans Variable'", "ui-sans-serif", "system-ui", "sans-serif"],
        num: ["'DM Sans Variable'", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        article: "740px",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#1E293B",
            maxWidth: "100%",
            h1: { color: "#0F1B2D", fontFamily: "'DM Sans Variable', ui-sans-serif, sans-serif" },
            h2: { color: "#0F1B2D", fontFamily: "'DM Sans Variable', ui-sans-serif, sans-serif" },
            h3: { color: "#0F1B2D", fontFamily: "'DM Sans Variable', ui-sans-serif, sans-serif" },
            h4: { color: "#0F1B2D", fontFamily: "'DM Sans Variable', ui-sans-serif, sans-serif" },
            a: {
              color: "#0F4C81",
              textDecoration: "underline",
              fontWeight: 500,
              "&:hover": { color: "#A78B3F" },
            },
            strong: { color: "#0F1B2D" },
            code: {
              color: "#0F1B2D",
              backgroundColor: "#F1F5F9",
              padding: "0.125rem 0.375rem",
              borderRadius: "0.25rem",
              fontWeight: "500",
            },
            "code::before": { content: '""' },
            "code::after": { content: '""' },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
