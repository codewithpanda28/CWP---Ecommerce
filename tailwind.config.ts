const defaultTheme = require("tailwindcss/defaultTheme");
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
       'main-bg': "url('/bg-img.jpeg')",
      },
      colors: {
        bodyColor: "#fbfaf7",
        bgLight: "#1010100d",
        darkText : "#242424",
        lightText: "#a5a5a5",
      },
        fontFamily: {
          bodyFont: ["Urbanist", ...defaultTheme.fontFamily.sans],
        }
    },
  },
  plugins: [],
} satisfies Config;
