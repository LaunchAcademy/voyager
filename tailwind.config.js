const _ = require("lodash");
const colors = require("./theme/colors/colors");
const fontFamily = require("./theme/typography/fontFamily.js");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: Object.values(colors).reduce((map, colorProps) => ({
      ...map,
      [_.kebabCase(colorProps.colorName)]: colorProps.hex,
    }), {}),
    fontFamily,
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
