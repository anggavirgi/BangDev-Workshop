/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2196F3",
        secondary: "#FFC108",
      },
      screens: {
        laptop: "1279px",
        desktop: "1600px",
      },
    },
  },
  plugins: [],
};
