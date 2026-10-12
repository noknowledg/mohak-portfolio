import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F7F7F5",
        ink: "#0B1215",
        muted: "#5B6870",
        line: "#E4E7E5",
        teal: {
          DEFAULT: "#0D9488",
          deep: "#0F766E",
          soft: "#CCFBF1",
          mist: "#F0FDFA",
        },
      },
      fontFamily: {
        display: ['"Inter Variable"', "system-ui", "sans-serif"],
        sans: ['"Inter Variable"', "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(11,18,21,0.04), 0 12px 32px -12px rgba(11,18,21,0.14)",
      },
    },
  },
  plugins: [],
};

export default config;