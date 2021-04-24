const getColorsByName = require("./theme/colors/getColorsByName");
const getColorsByColorName = require("./theme/colors/getColorsByColorName");
const fontFamily = require("./theme/typography/fontFamily.js");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: { ...getColorsByColorName(), ...getColorsByName() },
    fontFamily,
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
