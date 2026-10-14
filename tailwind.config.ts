import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAF9F5",
        foreground: "#111827",
        surface: "#FFFFFF",
        subtle: "#F4F3ED",
        muted: "#5B6472",
        border: "#E5E7EB",
        gold: {
          50: "#FDFCF3",
          100: "#FAF5D5",
          200: "#F4E8A3",
          300: "#EDD869",
          400: "#E3C432",
          500: "#D3AF13", // Perfectly harmonized with the SAIS Labs logo gold
          600: "#B08E0C",
          700: "#866907",
          800: "#5B4605",
          900: "#342602",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.04)",
        card: "0 4px 20px -2px rgba(17, 24, 39, 0.05), 0 2px 6px -2px rgba(17, 24, 39, 0.02)",
        "card-hover": "0 14px 34px -4px rgba(17, 24, 39, 0.08), 0 4px 12px -2px rgba(17, 24, 39, 0.03)",
        logo: "0 0 20px -2px rgba(211, 175, 19, 0.25)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
