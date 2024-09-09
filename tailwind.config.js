/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xl: { max: "1200px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "991px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "786px" },
      // => @media (max-width: 639px) { ... }
      xsm: { max: "560px" },
      // => @media (max-width: 639px) { ... }
    },
    fontFamily: {
      custom: ['"Font One"', '"Font Two"', "sans-serif"],
      heading: ['"Gloock"', "serif"],
      buttons: ['"Inter"', "serif"],
    },

    extend: {
      colors: {
        Blue: "var(--blue)",
        Button: "var(--btnblue)",
        Yellow: "var(--yellow)",
      },
    },
  },
  plugins: [],
};
