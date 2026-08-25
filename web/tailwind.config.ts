import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#0b0b0e",
        base2: "#101014",
        panel: "#141419",
        panel2: "#191920",
        line: "#26262e",
        fg: "#f2f2f4",
        muted: "#9b9ba6",
        brand: { DEFAULT: "#f5c518", light: "#ffd83d" },
        danger: "#ff3b3b",
        teal: "#40c4ff",
        green: "#7ac97f",
        orange: "#ff5e62",
        purple: "#a55eea"
      },
      fontFamily: {
        display: ["'Archivo Black'", "Inter", "sans-serif"],
        sans: ["Inter", "system-ui", "'Segoe UI'", "Arial", "sans-serif"]
      },
      maxWidth: { page: "1080px" }
    }
  },
  plugins: []
};

export default config;
