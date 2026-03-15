/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["system-ui", "ui-sans-serif", "Inter", "sans-serif"]
      },
      colors: {
        primary: {
          50: "#f3e8ff",
          500: "#a855f7",
          600: "#9333ea"
        },
        accent: {
          500: "#f97316",
          600: "#ea580c"
        }
      },
      boxShadow: {
        "glow-primary": "0 0 40px rgba(168, 85, 247, 0.7)",
        "glow-accent": "0 0 40px rgba(249, 115, 22, 0.7)"
      }
    }
  },
  plugins: []
};

