/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customText: "#012a70",
        customGreen: "#73ce01",
        customBlue: "#0c66a0",
        customBackground: "#F58634",
        customGray: "#232323",
      },
      boxShadow: {
        boxShadow: "0 0 8px #00000040",
        cardShadow: "0 0 4px #f58634",
      },
    },
  },
  plugins: [],
};
