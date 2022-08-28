/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        customWhite: "#FFFAF6",
        customBlack: "#1B1B1B",
        customOrange: "#FF5045",
        customYellow: "#FFD88B",
      },
    },
  },
  plugins: [],
};
