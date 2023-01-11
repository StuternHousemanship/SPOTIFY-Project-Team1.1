/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "468px",
      md: "768px",
      lg: "1024px",
    },
    extend: {
      spacing: {
        500: "500px",
        914: "914px",
        70: "4.375rem",
      },
      colors: {
        "squazzle-profileCard-background-white-color": "#FFFFFF",
        "squazzle-background-white-color": "#F5F5F5",
        "squazzle-text-deep-grey1-color": "#353535",
        "squazzle-text-deep-grey2-color": "#232323",
        "squazzle-text-black-color": "#000000",
        "squazzle-border-grey-color": "#BCBCBC",
        "squazzle-checkbox-border-color": "#323232",
        "squazzle-placeholder-grey-color": "#9A9A9A",
        "squazzle-password-text-grey": "#787878",
        "squazzle-text-error-red-color": "#91332D",
        "squazzle-profileCard-logout-red-color": "#8D173A",
        "squazzle-border-error--red-color": "#A20111",
        "squazzle-text-deep-green-color": "#001A1B",
        "squazzle-success-green-color": "#3D7D50",
        "squazzle-terms-policy-grey-color": "#575757",
        "squazzle-button-bg-deep-green-color": "#016D71",
        "squazzle-button-bg-light-green-color": "#CCE6E7",
        "squazzle-button-font-deep-green-color": "#002C2D",
        "squazzle-password-light-grey-color": "#787878",
        "squazzle-landingPage-bar-orange-color": "#DB5E28",
        "squazzle-landingPage-bar-black-color": "#002C2D",
        "squazzle-landingPage-twitter-blue-color": "#1DA1F2",
      },
      fontFamily: {
        sans: ['"Open Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
