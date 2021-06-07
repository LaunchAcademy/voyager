const _ = require("lodash");
const colors = require("./colors.cjs");

const getColorsByColorName = () =>
  Object.values(colors).reduce(
    (map, colorProps) => ({
      ...map,
      [_.kebabCase(colorProps.colorName)]: colorProps.hex,
    }),
    {}
  );

module.exports = getColorsByColorName;
