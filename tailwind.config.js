/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gridular: ["Gridular", "sans-serif"],
        bienvenue: ["Bienvenue", "sans-serif"],
      },
    },
  },
  plugins: [],
}

