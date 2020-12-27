const colors = require("./theme/colors/colors");
const fontFamily = require("./theme/font/fontFamily.js");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors,
    fontFamily,
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
