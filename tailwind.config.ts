import type { Config } from "tailwindcss"

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        headerBg:'#0f172a ',
        bgColor: "#F1F5F9",
        textColor: "#0f172a",
      },
    },
  },
  plugins: [],
} satisfies Config
