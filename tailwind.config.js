/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "786px" },
      // => @media (max-width: 639px) { ... }
    },
    fontFamily: {
      custom: ['"Font One"', '"Font Two"', "sans-serif"],
      heading: ['"Gloock"', "serif"],
    },

    extend: {
      colors: {
        Blue: "var(--blue)",
        Yellow: "var(--yellow)",
      },
    },
  },
  plugins: [],
};
