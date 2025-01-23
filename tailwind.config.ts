import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        highlight: "hsl(var(--highlight))",
        "highlight-alt": "hsl(var(--highlight-alt))",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        book: ["var(--font-serif)", ...fontFamily.serif],
      },
    },
  },
  plugins: [],
} satisfies Config;
