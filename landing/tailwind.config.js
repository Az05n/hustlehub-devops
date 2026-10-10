/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // this is important for Vite + React
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0B132B",
        primary: "#FF5722",
        primaryLight: "#FF7043",
        secondary: "#662E2A",
        textLight: "#B0B3C4",
      },
    },
  },
  plugins: [],
};
