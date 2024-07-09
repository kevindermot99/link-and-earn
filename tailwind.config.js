/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "main-color": "#8B5CF6",
        "body-color-light": "#fff",
        "body-color-dark": "#121212",
        "border-lines-light": "#e7e7e7",
        "border-lines-dark": "#1D1D1D",
        "dark-text": "#2F333C",
        "light-text": "#7d7d7d",
      },
    },
  },
  plugins: [],
};
