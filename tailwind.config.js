/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#05070d",
          900: "#070a13",
          850: "#0a0e1a",
          800: "#0e1424",
          700: "#16203a",
          600: "#22304f",
        },
        accent: {
          DEFAULT: "#22d3ee", // cyan
          soft: "#67e8f9",
          violet: "#a78bfa",
          pink: "#e11d74",
          amber: "#fbbf24",
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
        hand: ['"Patrick Hand"', "cursive"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
        blink: "blink 1.1s step-end infinite",
      },
    },
  },
  plugins: [],
}
