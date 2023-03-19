/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // container: {
    //   center: true,
    // },
    screens: {
      // DEFAULT: "1rem",

      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        dark: "#1C1E21",
        white: "#ffffff",
        bg_dark: "#18191A",
        gray: "#333132",
        bg_gray: "#e9ebff",
        cyan: "rgba(75,192,192,1)",
        yellow: "#ffab00",
        blue: "#124af4",
        light_white: "#f4f4f4",
      },
    },
  },
  plugins: [],
};
