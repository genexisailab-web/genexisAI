import type { Config } from "tailwindcss";

const config = {
  content: [
    "./src/app/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "obsidian-plum": {
          50: "#f6eefb",
          100: "#e7d4f1",
          200: "#d7baea",
          300: "#c09ae0",
          400: "#a36dd0",
          500: "#8542b5",
          600: "#6d3095",
          700: "#572779",
          800: "#421c5b",
          900: "#2d1e2f",
          950: "#1f1321",
        },
        plum: {
          DEFAULT: "#4E2A4F",
        },
        ink: {
          DEFAULT: "#0f0b13",
        },
        ivory: {
          DEFAULT: "#f5edea",
        },
      },
      maxWidth: {
        "8xl": "96rem",
      },
      boxShadow: {
        glow: "0 0 40px rgba(133, 66, 181, 0.35)",
      },
      backgroundImage: {
        "plum-noise": "radial-gradient(circle at top left, rgba(133,66,181,0.35), transparent 45%), radial-gradient(circle at bottom right, rgba(78,42,79,0.5), transparent 40%)",
      },
      keyframes: {
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "float-slow": "float-slow 9s ease-in-out infinite",
        "fade-up": "fade-up 0.9s ease forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;

