import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        void: "#050505",
        depth: "#0A0A0F",
        mist: "rgba(255, 255, 255, 0.05)",
        "text-primary": "#E0E0E0",
        "text-muted": "#858585",
        "accent-glow": "rgba(100, 100, 255, 0.1)",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["Helvetica Neue", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
