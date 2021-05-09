const getColorsByName = require("./theme/colors/getColorsByName.cjs");
const getColorsByColorName = require("./theme/colors/getColorsByColorName.cjs");
const fontFamily = require("./theme/typography/fontFamily.cjs");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    colors: { ...getColorsByColorName(), ...getColorsByName() },
    fontFamily,
    fontSize: {
      xs: [".875rem", {
        lineHeight: "1.125rem",
      }],
      sm: ["1rem", {
        lineHeight: "1.33rem",
      }],
      base: ["1.125rem", { lineHeight: "1.3125rem" }],
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": ["2rem", { lineHeight: "2.25rem" }],
      "3xl": ["2.25rem", { lineHeight: "2.4rem" }],
      "5xl": "3rem",
      "6xl": ["3.75rem", { lineHeight: "3.75rem" }],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
