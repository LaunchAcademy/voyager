const fontFamily = require("./src/typography/fontFamily.cjs")
const fontSize = require("./src/typography/fontSize.cjs")

const colors = {
  purple: "#6930C3",
  teal: "#2CCBC0",
  gold: "#FFC759",
  red: "#C33042",
  black: "#1A1A1A",
  "gray-slate": "#4f4959",
  "gray-light-slate": "#ACA9AF",
  "gray-dorian": "#F3F1F4",
  "gray-cloud": "#F8F8F8",
  brown: "#522B29",
  white: "#fff",
  "primary-brand": "#6930C3",
  "secondary-brand": "#2CCBC0",
  "tertiary-brand": "#FFC759",
  warning: "#C33042",
  text: "#1A1A1A",
  "secondary-text": "#4f4959",
  "tertiary-text": "#ACA9AF",
  accent: "#F3F1F4",
  light: "#F8F8F8",
  "photo-overlay": "#442A24",
}

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    colors,
    fontFamily,
    fontSize,
    scale: {
      25: ".25",
      50: ".5",
      75: ".75",
      90: ".9",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
