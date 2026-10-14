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
        subtle: "#F3F1EA",
        muted: "#5B6472",
        border: "#E5E7EB",
        dark: {
          bg: "#111827",
          text: "#FFFFFF",
          muted: "#D1D5DB",
          border: "#1F2937",
        },
        gold: {
          50: "#FDFCF3",
          100: "#FAF5D5",
          200: "#F4E8A3",
          300: "#EDD869",
          400: "#E3C432",
          500: "#D3AF13", // Brand signature gold
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
        card: "0 4px 20px -2px rgba(17, 24, 39, 0.04), 0 2px 6px -2px rgba(17, 24, 39, 0.02)",
        "card-hover": "0 12px 30px -4px rgba(17, 24, 39, 0.07), 0 4px 10px -2px rgba(17, 24, 39, 0.03)",
        logo: "0 0 24px -2px rgba(211, 175, 19, 0.3)",
      },
      animation: {
        "fade-in": "fadeIn 0.4s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
