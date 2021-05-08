const _ = require("lodash");
const colors = require("./colors.cjs");

const getColorsByName = () => Object.keys(colors).reduce((map, name) => ({
  ...map,
  [_.kebabCase(name)]: colors[name].hex,
}), {});

module.exports = getColorsByName;
