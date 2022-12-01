/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  //       '',
  theme: {
    colors: {
      ...colors,
    },
  },
};
