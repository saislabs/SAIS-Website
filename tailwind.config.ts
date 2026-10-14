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
        background: "#FBFBFA",
        foreground: "#111827",
        surface: "#FFFFFF",
        subtle: "#F4F4F1",
        muted: "#64748B",
        border: "#E2E8F0",
        gold: {
          50: "#FCF9EE",
          100: "#F7F0D4",
          200: "#EFE0A9",
          300: "#E4CE77",
          400: "#D3B748",
          500: "#B89628", // primary refined gold accent
          600: "#9C791D",
          700: "#785B18",
          800: "#5A4315",
          900: "#3E2E10",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.04)",
        card: "0 4px 20px -2px rgba(17, 24, 39, 0.05), 0 2px 6px -2px rgba(17, 24, 39, 0.02)",
        "card-hover": "0 12px 32px -4px rgba(17, 24, 39, 0.09), 0 4px 12px -2px rgba(17, 24, 39, 0.04)",
        glow: "0 0 24px -4px rgba(184, 150, 40, 0.15)",
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
