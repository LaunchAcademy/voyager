const _ = require("lodash");
const colors = require("./colors");

const getColorsByName = () => Object.keys(colors).reduce((map, name) => ({
  ...map,
  [_.kebabCase(name)]: colors[name].hex,
}), {});

module.exports = getColorsByName;
